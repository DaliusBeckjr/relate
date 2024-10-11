import { NavLink } from "react-router-dom"
import { useLogout } from "../hooks/useLogout";



const Navbar = () => {
    const { logout } = useLogout();

    const handleClick = () => {
        logout();

    }

    return (
        // going to make this navbar responsive but a bit more complicated and different to give it a nice look and feel. want something alluring for a blog app. 
        <nav className="flex justify-between items-center  bg-slate-200 rounded-xl py-4 px-6 glass dark:glass-dark">
                <p className="text-xl font-semibold text-indigo-600">Relate</p>
                <div className="">
                <NavLink to='/' className="hover:underline hover: decoration-2 hover:underline-offset-8 hover:decoration-indigo-500 text-slate-800 font-bold text-base  mx-5"> Home</NavLink> 
                <NavLink to='/create' className="btn btn-primary">Create Post</NavLink>
                <NavLink to='/login'>Login</NavLink> |
                <NavLink to='/signup'>Signup</NavLink> | 
                <button onClick={handleClick}>Logout</button>
                </div>
        </nav>
    )
}

export default Navbar;