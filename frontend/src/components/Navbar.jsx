import { NavLink } from "react-router-dom"



const Navbar = () => {
    return (
        <nav>
                <p className="text-xl font-semibold">Relate</p>
                <NavLink to='/'>Home</NavLink> |
                <NavLink to='/create'>Create</NavLink>
        </nav>
    )
}

export default Navbar;