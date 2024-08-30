const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const scrape = require("./controllers/scrape.js");
const parse = require("./controllers/parse.js");
const cron = require('node-cron');

const app = express();
const port = process.env.PORT || 3000;

async function getItems() {
    let arrayOfItems = { pastItems: [] };

    try {
        const data = await fs.readFile("./pastItems.json", "utf-8");
        if (data) {
            arrayOfItems = JSON.parse(data);
        } else {
            console.log("pastItems.json is empty, starting with an empty array.");
        }
    } catch (err) {
        console.log("Error reading pastItems.json, starting fresh.");
    }

    const searches = [
        { term: "bicycle", location: "sydney" },
        { term: "car", location: "la" }
    ];

    for (const search of searches) {
        try {
            const source = await scrape.getSource(search);
            console.log("Raw HTML content:", source.data); // Log raw HTML content for debugging

            let items = await parse.getSearchResults(source.data);
            console.log(`Fetched items: ${JSON.stringify(items, null, 2)}`);

            let newItems = items.filter((item) => {
                if (!arrayOfItems.pastItems.some(pastItem => pastItem.id === item.id)) {
                    arrayOfItems.pastItems.push(item);
                    return true;
                }
                return false;
            });

            console.log(`New items found: ${newItems.length}`);

            if (newItems.length > 0) {
                console.log(`Found ${newItems.length} new items.`);
                // Process newItems (e.g., send an email notification)
            } else {
                console.log("No new items found.");
            }
        } catch (err) {
            console.error(`Error processing search ${search.term}: ${err}`);
        }
    }

    await fs.writeFile("./pastItems.json", JSON.stringify(arrayOfItems), "utf-8");
    console.log("Updated past items.");
}

// API route to get items
app.get('/api/items', async (req, res) => {
  try {
    const data = await fs.readFile('./pastItems.json', 'utf-8');
    const items = JSON.parse(data).pastItems;
    res.json(items);
  } catch (error) {
    console.error('Error reading pastItems.json:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

// Schedule the scraping task
cron.schedule('*/10 * * * *', function() {
    console.log('Running scraping task...');
    getItems();
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Initial scrape on server start
getItems();