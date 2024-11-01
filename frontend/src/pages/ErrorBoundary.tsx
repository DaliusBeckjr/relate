import { useEffect } from "react";


const ErrorBoundary = () => {

    useEffect(() => {
        document.title = "Error";
    })


    return (
        <>
            <h1 className="text-3xl font-extrabold">Oops we could not find that page</h1>
            <p>maybe you can find what you are looking for here</p>
        </>
    )
}

export default ErrorBoundary;