import { useEffect, useState } from "react";
// import { useBlogsContext } from "../hooks/useBlogsContext";


const Home = () => {
    // const { state, dispatch } = useBlogsContext();
    // const { blogs } = state;
    const [ blogs, setBlogs ] = useState(null);


    // useEffect fires a function when the component is rendered and when it is re-rendered
    useEffect(() => {
        const fetchBlogs = async () => {
                const response = await fetch(`/api/blogs/`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    },
                });
                const json = await response.json();

                if (response.ok) {
                    setBlogs(json);
                    // dispatch({type: "SET_BLOGS", payload: json});
                }
        };

        fetchBlogs();
    }, []);

    return (
        <>
            <div className="text-center font-semibold text-xl">Home</div>
            <div className="blogs flex flex-col gap-8 rounded-xl bg-slate-200 shadow-md mx-6 py-6 px-4">
                {/* would have to use Link to navigate to single blog page */}
                {blogs && blogs.map((blog) => (
                        <div key={blog.id} className="blog">
                            <h2 className="text-xl font-semibold">{blog.title}</h2>
                            <p>{blog.body}</p>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Home;
