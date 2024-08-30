const storage = require('node-persist');

function getSearchResults(source) {
    console.log('Starting to parse search results');
    let items = [];
    let searchResult = source.match(new RegExp('feed_units":(.*)},"marketplace_seo_page'));

    if (!searchResult || !searchResult[1]) {
        console.log('No match found in the HTML content');
        return items; // Return empty if no valid data
    }

    try {
        searchResult = JSON.parse(searchResult[1]);

        if (searchResult['edges'][0]['node']['__typename'] === 'MarketplaceSearchFeedNoResults') {
            console.log('No results found in the marketplace search feed');
            return items;
        } else {
            searchResult['edges'].forEach(element => {
                let id = element['node']['listing']['id'];
                let link = `https://www.facebook.com/marketplace/item/${id}`;
                let title = element['node']['listing']['marketplace_listing_title'];
                let price = element['node']['listing']['listing_price']['formatted_amount'];
                let img = element['node']['listing']['primary_listing_photo']['image']['uri'];

                const item = { "id": id, "link": link, "title": title, "price": price, "image": img };

                items.push(item);
            });
        }
    } catch (err) {
        console.error('Error parsing JSON from source:', err);
        console.error('Error details:', err.message);
        console.error('Partial searchResult:', searchResult ? JSON.stringify(searchResult).substring(0, 200) : 'undefined');
    }

    console.log(`Parsed ${items.length} items from the search results`);
    return items;
}


async function getNewItems(items) {
    console.log(`Checking for new items among ${items.length} parsed items`);
    let newItems = [];
    await storage.init();

    for (const item of items) {
        let duplicates = await storage.valuesWithKeyMatch(item.id);
        if (duplicates.length === 0) {
            newItems.push(item);
            await storage.setItem(item.id, item);
            console.log(`New item found: ${item.title}`);
        }
    }

    console.log(`Found ${newItems.length} new items`);
    return newItems;
}

module.exports = { getSearchResults, getNewItems };
