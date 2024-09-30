import { useState } from "react";
import { Form, useActionData } from "react-router-dom";
import BlogEditor from "../components/BodyEditor";


const CreateBlog = () => {
    const [ markdownContent, setMarkdownContent ] = useState("");
    // we can use useActionData() hook to access any error messages or validation issues that were returned from the server in BlogAction
    const data = useActionData();

    return (
        <>
        <div>Create</div>
        <div className="create-form ">
            <Form method="POST" action="/create">
                <div className="flex flex-col gap-3 mb-5">
                    <label> Title: </label>
                    <input type="text" name="title" className="input w-full max-w-xs" required/>
                </div>

                {/* <div className="flex flex-col gap-3 mb-5">
                    <label> Body: </label>
                    <textarea name="body" className="textarea w-full max-w-xs" required></textarea>
                </div> */}

                <div>
                    <BlogEditor
                        value={markdownContent} onChange={setMarkdownContent}
                    />
                     {/* Hidden input to pass markdownContent in the form */}
                    <input type="hidden" name="body" value={markdownContent} />
                </div>


                <button type="submit">Submit</button>
                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
        
        </>
    )
}

export default CreateBlog;