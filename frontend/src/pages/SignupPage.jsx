import { useState } from "react"
import { useSignup } from "../hooks/useSignup";

export const SignupPage = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ username, setUsername ] = useState("");
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email, password)
        await signup(email, password, username);
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="username"
                    onChange = {(e) => setUsername(e.target.value)}
                />
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

                <button disabled={isLoading} type="submit">Signup</button>
                {error && <div>{error}</div>}
            </form>
        </>
    )
}


export default SignupPage;