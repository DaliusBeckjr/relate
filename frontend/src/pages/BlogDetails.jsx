import { useLoaderData, useParams } from "react-router-dom"

export default function BlogDetails() {
    const { id } = useParams();
    const blog = useLoaderData();

    return (
        <div className="blog-details">
            <p>{ id }</p>
            <p>blog details for {blog.title}</p>
            <p>{blog.body}</p>
        </div>
    )
}
