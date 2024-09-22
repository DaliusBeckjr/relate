import { useLoaderData, useParams, Link, useNavigate } from "react-router-dom"

export default function BlogDetails() {
    const { id } = useParams();
    const blog = useLoaderData();
    const navigate = useNavigate();

    const handleClick = async () => {
        const response = await fetch('http://localhost:8000/api/blogs/delete/' + id, {
            method: 'DELETE',
        })

        if (response.ok) {
            navigate('/');
        }

    }

    return (
        <div className="blog-details">
            <p>{ id }</p>
            <p>blog details for {blog.title}</p>
            <p>{blog.body}</p>

            <Link to={`/edit/${id}`} className="btn btn-primary">Edit</Link>
            <span className="btn btn-primary btn-outline" onClick={handleClick}> Delete </span>
        </div>
    )
}
