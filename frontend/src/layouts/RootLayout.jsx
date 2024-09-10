import { Outlet, NavLink } from "react-router-dom"


const RootLayout = () => {
    return (
        <>
        <header>
            <nav>
                <p className="text-xl font-semibold">Relate</p>
                <NavLink to='/'>Home</NavLink> |
                <NavLink to='/create'>Create</NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>

        </footer>
        </>
    )
}

export default RootLayout