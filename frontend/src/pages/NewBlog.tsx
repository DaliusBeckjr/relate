import { useEffect } from "react";




const NewBlog = () => {

    useEffect(() => {
        document.title = "New Blog";
    })


    return (
        <div>NewBlog</div>
    )
}

export default NewBlog;