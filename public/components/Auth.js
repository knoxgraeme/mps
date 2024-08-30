const Auth = () => {
    const [user, setUser] = React.useState(null)
    const [supabase, setSupabase] = React.useState(null)

    React.useEffect(() => {
        const initSupabase = async () => {
            const { createClient } = await import('@supabase/supabase-js')
            const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
            const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY
            const supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
            setSupabase(supabaseInstance)

            const session = supabaseInstance.auth.session()
            setUser(session?.user ?? null)

            const { data: authListener } = supabaseInstance.auth.onAuthStateChange(async (event, session) => {
                const currentUser = session?.user
                setUser(currentUser ?? null)
            })

            return () => {
                authListener.unsubscribe()
            }
        }

        initSupabase()
    }, [])

    const signIn = async () => {
        if (!supabase) return
        const { error } = await supabase.auth.signIn({
            provider: 'google'
        })
        if (error) console.log('Error: ', error.message)
    }

    const signOut = async () => {
        if (!supabase) return
        const { error } = await supabase.auth.signOut()
        if (error) console.log('Error: ', error.message)
    }

    return (
        React.createElement('div', null,
            user
                ? React.createElement('div', null,
                    React.createElement('p', null, `Welcome, ${user.email}!`),
                    React.createElement('button', { onClick: signOut }, "Sign Out")
                )
                : React.createElement('button', { onClick: signIn }, "Sign In with Google")
        )
    )
}

export default Auth