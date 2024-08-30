// Global state
let filters = [];
let selectedFilterId = null;
let items = [];
let newItems = [];

// Utility functions
function formatRelativeTime(dateString) {
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
}

// Components
function renderSearchForm() {
    return `
        <form id="searchForm" class="mb-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
            <input type="text" id="city" placeholder="City" class="p-2 border rounded w-full">
            <input type="text" id="query" placeholder="Query" class="p-2 border rounded w-full">
            <input type="number" id="maxPrice" placeholder="Max Price" class="p-2 border rounded w-full">
            <button type="submit" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">Add Filter</button>
        </form>
    `;
}

function renderFilterDropdown() {
    return `
        <div class="relative mb-4">
            <button id="filterDropdownBtn" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
                Filters (${filters.length})
            </button>
            <div id="filterDropdownContent" class="hidden absolute left-0 mt-2 w-64 bg-white border rounded shadow-lg z-10">
                ${filters.map(filter => `
                    <div class="p-2 border-b hover:bg-gray-100 cursor-pointer" data-filter-id="${filter.id}">
                        <div class="font-semibold mb-1">${filter.city} - ${filter.query}</div>
                        <div class="text-sm text-gray-600">Max: $${filter.maxPrice}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderItemList() {
    return `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            ${items.map(item => `
                <div class="border rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 relative">
                    ${newItems.includes(item.id) ? '<span class="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">New</span>' : ''}
                    <img src="${item.primary_listing_photo}" alt="${item.marketplace_title}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h2 class="font-bold text-xl mb-2 truncate">${item.marketplace_title}</h2>
                        <p class="text-gray-700 text-base mb-2">${item.formatted_amount}</p>
                        <p class="text-gray-500 text-sm mb-1">Location: ${item.city}, ${item.state}</p>
                        <p class="text-gray-500 text-sm mb-1">Status: ${item.is_sold ? 'Sold' : item.is_pending ? 'Pending' : 'Available'}</p>
                        <p class="text-gray-500 text-sm mb-1">Seen: ${formatRelativeTime(item.create_date)}</p>
                        <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block transition-colors">View Listing</a>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderMarketplaceFeed() {
    const marketplaceFeed = document.getElementById('marketplaceFeed');
    marketplaceFeed.innerHTML = `
        <div class="mb-8 flex justify-between items-center">
            <h1 class="text-3xl font-bold text-gray-800">Marketplace Scraper</h1>
            ${renderFilterDropdown()}
        </div>
        ${renderSearchForm()}
        ${selectedFilterId ? `
            <div class="mb-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-2xl font-semibold">
                        ${filters.find(f => f.id === selectedFilterId).city} - 
                        ${filters.find(f => f.id === selectedFilterId).query} 
                        (Max: $${filters.find(f => f.id === selectedFilterId).maxPrice})
                    </h2>
                    <button id="updateBtn" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                        Update
                    </button>
                </div>
                ${renderItemList()}
            </div>
        ` : ''}
    `;
    attachEventListeners();
}

// Event listeners
function attachEventListeners() {
    const searchForm = document.getElementById('searchForm');
    const filterDropdownBtn = document.getElementById('filterDropdownBtn');
    const filterDropdownContent = document.getElementById('filterDropdownContent');
    const updateBtn = document.getElementById('updateBtn');

    searchForm.addEventListener('submit', handleAddFilter);
    filterDropdownBtn.addEventListener('click', toggleFilterDropdown);
    filterDropdownContent.addEventListener('click', handleSelectFilter);
    if (updateBtn) {
        updateBtn.addEventListener('click', () => handleUpdate(selectedFilterId));
    }
}

// Event handlers
async function handleAddFilter(e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const query = document.getElementById('query').value;
    const maxPrice = document.getElementById('maxPrice').value;

    try {
        const response = await fetch('/api/filters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ city, query, maxPrice }),
        });
        if (!response.ok) {
            throw new Error('Failed to add filter');
        }
        const newFilter = await response.json();
        await fetchFilters();
        selectedFilterId = newFilter.id;
        await handleUpdate(newFilter.id);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

function toggleFilterDropdown() {
    const filterDropdownContent = document.getElementById('filterDropdownContent');
    filterDropdownContent.classList.toggle('hidden');
}

function handleSelectFilter(e) {
    const filterId = e.target.closest('[data-filter-id]').dataset.filterId;
    selectedFilterId = filterId;
    fetchItems(filterId);
    toggleFilterDropdown();
}

async function handleUpdate(filterId) {
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
        newItems = updatedItems.filter(updatedItem => !items.some(item => item.id === updatedItem.id)).map(item => item.id);
        items = updatedItems;
        renderMarketplaceFeed();
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

// API calls
async function fetchFilters() {
    try {
        const response = await fetch('/api/filters');
        if (!response.ok) {
            throw new Error('Failed to fetch filters');
        }
        filters = await response.json();
        renderMarketplaceFeed();
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

async function fetchItems(filterId) {
    try {
        const response = await fetch(`/api/items/${filterId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch items');
        }
        items = await response.json();
        newItems = [];
        renderMarketplaceFeed();
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

// Initialize the app
fetchFilters();