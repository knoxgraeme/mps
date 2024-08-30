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
        console.log(`Loaded ${arrayOfItems.length} items from pastItems.json`);
    } catch (err) {
        console.error('Error reading pastItems.json:', err);
        console.log('Starting with an empty array of items');
    }

    const searches = [ /* Your search terms here */ ];
    console.log(`Starting scraping process with ${searches.length} search terms`);

    for (const search of searches) {
        try {
            console.log(`Processing search: ${JSON.stringify(search)}`);
            const source = await scrape.getSource(search);
            console.log('Source fetched successfully. Response status:', source.status);
            console.log('Response data preview:', source.data.substring(0, 200) + '...');
            
            let items = await parse.getSearchResults(source.data);
            console.log(`Parsed ${items.length} items from the source`);
            
            if (items.length === 0) {
                console.log('No items found in this search. Moving to next search term.');
                continue;
            }
            
            let newItems = await parse.getNewItems(items);
            console.log(`Found ${newItems.length} new items for search: ${JSON.stringify(search)}`);
            
            // Output details of new items
            newItems.forEach((item, index) => {
                console.log(`New item ${index + 1}:`);
                console.log(JSON.stringify(item, null, 2));
                console.log('---');
            });
            
            // Add new items to arrayOfItems
            arrayOfItems = arrayOfItems.concat(newItems);
        } catch (err) {
            console.error(`Error processing search ${JSON.stringify(search)}:`, err);
            console.error('Error stack:', err.stack);
        }
    }

    try {
        await fs.promises.writeFile('./pastItems.json', JSON.stringify(arrayOfItems), 'utf-8');
        console.log(`Updated past items. Total items: ${arrayOfItems.length}`);
    } catch (err) {
        console.error('Error writing to pastItems.json:', err);
    }
    
    console.log('Scraping process completed.');
}

// Schedule the scraping task
cron.schedule('*/10 * * * *', function() {
    getItems();
});
