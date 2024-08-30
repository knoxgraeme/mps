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
            console.log(`Processing search: ${search.term}`);
            const source = await scrape.getSource(search);
            console.log('Source fetched successfully');
            
            let items = await parse.getSearchResults(source.data);
            console.log(`Parsed ${items.length} items from the source`);
            
            let newItems = await parse.getNewItems(items);
            console.log(`Found ${newItems.length} new items for search: ${search.term}`);
            
            // Output details of new items
            newItems.forEach((item, index) => {
                console.log(`New item ${index + 1}:`);
                console.log(`  ID: ${item.id}`);
                console.log(`  Title: ${item.title}`);
                console.log(`  Price: ${item.price}`);
                console.log(`  Link: ${item.link}`);
                console.log('---');
            });
            
            // Add new items to arrayOfItems
            arrayOfItems = arrayOfItems.concat(newItems);
        } catch (err) {
            console.error(`Error processing search ${search.term}:`, err);
        }
    }

    try {
        await fs.promises.writeFile('./pastItems.json', JSON.stringify(arrayOfItems), 'utf-8');
        console.log(`Updated past items. Total items: ${arrayOfItems.length}`);
    } catch (err) {
        console.error('Error writing to pastItems.json:', err);
    }
}

// Schedule the scraping task
cron.schedule('*/10 * * * *', function() {
    getItems();
});
