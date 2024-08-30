import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

const Auth = () => {
    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        const session = supabase.auth.session()
        setUser(session?.user ?? null)

        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
            const currentUser = session?.user
            setUser(currentUser ?? null)
        })

        return () => {
            authListener.unsubscribe()
        }
    }, [])

    const signIn = async () => {
        const { error } = await supabase.auth.signIn({
            provider: 'google'
        })
        if (error) console.log('Error: ', error.message)
    }

    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) console.log('Error: ', error.message)
    }

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.email}!</p>
                    <button onClick={signOut}>Sign Out</button>
                </div>
            ) : (
                <button onClick={signIn}>Sign In with Google</button>
            )}
        </div>
    )
}

export default Auth