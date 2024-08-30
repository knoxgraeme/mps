const scrape = require('./controllers/scrape.js');
const parse = require('./controllers/parse.js');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
var fs = require('fs');

async function getItems() {
    let arrayOfItems = [];
    try {
        const data = await fs.promises.readFile('./pastItems.json', 'utf-8');
        arrayOfItems = JSON.parse(data);
    } catch (err) {
        console.error('Error reading pastItems.json:', err);
    }

    const searches = [ /* Your search terms here */ ];

    for (const search of searches) {
        try {
            const source = await scrape.getSource(search);
            let items = await parse.getSearchResults(source.data);
            let newItems = await parse.getNewItems(items);
            
            console.log(`Found ${newItems.length} new items for search: ${search.term}`);
            
            // Add new items to arrayOfItems
            arrayOfItems = arrayOfItems.concat(newItems);
            
            // Here you can add additional processing for new items if needed
            // For example, sending notifications, etc.
        } catch (err) {
            console.error(`Error processing search ${search.term}:`, err);
        }
    }

    try {
        await fs.promises.writeFile('./pastItems.json', JSON.stringify(arrayOfItems), 'utf-8');
        console.log('Updated past items');
    } catch (err) {
        console.error('Error writing to pastItems.json:', err);
    }
}

// Schedule the scraping task
cron.schedule('*/10 * * * *', function() {
    getItems();
});
