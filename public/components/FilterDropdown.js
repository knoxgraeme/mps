import React, { useState } from 'react';

const FilterDropdown = ({ filters, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
            >
                Filters ({filters.length})
            </button>
            {isOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white border rounded shadow-lg z-10">
                    {filters.map((filter) => (
                        <div 
                            key={filter.id} 
                            className="p-2 border-b hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                onSelect(filter.id);
                                setIsOpen(false);
                            }}
                        >
                            <div className="font-semibold mb-1">{filter.city} - {filter.query}</div>
                            <div className="text-sm text-gray-600">Max: ${filter.maxPrice}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;