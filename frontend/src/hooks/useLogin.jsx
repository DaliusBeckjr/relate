import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";


export const useLogin = () => {
    const [ error, setError ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(null)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:8000/api/user/login', {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({ email, password })
        });
        const json = await response.json();

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))
            // update authContext
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
            navigate('/')
        }
    } 
    return { login, isLoading, error }
}