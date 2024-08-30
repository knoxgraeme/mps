const axios = require('axios');

async function getSource(search) {
    console.log(`Fetching source for search: ${JSON.stringify(search)}`);
    try {
        const url = `https://www.facebook.com/marketplace/${search.city}/search/?query=${encodeURIComponent(search.query)}&maxPrice=${search.maxPrice}`;
        const response = await axios.get('https://app.scrapingbee.com/api/v1', {
            params: {
                'api_key': process.env.scrapingbee_api_key,
                'url': url,
                'render_js': 'true',  // Ensure JS is rendered
                'premium_proxy': 'true' // Keep proxy settings if needed
            }
        });
        console.log(`ScrapingBee API response status: ${response.status}`);
        console.log(`ScrapingBee API response headers: ${JSON.stringify(response.headers)}`);
        return response;
    } catch (error) {
        console.error('Error in getSource:', error);
        if (error.response) {
            console.error('ScrapingBee API error response:', error.response.data);
        }
        throw error;
    }
}

module.exports = {getSource}
