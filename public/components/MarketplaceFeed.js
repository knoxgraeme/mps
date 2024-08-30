const MarketplaceFeed = () => {
    const [filters, setFilters] = React.useState([]);
    const [selectedFilterId, setSelectedFilterId] = React.useState(null);
    const [items, setItems] = React.useState([]);
    const [newItems, setNewItems] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const fetchFilters = async () => {
        try {
            const response = await fetch('/api/filters');
            if (!response.ok) {
                throw new Error('Failed to fetch filters');
            }
            const data = await response.json();
            setFilters(data);
        } catch (err) {
            setError(err.message);
        }
    };

    const fetchItems = async (filterId) => {
        setLoading(true);
        try {
            const response = await fetch(`/api/items/${filterId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch items');
            }
            const data = await response.json();
            setItems(data);
            setNewItems([]);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleAddFilter = async (filterParams) => {
        setLoading(true);
        try {
            const response = await fetch('/api/filters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(filterParams),
            });
            if (!response.ok) {
                throw new Error('Failed to add filter');
            }
            const newFilter = await response.json();
            await fetchFilters();
            setSelectedFilterId(newFilter.id);
            await handleUpdate(newFilter.id);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (filterId) => {
        setLoading(true);
        try {
            const response = await fetch(`/api/scrape/${filterId}`, {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error('Failed to update filter');
            }
            await fetchFilters();
            const updatedItemsResponse = await fetch(`/api/items/${filterId}`);
            if (!updatedItemsResponse.ok) {
                throw new Error('Failed to fetch updated items');
            }
            const updatedItems = await updatedItemsResponse.json();
            const newItemIds = updatedItems.filter(updatedItem => !items.some(item => item.id === updatedItem.id)).map(item => item.id);
            setItems(updatedItems);
            setNewItems(newItemIds);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSelectFilter = (filterId) => {
        setSelectedFilterId(filterId);
        fetchItems(filterId);
    };

    React.useEffect(() => {
        fetchFilters();
    }, []);

    const selectedFilter = filters.find(filter => filter.id === selectedFilterId);

    if (loading) {
        return React.createElement('div', { className: "flex justify-center items-center h-screen" },
            React.createElement('div', { className: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500" })
        );
    }

    if (error) {
        return React.createElement('div', { className: "text-red-500 text-center p-4 bg-red-100 rounded" }, error);
    }

    return React.createElement('div', { className: "container mx-auto px-4 py-8" },
        React.createElement('div', { className: "mb-8 flex justify-between items-center" },
            React.createElement('h1', { className: "text-3xl font-bold text-gray-800" }, "Marketplace Scraper"),
            React.createElement(FilterDropdown, {
                filters: filters,
                onSelect: handleSelectFilter
            })
        ),
        React.createElement(SearchForm, { onSubmit: handleAddFilter }),
        selectedFilter && React.createElement('div', { className: "mb-6" },
            React.createElement('div', { className: "flex justify-between items-center mb-4" },
                React.createElement('h2', { className: "text-2xl font-semibold" },
                    `${selectedFilter.city} - ${selectedFilter.query} (Max: $${selectedFilter.maxPrice})`
                ),
                React.createElement('button', {
                    onClick: () => handleUpdate(selectedFilterId),
                    className: "bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                }, "Update")
            ),
            React.createElement(ItemList, { items: items, newItems: newItems })
        )
    );
};