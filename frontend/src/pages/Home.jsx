import { useLoaderData } from "react-router-dom";


const Home = () => {
    const blogs = useLoaderData();


    return (
        <>
            <div className="text-center font-semibold text-xl">Home</div>

            <div className="blogs flex flex-col gap-8 rounded-xl bg-slate-200 shadow-md mx-6 py-6 px-4 dark:bg-slate-600">
                {/* would have to use Link to navigate to single blog page */}
                {blogs && blogs.map((blog) => (
                        <div key={blog.id} className="">
                            <h2 className="text-xl font-semibold">{blog.title}</h2>
                            <p>{blog.body}</p>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Home;
