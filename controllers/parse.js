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
                let listingData = element['node']['listing'];

                // Capture the selected fields
                let item = {
                    id: listingData.id || null,
                    url: `https://www.facebook.com/marketplace/item/${listingData.id}` || null,
                    primary_listing_photo: listingData.primary_listing_photo ? listingData.primary_listing_photo.image.uri : null,
                    formatted_amount: listingData.listing_price ? listingData.listing_price.formatted_amount : null,
                    city: listingData.location ? listingData.location.reverse_geocode.city : null,
                    state: listingData.location ? listingData.location.reverse_geocode.state : null,
                    marketplace_category_id: listingData.marketplace_listing_category_id || null,
                    marketplace_title: listingData.marketplace_listing_title || null,
                    link: `https://www.facebook.com/marketplace/item/${listingData.id}` || null,
                    seller_id: listingData.marketplace_listing_seller ? listingData.marketplace_listing_seller.id : null,
                    seller_name: listingData.marketplace_listing_seller ? listingData.marketplace_listing_seller.name : null,
                    is_hidden: listingData.is_hidden || false,
                    is_live: listingData.is_live || false,
                    is_pending: listingData.is_pending || false,
                    is_sold: listingData.is_sold || false,
                    create_date: new Date().toISOString() // Capture the current date and time
                };

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
            console.log(`New item found: ${item.marketplace_title}`);
        }
    }

    console.log(`Found ${newItems.length} new items`);
    return newItems;
}

module.exports = { getSearchResults, getNewItems };
