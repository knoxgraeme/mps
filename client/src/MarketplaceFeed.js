import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

const MarketplaceFeed = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
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
          <RefreshCw className="mr-2" size={16} />
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

export default MarketplaceFeed;