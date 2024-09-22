import { useLoaderData, Link } from "react-router-dom";

const Home = () => {
    const blogs = useLoaderData();

    return (
        <div className="blogs ">
            {blogs && blogs.map(blog => (
                <Link
                    to={`/${blog.id}`}  // Make sure blog.id is properly used here
                    key={blog.id}
                    className="blog-card flex flex-col  rounded-xl bg-slate-200 shadow-md mx-6 py-6 px-4 mb-6 dark:bg-slate-600"
                >
                    <h2 className="text-xl font-semibold">{blog.title}</h2>
                    <p>{blog.body}</p>
                </Link>
            ))}
        </div>
    );
};

export default Home;
