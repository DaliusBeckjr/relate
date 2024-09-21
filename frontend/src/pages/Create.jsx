import { Form } from "react-router-dom";


const Create = () => {
    return (
        <>
        <div>Create</div>
        <Form>
            <label>Title</label>
            <input type="text" name="title" />
            <label> Body</label>
            <textarea name="body"></textarea>
            <button type="submit">Submit</button>
        </Form>
        </>
    )
}

export default Create;