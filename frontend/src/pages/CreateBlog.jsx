import { useState } from "react";
import { Form, useActionData } from "react-router-dom";
import SimpleMDEditor from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


const CreateBlog = () => {
    const [markdownContent, setMarkdownContent] = useState("");
    const data = useActionData(); // Access validation issues from server

    const onChange = (markdownContent) => {
        setMarkdownContent(markdownContent);
        console.log({"content": setMarkdownContent})
    };

    return (
        <>
            <div>Create</div>
            <div className="create-form">
                {/* Form component for submission */}
                <Form method="POST" action="/create">
                    {/* Blog title input */}
                    <div className="flex flex-col gap-3 mb-5">
                        <label>Title:</label>
                        <input type="text" name="title" className="input w-full max-w-xs" required />
                    </div>

                    {/* Markdown editor for body content */}
                    <div className="flex flex-col gap-3 mb-5">
                        <label>Body:</label>
                        <SimpleMDEditor 
                            value={markdownContent} 
                            onChange={onChange} 
                        />
                    </div>

                    {/* Hidden input to include the markdown content in the form submission */}
                    <input type="hidden" name="body" value={markdownContent} />

                    <button type="submit">Submit</button>
                    {data && data.error && <p>{data.error}</p>}
                </Form>
            </div>
        </>
    );
};

export default CreateBlog;
