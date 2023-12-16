import { Link, Outlet, useNavigate } from "react-router-dom"

// import useAuth from "../hooks/useAuth"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"

const LayoutBase = () => {
    const {user, cleanUser} = useContext(UserContext)

    // const {isAuth, logout} = useAuth()

    const navigate = useNavigate()

    const handleLogout = () =>{
        // logout()
        cleanUser()
        navigate('/login')
    }

  return (
    <>
        <header className="bg-amber-200 py-4 px-6">
            <div className="container mx-auto flex justify-between">
                <h1 className="font-bold">Budget App</h1>
                <nav className="flex gap-3">

                    {user?.email && (
                        <>
                            
                            <div className="font-bold">
                                Welcome, {user.fullname}
                            </div>
                            <Link to='/'>Home</Link>
                            <Link to='/new-budget'>New Budget</Link>

                            <button onClick={handleLogout}>
                                Logout
                            </button>
                        </>
                        
                    )}
                    

                    {!user?.email &&(
                        <>
                            <Link to='/login'>Login</Link> 
                            <Link to='/register'>Register</Link> 
                        </>
                    )} 
                    
                </nav>
            </div>
        </header>

        <main className="m-6">
            <div className="container mx-auto">
                <Outlet />
            </div>
        </main>
    </>
   
  )
}

export default LayoutBase