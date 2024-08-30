const axios = require('axios');

async function getSource(search) {
    console.log(`Fetching source for search:`, search);
    console.log('API Key:', process.env.scrapingbee_api_key);

    try {
        let url = `https://www.facebook.com/marketplace/${search.city}/search/?`;

        if (search.query) {
            url += `query=${encodeURIComponent(search.query)}&`;
        }

        if (search.maxPrice) {
            url += `maxPrice=${encodeURIComponent(search.maxPrice)}`;
        }

        // Remove trailing '&' if present
        url = url.replace(/&$/, '');

        console.log('Constructed URL:', url);

        const response = await axios.get('https://app.scrapingbee.com/api/v1', {
            params: {
                'api_key': process.env.scrapingbee_api_key,
                'url': url,
                'render_js': 'true',
                'premium_proxy': 'true'
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

module.exports = { getSource };
