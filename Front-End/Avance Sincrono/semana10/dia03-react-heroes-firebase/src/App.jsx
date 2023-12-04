import {auth} from './services/firebase'

import { GithubAuthProvider, signInWithPopup} from 'firebase/auth'

const App = () => {
  const login = async () => {
    const provider = new GithubAuthProvider()
    await signInWithPopup(auth,provider)
  }

  const logout = async () => {
    console.log('login...')
    await auth.signOut()
  }

  return (
    <>
      <header className='bg-amber-200 py-4 px-6'>
        <div className='container mx-auto flex justify-between'>
          <h1 className='font-bold'>Heroes App</h1>
          <nav className='flex gap-3'>
            <>
              <a to='/'>Home</a>
              <button onClick={logout}>Logout</button>
            </>
          </nav>
        </div>
      </header>
      <main className='my-6'>
        <div className='container mx-auto'>
          <div className="container mx-auto flex justify-center py-40">
            <button onClick={login} className="border px-5 py-3 w-56 bg-orange-600 text-white font-semibold">
              Login with Github
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App