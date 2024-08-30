const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const scrape = require("./controllers/scrape.js");
const parse = require("./controllers/parse.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let savedFilters = [];

async function getItems(search) {
    console.log('getItems called with search:', JSON.stringify(search));
    try {
        const source = await scrape.getSource({
            city: search.city,
            query: search.query,
            maxPrice: search.maxPrice
        });
        console.log('Source fetched successfully');
        let items = await parse.getSearchResults(source.data);
        console.log(`Parsed ${items.length} items`);
        return items;
    } catch (err) {
        console.error(`Error processing search: ${err}`);
        return [];
    }
}
// API route to get all filters
app.get('/api/filters', (req, res) => {
    res.json(savedFilters);
});

// API route to get items for a specific filter
app.get('/api/items/:filterId', (req, res) => {
    const filterId = parseInt(req.params.filterId);
    const filter = savedFilters.find(f => f.id === filterId);
    if (filter) {
        res.json(filter.items);
    } else {
        res.status(404).json({ error: 'Filter not found' });
    }
});

// API route to add a new filter and start scraping
app.post('/api/filters', async (req, res) => {
    console.log('Received request to add filter:', req.body);
    const { city, query, maxPrice } = req.body;
    const newFilter = {
        id: savedFilters.length + 1,
        city,
        query,
        maxPrice,
        items: []
    };

    savedFilters.push(newFilter);
    console.log('New filter added:', newFilter);

    try {
        const newItems = await getItems(newFilter);
        newFilter.items = newItems;
        res.json(newFilter);
    } catch (error) {
        console.error('Error during scraping:', error);
        res.status(500).json({ error: 'Internal server error during scraping' });
    }
});

// API route to update items for a specific filter
app.post('/api/scrape/:filterId', async (req, res) => {
    console.log('Received request to scrape for filterId:', req.params.filterId);
    const filterId = parseInt(req.params.filterId);
    const filter = savedFilters.find(f => f.id === filterId);

    if (filter) {
        console.log('Found filter:', filter);
        try {
            const newItems = await getItems(filter);

            // Merge new items with existing items, avoiding duplicates
            const existingIds = new Set(filter.items.map(item => item.id));
            const uniqueNewItems = newItems.filter(item => !existingIds.has(item.id));

            filter.items = [...uniqueNewItems, ...filter.items];
            console.log(`Updated filter with ${uniqueNewItems.length} new items`);
            res.json(filter);
        } catch (error) {
            console.error('Error during scraping:', error);
            res.status(500).json({ error: 'Internal server error during scraping' });
        }
    } else {
        console.log('Filter not found for id:', filterId);
        res.status(404).json({ error: 'Filter not found' });
    }
});

// Serve the main HTML file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});