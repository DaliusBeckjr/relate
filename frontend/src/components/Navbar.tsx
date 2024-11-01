

// regular navbar and later will create a side-navbar for the other blog content

const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start text-xl font-semibold "> Relate. </div>
                <div className="navbar-center"> search bar </div>
                <div className="navbar-end"> new blog </div>
            </nav>
        </>
    )
}

export default Navbar;