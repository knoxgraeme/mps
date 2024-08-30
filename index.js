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

// API route to add a new filter
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
    await saveFilters();
    console.log('New filter added:', newFilter);
    res.json(newFilter);
});

// API route to trigger scraping for a specific filter
app.post('/api/scrape/:filterId', async (req, res) => {
    console.log('Received request to scrape for filterId:', req.params.filterId);
    const filterId = parseInt(req.params.filterId);
    const filter = savedFilters.find(f => f.id === filterId);

    if (filter) {
        console.log('Found filter:', JSON.stringify(filter, null, 2));
        try {
            const newItems = await getItems(filter);
            filter.items = newItems;
            await saveFilters();
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

// Load saved filters when the server starts
loadFilters().then(() => {
    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });
});