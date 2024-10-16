import { useState } from "react"
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

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
        <div className="hero min-h-screen"> 
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold mb-5">Signup</h1>
                <div className="mx-6">
                    <label className="input input-bordered flex items-center gap-2 ">
                        Username:
                        <input className="grow"
                            type="text" 
                            name="username" 
                            placeholder="Enter username here"
                            onChange = {(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 my-4">
                        Email:
                        <input className="grow"
                            type="email" 
                            name="email" 
                            placeholder="Enter email here"
                            onChange = {(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 ">
                        Password:
                        <input className="grow" 
                            type="password" 
                            name="password" 
                            placeholder="Enter password here"
                            onChange = {(e) => setPassword( e.target.value )}
                        />
                    </label>
                </div>
                <p>have an account? <Link to="/login" className="btn btn-link">Login</Link></p>

                <button disabled={isLoading} type="submit" className="my-4 btn">Signup</button>
                {error && <div>{error}</div>}
            </form>
        </div>
    )
}


export default SignupPage;