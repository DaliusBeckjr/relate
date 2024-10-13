import { useLoaderData, Link } from "react-router-dom";
// import formatDistanceToNow from "date-fns/formatDistanceToNow";


const Home = () => {
    const blogs = useLoaderData();

    return (
        <div className="blogs ">
            {Array.isArray(blogs) && blogs.length > 0 &&
                blogs.map((blog) => (
                    <Link
                        to={`/${Number(blog.id)}`}
                        key={blog.id}
                        className="blog-card flex flex-col rounded-xl bg-slate-200 shadow-md mx-6 py-6 px-4 mb-6 dark:bg-slate-600"
                    >
                        <h2 className="text-xl font-semibold">{blog.title}</h2>
                        <p>{blog.body.substring(0, 100)}...</p>
                        {/* <p>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</p> */}
                    </Link>
                ))}
            
        </div>
    );
};

export default Home;
