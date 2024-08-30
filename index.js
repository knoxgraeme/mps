const express = require('express');
const fs = require('fs').promises;
const scrape = require("./controllers/scrape.js");
const parse = require("./controllers/parse.js");
const cron = require('node-cron');

const app = express();
const port = process.env.PORT || 3000;

async function getItems() {
    let arrayOfItems = { pastItems: [] };

    try {
        const data = await fs.readFile("./pastItems.json", "utf-8");
        if (data) {
            arrayOfItems = JSON.parse(data);
        } else {
            console.log("pastItems.json is empty, starting with an empty array.");
        }
    } catch (err) {
        console.log("Error reading pastItems.json, starting fresh.");
    }

    const searches = [
        { term: "bicycle", location: "sydney" },
        { term: "car", location: "la" }
    ];

    for (const search of searches) {
        try {
            const source = await scrape.getSource(search);
            let items = await parse.getSearchResults(source.data);

            let newItems = items.filter((item) => {
                if (!arrayOfItems.pastItems.some(pastItem => pastItem.id === item.id)) {
                    arrayOfItems.pastItems.push(item);
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

    await fs.writeFile("./pastItems.json", JSON.stringify(arrayOfItems), "utf-8");
    console.log("Updated past items.");
}

// API route to get items
app.get('/api/items', async (req, res) => {
  try {
    const data = await fs.readFile('./pastItems.json', 'utf-8');
    const items = JSON.parse(data).pastItems;
    res.json(items);
  } catch (error) {
    console.error('Error reading pastItems.json:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve the HTML page with embedded React app
app.get('*', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Marketplace Scraper</title>
        <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
        <div id="root"></div>
        <script type="text/babel">
            const MarketplaceFeed = () => {
                const [items, setItems] = React.useState([]);
                const [loading, setLoading] = React.useState(true);
                const [error, setError] = React.useState(null);

                const fetchItems = async () => {
                    setLoading(true);
                    try {
                        const response = await fetch('/api/items');
                        if (!response.ok) {
                            throw new Error('Failed to fetch items');
                        }
                        const data = await response.json();
                        setItems(data);
                        setError(null);
                    } catch (err) {
                        setError(err.message);
                    } finally {
                        setLoading(false);
                    }
                };

                React.useEffect(() => {
                    fetchItems();
                }, []);

                if (loading) {
                    return <div className="flex justify-center items-center h-screen">Loading...</div>;
                }

                if (error) {
                    return <div className="text-red-500 text-center">{error}</div>;
                }

                return (
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold">Marketplace Feed</h1>
                            <button 
                                onClick={fetchItems}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
                            >
                                Refresh
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {items.map((item) => (
                                <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg">
                                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <h2 className="font-bold text-xl mb-2 truncate">{item.title}</h2>
                                        <p className="text-gray-700 text-base mb-2">{item.price}</p>
                                        <a 
                                            href={item.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block"
                                        >
                                            View Item
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            };

            const App = () => {
                return (
                    <div className="bg-gray-100 min-h-screen">
                        <header className="bg-blue-600 text-white p-4">
                            <h1 className="text-2xl font-bold">Facebook Marketplace Scraper</h1>
                        </header>
                        <main>
                            <MarketplaceFeed />
                        </main>
                    </div>
                );
            };

            ReactDOM.render(<App />, document.getElementById('root'));
        </script>
    </body>
    </html>
  `);
});

// Schedule the scraping task
cron.schedule('*/10 * * * *', function() {
    console.log('Running scraping task...');
    getItems();
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Initial scrape on server start
getItems();