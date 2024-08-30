let supabase;

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/env');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { SUPABASE_URL, SUPABASE_ANON_KEY } = await response.json();
        console.log('Supabase URL:', SUPABASE_URL);
        console.log('Supabase Anon Key:', SUPABASE_ANON_KEY);

        if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
            throw new Error('Supabase credentials are missing');
        }

        if (typeof supabaseJs === 'undefined' || typeof supabaseJs.createClient !== 'function') {
            throw new Error('Supabase library is not loaded correctly');
        }

        supabase = supabaseJs.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        const authContainer = document.getElementById('auth-container');
        const contentContainer = document.getElementById('content');
        
        updateAuthUI(authContainer);
        updateContent(contentContainer);

        supabase.auth.onAuthStateChange(() => {
            updateAuthUI(authContainer);
            updateContent(contentContainer);
        });
    } catch (error) {
        console.error('Error initializing app:', error);
        document.body.innerHTML = `<div class="p-4 bg-red-100 text-red-700">Error: ${error.message}</div>`;
    }
});

function updateAuthUI(container) {
    const session = supabase.auth.session();
    if (session) {
        showLoggedInState(container, session.user);
    } else {
        showLoggedOutState(container);
    }
}

function showLoggedInState(container, user) {
    container.innerHTML = `
        <p class="mr-4">Welcome, ${user.email}!</p>
        <button id="sign-out-btn" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Sign Out
        </button>
    `;
    document.getElementById('sign-out-btn').addEventListener('click', signOut);
}

function showLoggedOutState(container) {
    container.innerHTML = `
        <button id="sign-in-btn" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Sign In with Google
        </button>
    `;
    document.getElementById('sign-in-btn').addEventListener('click', signIn);
}

function updateContent(container) {
    const session = supabase.auth.session();
    if (session) {
        container.innerHTML = `
            <h2 class="text-xl font-bold mb-4">Your Marketplace Filters</h2>
            <div id="filters-list"></div>
            <button id="add-filter-btn" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add New Filter
            </button>
        `;
        document.getElementById('add-filter-btn').addEventListener('click', showAddFilterForm);
        loadFilters();
    } else {
        container.innerHTML = `
            <p class="text-lg">Please sign in to access your Marketplace filters.</p>
        `;
    }
}

async function signIn() {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
    });
    if (error) console.error('Error signing in:', error.message);
}

async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Error signing out:', error.message);
}

async function loadFilters() {
    const response = await fetch('/api/filters');
    const filters = await response.json();
    const filtersList = document.getElementById('filters-list');
    filtersList.innerHTML = filters.map(filter => `
        <div class="mb-4 p-4 bg-white shadow rounded">
            <h3 class="font-bold">${filter.query} in ${filter.city}</h3>
            <p>Max Price: $${filter.maxPrice}</p>
            <button class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onclick="scrapeFilter(${filter.id})">
                Scrape Now
            </button>
        </div>
    `).join('');
}

function showAddFilterForm() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2 class="text-xl font-bold mb-4">Add New Filter</h2>
        <form id="add-filter-form" class="space-y-4">
            <div>
                <label for="city" class="block mb-1">City</label>
                <input type="text" id="city" name="city" required class="w-full px-3 py-2 border rounded">
            </div>
            <div>
                <label for="query" class="block mb-1">Search Query</label>
                <input type="text" id="query" name="query" required class="w-full px-3 py-2 border rounded">
            </div>
            <div>
                <label for="maxPrice" class="block mb-1">Max Price</label>
                <input type="number" id="maxPrice" name="maxPrice" required class="w-full px-3 py-2 border rounded">
            </div>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Filter
            </button>
        </form>
    `;
    document.getElementById('add-filter-form').addEventListener('submit', addFilter);
}

async function addFilter(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filterData = Object.fromEntries(formData.entries());
    
    const response = await fetch('/api/filters', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(filterData),
    });

    if (response.ok) {
        const contentContainer = document.getElementById('content');
        updateContent(contentContainer);
    } else {
        console.error('Error adding filter');
    }
}

async function scrapeFilter(filterId) {
    const response = await fetch(`/api/scrape/${filterId}`, { method: 'POST' });
    if (response.ok) {
        const filter = await response.json();
        console.log('Scraped items:', filter.items);
        // You can update the UI here to show the scraped items
    } else {
        console.error('Error scraping filter');
    }
}