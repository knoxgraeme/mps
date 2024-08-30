let supabase;

document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/env');
    const { SUPABASE_URL, SUPABASE_ANON_KEY } = await response.json();
    supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const authContainer = document.getElementById('auth-container');
    const session = supabase.auth.session();

    if (session) {
        showLoggedInState(authContainer, session.user);
    } else {
        showLoggedOutState(authContainer);
    }

    supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN') {
            showLoggedInState(authContainer, session.user);
        } else if (event === 'SIGNED_OUT') {
            showLoggedOutState(authContainer);
        }
    });
});

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

async function signIn() {
    const { error } = await supabase.auth.signIn({ provider: 'google' });
    if (error) console.error('Error signing in:', error.message);
}

async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Error signing out:', error.message);
}