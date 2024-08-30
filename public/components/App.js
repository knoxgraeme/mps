import React from 'react';
import MarketplaceFeed from './MarketplaceFeed';

const App = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <div className="container mx-auto">
                    <h1 className="text-2xl font-bold">Facebook Marketplace Scraper</h1>
                </div>
            </header>
            <main className="mt-6">
                <MarketplaceFeed />
            </main>
        </div>
    );
};

export default App;