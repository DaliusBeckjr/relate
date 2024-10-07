import { useState } from "react"

export const SignupPage = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email, password)
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Signup</h1>
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

                <button  type="submit">Signup</button>
            </form>
        </>
    )
}


export default SignupPage;