import { NavLink } from "react-router-dom"
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";



const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    }

    return (
        // going to make this navbar responsive but a bit more complicated and different to give it a nice look and feel. want something alluring for a blog app. 
        <nav className="flex justify-between items-center  bg-slate-200 rounded-xl py-4 px-6 glass dark:glass-dark">
                <p className="text-xl font-semibold text-indigo-600">Relate</p>
                <div className="">
                {user && (<div>
                    <NavLink to='/' className="hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-indigo-500 text-slate-800 font-bold text-base  mx-5"> Home</NavLink> 
                    <NavLink to='/create' className="btn btn-primary">Create Post</NavLink>
                    <button onClick={handleClick}>Logout</button>
                </div>)}

                {!user && (
                    <div className="mx-5">
                        <NavLink to='/login' className="mx-3 hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-indigo-500 text-slate-800 font-bold text-base dark:text-slate-300">Login</NavLink>
                        <NavLink to='/signup' className="hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-indigo-500 text-slate-800 font-bold text-base dark:text-slate-300">Signup</NavLink> 
                    </div>
                )}
                </div>
        </nav>
    )
}

export default Navbar;