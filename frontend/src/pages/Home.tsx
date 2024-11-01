import { useEffect } from "react";


const Home = () => {

    useEffect(() => {
        document.title = "Home";

        const fetchBlogs = async () => {
            const response = await fetch("http://localhost:8000/api/blogs/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const json = await response.json();

            console.log(json);
        }
        fetchBlogs();
    }, [])

    return (
        <>
            <h1 className="text-2xl font-semibold">dashboard</h1>
            
        </>
    )
}



export default Home;