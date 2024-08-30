const express = require('express');
const app = express();
const port = 3000;
const { getSource } = require('./controllers/scrape');
const cheerio = require('cheerio');

app.use(express.json());

let filters = [];

async function getItems(search) {
  console.log(`getItems called with search: ${JSON.stringify(search)}`);
  try {
    const response = await getSource(search);
    const $ = cheerio.load(response.data);
    const items = [];

    $('div[data-testid="marketplace_feed_item"]').each((index, element) => {
      const item = {
        title: $(element).find('span[dir="auto"]').first().text(),
        price: $(element).find('span[aria-label]').first().text(),
        link: 'https://www.facebook.com' + $(element).find('a').attr('href'),
        image: $(element).find('img').attr('src'),
        filterId: search.id  // Associate each item with the filter ID
      };
      items.push(item);
    });

    console.log(`Found ${items.length} items for filter ID ${search.id}`);
    return items;
  } catch (error) {
    console.error('Error in getItems:', error);
    throw error;
  }
}

app.post('/filter', (req, res) => {
  const { city, query, maxPrice } = req.body;
  const newFilter = { id: filters.length + 1, city, query, maxPrice, items: [] };
  filters.push(newFilter);
  res.json(newFilter);
});

app.get('/filters', (req, res) => {
  res.json(filters);
});

app.post('/scrape', async (req, res) => {
  try {
    for (let filter of filters) {
      console.log(`Processing search: ${JSON.stringify(filter)}`);
      try {
        const newItems = await getItems(filter);
        filter.items = [...filter.items, ...newItems];
        console.log(`Updated filter ${filter.id} with ${newItems.length} new items`);
      } catch (error) {
        console.error(`Error processing search for filter ${filter.id}: ${error}`);
      }
    }
    res.json({ message: 'Scrape completed', filters: filters });
  } catch (error) {
    console.error('Error in /scrape:', error);
    res.status(500).json({ error: 'An error occurred during scraping' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});