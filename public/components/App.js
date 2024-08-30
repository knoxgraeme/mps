const Auth = () => {
    const [user, setUser] = React.useState(null);
    const [supabase, setSupabase] = React.useState(null);

    React.useEffect(() => {
        const loadSupabase = async () => {
            const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.21.0/+esm');
            const supabaseUrl = 'https://YOUR_SUPABASE_URL.supabase.co';
            const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
            const supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
            setSupabase(supabaseInstance);

            const session = supabaseInstance.auth.session();
            setUser(session?.user ?? null);

            const { data: authListener } = supabaseInstance.auth.onAuthStateChange((event, session) => {
                setUser(session?.user ?? null);
            });

            return () => {
                authListener.unsubscribe();
            };
        };

        loadSupabase();
    }, []);

    const signIn = async () => {
        if (!supabase) return;
        const { error } = await supabase.auth.signIn({
            provider: 'google'
        });
        if (error) console.log('Error: ', error.message);
    };

    const signOut = async () => {
        if (!supabase) return;
        const { error } = await supabase.auth.signOut();
        if (error) console.log('Error: ', error.message);
    };

    return React.createElement('div', null,
        user
            ? React.createElement('div', null,
                React.createElement('p', null, `Welcome, ${user.email}!`),
                React.createElement('button', { onClick: signOut }, "Sign Out")
            )
            : React.createElement('button', { onClick: signIn }, "Sign In with Google")
    );
};

const App = () => {
    return React.createElement('div', { className: "bg-gray-100 min-h-screen" },
        React.createElement('header', { className: "bg-blue-600 text-white p-4 shadow-md" },
            React.createElement('div', { className: "container mx-auto flex justify-between items-center" },
                React.createElement('h1', { className: "text-2xl font-bold" }, "Facebook Marketplace Scraper"),
                React.createElement(Auth)
            )
        ),
        React.createElement('main', { className: "mt-6" },
            React.createElement('p', null, "Content goes here")
        )
    );
};