const FilterDropdown = ({ filters, onSelect }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return React.createElement('div', { className: "relative" },
        React.createElement('button', {
            onClick: () => setIsOpen(!isOpen),
            className: "bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        }, `Filters (${filters.length})`),
        isOpen && React.createElement('div', { className: "absolute left-0 mt-2 w-64 bg-white border rounded shadow-lg z-10" },
            filters.map((filter) => 
                React.createElement('div', {
                    key: filter.id,
                    className: "p-2 border-b hover:bg-gray-100 cursor-pointer",
                    onClick: () => {
                        onSelect(filter.id);
                        setIsOpen(false);
                    }
                },
                    React.createElement('div', { className: "font-semibold mb-1" }, `${filter.city} - ${filter.query}`),
                    React.createElement('div', { className: "text-sm text-gray-600" }, `Max: $${filter.maxPrice}`)
                )
            )
        )
    );
};