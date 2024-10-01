import { Form, useActionData, useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import SimpleMDEditor from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export const EditBlog = () => {
    const data = useActionData();
    const { id } = useParams();
    const blog = useLoaderData();

    const [ markdownContent, setMarkdownContent ] = useState(blog.body);    

    const handleMarkdownChange = (value) => {
        setMarkdownContent(value);
    }

    return (
        
            <div className="create-form px-6 py-6 mx-5 my-6 bg-slate-600 w-full max-w-sm rounded-xl">
            <Form method="POST" action={`/edit/${id}`}>
                <div className="flex flex-col gap-3 mb-5">
                    <label> Title: </label>
                    <input 
                    type="text"
                    name="title"
                    defaultValue={blog.title} // prepopulate the form with the old data
                    className="input w-full max-w-xs" 
                    required/>
                </div>

                <div className="flex flex-col gap-3 mb-5">
                    <label> Body: </label>
                    {/* Markdown editor for body content */}
                    <SimpleMDEditor 
                        value={markdownContent}
                        onChange={handleMarkdownChange} // Update state when the content changes
                    />
                    {/* Hidden field to submit markdown content */}
                    <input type="hidden" name="body" value={markdownContent} />
                </div>

                <button type="submit">Submit</button>
                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
        
    )
}
