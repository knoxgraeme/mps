const scrape = require('./controllers/scrape.js');
const parse = require('./controllers/parse.js');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
var fs = require('fs');

async function getItems() {
    fs.readFile('./pastItems.json', 'utf-8', function(err, data) {
        arrayOfItems = JSON.parse(data);
    });

    const searches = [ /* Your search terms here */ ];

    for (const search of searches) {
        try {
            const source = await scrape.getSource(search);
            let items = await parse.getSearchResults(source.data);
            // Process items...
        } catch (err) {
            console.error(err);
        }
    }

    fs.writeFile('./pastItems.json', JSON.stringify(arrayOfItems), 'utf-8', function(err) {
        if (err) throw err;
        console.log('Updated past items');
    });
}

// Schedule the scraping task
cron.schedule('*/10 * * * *', function() {
    getItems();
});
