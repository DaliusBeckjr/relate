import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();


    const logout = () => {
        // remove user from local storage
        localStorage.removeItem('user');

        // dipatch logout action
        dispatch({type: 'LOGOUT'});

        navigate('/login');
    };

    return { logout };

    };