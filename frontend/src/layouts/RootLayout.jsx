import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const RootLayout = () => {
    return (
        <>
            <header className="px-6 py-6 sticky top-0">
                <Navbar />
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