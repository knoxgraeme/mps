const App = () => {
    return React.createElement('div', { className: "bg-gray-100 min-h-screen" },
        React.createElement('header', { className: "bg-blue-600 text-white p-4 shadow-md" },
            React.createElement('div', { className: "container mx-auto" },
                React.createElement('h1', { className: "text-2xl font-bold" }, "Facebook Marketplace Scraper")
            )
        ),
        React.createElement('main', { className: "mt-6" },
            React.createElement(MarketplaceFeed)
        )
    );
};