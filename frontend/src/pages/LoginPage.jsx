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

        <div className="hero min-h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold mb-5">Login</h1>

                <label className="input input-bordered flex items-center gap-2 ">
                    Email:
                    <input className="grow"
                    type="email" 
                    name="email" 
                    placeholder="Enter email here"
                    onChange = {(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-5">
                    Password:
                    <input className="grow"
                    type="password" 
                    name="password" 
                    placeholder="Enter password here"
                    onChange = {(e) => setPassword( e.target.value )}
                />
                </label>

                <button disabled={isLoading}  type="submit" className="btn">Login</button>
                {error && <div className="error">{error}</div>}
            </form>

        </div>

    )
}


export default LoginPage;