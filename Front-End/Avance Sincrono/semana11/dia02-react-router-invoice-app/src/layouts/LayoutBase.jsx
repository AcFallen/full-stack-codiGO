import { Link,Outlet } from "react-router-dom"

const LayoutBase = () => {
    return(
        <>
            <header className='bg-slate-900 py-4 px-6'>
                <div className="container mx-auto flex justify-between text-white">
                <h1 className="font-bold">Invoice App</h1>
                <nav className="flex gap-4">
                    <Link to="/home" className="hover:font-bold">Home</Link>
                    <Link to="/invoices" className="hover:font-bold">Invoices</Link>
                    <Link to="/" className="hover:font-bold">Login</Link>
                </nav>
                </div>
            </header>
            <main className="my-6">
                <div className="container mx-auto">
                <Outlet />
                </div>
            </main>
        </>

    )
}

export default LayoutBase