const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const scrape = require("./controllers/scrape.js");
const parse = require("./controllers/parse.js");
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3000;

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let savedFilters = [];

// Function to save filters to a JSON file
async function saveFilters() {
    await fs.writeFile('savedFilters.json', JSON.stringify(savedFilters, null, 2));
}

// Function to load filters from a JSON file
async function loadFilters() {
    try {
        const data = await fs.readFile('savedFilters.json', 'utf8');
        savedFilters = JSON.parse(data);
    } catch (error) {
        console.log('No saved filters found. Starting with an empty array.');
        savedFilters = [];
    }
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

// API route to get all filters
app.get('/api/filters', async (req, res) => {
    const { data, error } = await supabase
        .from('filters')
        .select('*');
    
    if (error) {
        res.status(500).json({ error: error.message });
    } else {
        res.json(data);
    }
});

// API route to get items for a specific filter
app.get('/api/items/:filterId', async (req, res) => {
    const filterId = parseInt(req.params.filterId);
    const { data, error } = await supabase
        .from('items')
        .select('*')
        .eq('filter_id', filterId);
    
    if (error) {
        res.status(500).json({ error: error.message });
    } else if (data.length === 0) {
        res.status(404).json({ error: 'No items found for this filter' });
    } else {
        res.json(data);
    }
});

// API route to add a new filter
app.post('/api/filters', async (req, res) => {
    console.log('Received request to add filter:', req.body);
    const { city, query, maxPrice } = req.body;
    const { data, error } = await supabase
        .from('filters')
        .insert({ city, query, max_price: maxPrice })
        .select();

    if (error) {
        console.error('Error adding new filter:', error);
        res.status(500).json({ error: error.message });
    } else {
        console.log('New filter added:', data[0]);
        res.json(data[0]);
    }
});

// API route to trigger scraping for a specific filter
app.post('/api/scrape/:filterId', async (req, res) => {
    console.log('Received request to scrape for filterId:', req.params.filterId);
    const filterId = parseInt(req.params.filterId);
    
    const { data: filter, error: filterError } = await supabase
        .from('filters')
        .select('*')
        .eq('id', filterId)
        .single();

    if (filterError) {
        console.log('Filter not found for id:', filterId);
        res.status(404).json({ error: 'Filter not found' });
        return;
    }

    console.log('Found filter:', JSON.stringify(filter, null, 2));
    try {
        const newItems = await getItems(filter);
        
        // Insert new items into the database
        const { data: insertedItems, error: insertError } = await supabase
            .from('items')
            .insert(newItems.map(item => ({ ...item, filter_id: filterId })))
            .select();

        if (insertError) {
            throw insertError;
        }

        res.json(insertedItems);
    } catch (error) {
        console.error('Error during scraping:', error);
        res.status(500).json({ error: 'Internal server error during scraping' });
    }
});

// Serve the main HTML file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Load saved filters when the server starts
loadFilters().then(() => {
    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });
});