const axios = require('axios');

async function getSource(search) {
    console.log('Fetching source for search:', JSON.stringify(search, null, 2));
    console.log('API Key:', process.env.scrapingbee_api_key ? 'Set' : 'Not set');

    if (!search || typeof search !== 'object') {
        throw new Error('Invalid search object provided');
    }

    if (!search.city || !search.query) {
        throw new Error('Missing required search parameters: city or query');
    }

    try {
        const url = `https://www.facebook.com/marketplace/${encodeURIComponent(search.city)}/search/?query=${encodeURIComponent(search.query)}${search.maxPrice ? `&maxPrice=${encodeURIComponent(search.maxPrice)}` : ''}`;
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
        return response;
    } catch (error) {
        console.error('Error in getSource:', error);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        } else if (error.request) {
            console.error('No response received:', error.request);
        }
        throw error;
    }
}

module.exports = { getSource };
