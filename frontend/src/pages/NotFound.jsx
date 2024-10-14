import { Link } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext';

const NotFound = () => {
    const { user } = useAuthContext(); // Get the user context

    return (
        <>
            {!user ? (
                <>
                    <h2 className="text-2xl font-semibold">Page Not Found</h2>
                    <p className="text-base">The page you are looking for does not exist</p>
                    <p>Go back to the <Link to="/login" className="btn btn-link">Login Page</Link></p>
                </>
            ) : (
                <>
                    <h2 className="text-2xl font-semibold">Page Not Found</h2>
                    <p className="text-base">The page you are looking for does not exist</p>
                    <p>Go back to the <Link to="/" className="btn btn-link">Homepage</Link></p>
                </>
            )}
        </>
    );
};

export default NotFound;
