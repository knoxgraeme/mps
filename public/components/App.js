const Auth = () => {
    const [user, setUser] = React.useState(null);
    const [supabase, setSupabase] = React.useState(null);

    React.useEffect(() => {
        fetch('/env')
            .then(response => response.json())
            .then(data => {
                const { createClient } = supabaseJs;
                const supabaseInstance = createClient(data.SUPABASE_URL, data.SUPABASE_ANON_KEY);
                setSupabase(supabaseInstance);

                const session = supabaseInstance.auth.session();
                setUser(session?.user ?? null);

                const { data: authListener } = supabaseInstance.auth.onAuthStateChange((event, session) => {
                    setUser(session?.user ?? null);
                });

                return () => {
                    authListener.unsubscribe();
                };
            });
    }, []);

    const signIn = () => {
        if (!supabase) return;
        supabase.auth.signIn({
            provider: 'google'
        }).catch(error => console.log('Error: ', error.message));
    };

    const signOut = () => {
        if (!supabase) return;
        supabase.auth.signOut().catch(error => console.log('Error: ', error.message));
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

// This file is no longer needed as we've moved to vanilla JavaScript.
// The functionality has been integrated into public/js/app.js
// You can safely delete this file.