import { useState } from "react"
import { useLogin } from "../hooks/useLogin";

export const LoginPage = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email, password);
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    onChange = {(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    onChange = {(e) => setPassword( e.target.value )}
                />

                <button disabled={isLoading}  type="submit">Login</button>
                {error && <div className="error">{error}</div>}
            </form>
        </>
    )
}


export default LoginPage;