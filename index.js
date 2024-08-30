const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const scrape = require("./controllers/scrape.js");
const parse = require("./controllers/parse.js");
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3000;

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Middleware to check authentication
const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (error) throw error;
    req.user = user;
    next();
  } catch (error) {
    console.error('Authentication error:', error.message);
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Apply authentication middleware to all routes except the root
app.use((req, res, next) => {
  if (req.path !== '/' && req.path !== '/favicon.ico') {
    return authenticateUser(req, res, next);
  }
  next();
});

async function getFilters(userId) {
  const { data, error } = await supabase
    .from('filters')
    .select('*')
    .eq('user_id', userId);

  if (error) throw error;
  return data;
}

async function saveFilter(userId, filter) {
  const { data, error } = await supabase
    .from('filters')
    .insert([{ ...filter, user_id: userId }]);

  if (error) throw error;
  return data;
}

async function getItems(filter) {
  console.log('getItems called with filter:', JSON.stringify(filter, null, 2));
  try {
    if (!filter || !filter.city || !filter.query) {
      throw new Error('Invalid filter object');
    }
    const source = await scrape.getSource(filter);
    console.log('Source fetched successfully');
    let items = await parse.getSearchResults(source.data);
    console.log(`Parsed ${items.length} items`);
    return items;
  } catch (err) {
    console.error(`Error processing search:`, err);
    return [];
  }
}

app.get('/api/filters', async (req, res) => {
  try {
    const filters = await getFilters(req.user.id);
    res.json(filters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/items/:filterId', async (req, res) => {
  try {
    const { data: filter, error } = await supabase
      .from('filters')
      .select('*')
      .eq('id', req.params.filterId)
      .eq('user_id', req.user.id)
      .single();

    if (error) throw error;
    if (filter) {
      const items = await getItems(filter);
      res.json(items);
    } else {
      res.status(404).json({ error: 'Filter not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/filters', async (req, res) => {
  console.log('Received request to add filter:', req.body);
  try {
    const { city, query, maxPrice } = req.body;
    const newFilter = await saveFilter(req.user.id, { city, query, maxPrice });
    console.log('New filter added:', newFilter);
    res.json(newFilter);
  } catch (error) {
    console.error('Error adding filter:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/scrape/:filterId', async (req, res) => {
  console.log('Received request to scrape for filterId:', req.params.filterId);
  try {
    const { data: filter, error } = await supabase
      .from('filters')
      .select('*')
      .eq('id', req.params.filterId)
      .eq('user_id', req.user.id)
      .single();

    if (error) throw error;
    if (filter) {
      console.log('Found filter:', JSON.stringify(filter, null, 2));
      const newItems = await getItems(filter);
      // Here you might want to save these items to Supabase as well
      res.json({ ...filter, items: newItems });
    } else {
      console.log('Filter not found for id:', req.params.filterId);
      res.status(404).json({ error: 'Filter not found' });
    }
  } catch (error) {
    console.error('Error during scraping:', error);
    res.status(500).json({ error: 'Internal server error during scraping' });
  }
});

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});