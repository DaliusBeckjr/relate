import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const RootLayout = () => {
    return (
        <>
            <header>
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