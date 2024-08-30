const scrape = require("./controllers/scrape.js");
const parse = require("./controllers/parse.js");
const nodemailer = require("nodemailer");
const cron = require("node-cron");
const fs = require("fs");

async function getItems() {
    let arrayOfItems = { pastItems: [] };

    try {
        const data = fs.readFileSync("./pastItems.json", "utf-8");
        if (data) {
            arrayOfItems = JSON.parse(data);
        } else {
            console.log(
                "pastItems.json is empty, starting with an empty array.",
            );
        }
    } catch (err) {
        console.log("Error reading pastItems.json, starting fresh.");
    }

    const searches = [
        /* Your search terms here */
    ];

    for (const search of searches) {
        try {
            const source = await scrape.getSource(search);
            console.log(source.data); // Log raw HTML content for debugging

            let items = await parse.getSearchResults(source.data);

            console.log(`Fetched items: ${JSON.stringify(items, null, 2)}`);

            let newItems = items.filter((item) => {
                if (!arrayOfItems.pastItems.includes(item.id)) {
                    arrayOfItems.pastItems.push(item.id);
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

    fs.writeFileSync("./pastItems.json", JSON.stringify(arrayOfItems), "utf-8");
    console.log("Updated past items.");
}
// Call the function directly for testing
getItems();