import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
    const [city, setCity] = useState('');
    const [query, setQuery] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ city, query, maxPrice });
        setCity('');
        setQuery('');
        setMaxPrice('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="p-2 border rounded w-full"
            />
            <input
                type="text"
                placeholder="Query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="p-2 border rounded w-full"
            />
            <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="p-2 border rounded w-full"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
                Add Filter
            </button>
        </form>
    );
};

export default SearchForm;