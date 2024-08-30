const ItemList = ({ items, newItems }) => {
    const formatRelativeTime = (dateString) => {
        if (!dateString) return 'Unknown';
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'Invalid Date';

        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);

        if (diffInSeconds < 60) return 'Just now';
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
        if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
        return date.toLocaleString();
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
                <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 relative">
                    {newItems.includes(item.id) && (
                        <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            New
                        </span>
                    )}
                    <img src={item.primary_listing_photo} alt={item.marketplace_title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="font-bold text-xl mb-2 truncate">{item.marketplace_title}</h2>
                        <p className="text-gray-700 text-base mb-2">{item.formatted_amount}</p>
                        <p className="text-gray-500 text-sm mb-1">Location: {item.city}, {item.state}</p>
                        <p className="text-gray-500 text-sm mb-1">Status: {item.is_sold ? 'Sold' : item.is_pending ? 'Pending' : 'Available'}</p>
                        <p className="text-gray-500 text-sm mb-1">Seen: {formatRelativeTime(item.create_date)}</p>
                        <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block transition-colors"
                        >
                            View Listing
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};