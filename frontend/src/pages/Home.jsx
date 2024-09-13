import { useEffect, useState } from "react";


const Home = () => {
    const [ blogs, setBlogs ] = useState([]);

    useEffect(() => {
        const fetchblogs = async () => {
            const response = await fetch(`http://localhost:8000/blogs/all`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                },
            });
            const json = await response.json();
            if(response.ok){
                setBlogs(json)
            }
        };
        fetchblogs();
    }, [])

    return (
        <>
        <div>Home</div>
        <div className="blogs">
        {blogs.map((blog) => (
            <div key={blog.id} className="blog">
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
            </div>
        ))}
        </div>
        </>
    )
}

export default Home;