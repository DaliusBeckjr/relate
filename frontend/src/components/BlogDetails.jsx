/* eslint-disable react/prop-types */





const BlogDetails = ({ blog }) => {


    return (
        <div className="blog-details">
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
        </div>
    )
}


export default BlogDetails;