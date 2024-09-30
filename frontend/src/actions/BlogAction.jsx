import { redirect } from "react-router-dom"

const blogAction = async ({ request }) => {
    const be_URI = 'http://localhost:8000/api/blogs/create/'
    const data = await request.formData();

    const blog = {
        title: data.get('title'),
        body: data.get('body') 
    }
    console.log(blog)

    const response = await fetch(be_URI, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(blog)
    })
    const json = await response.json()

    // Handle errors from backend response
    if (!response.ok) {
        return {
            error: json.error,
            emptyFields: json.emptyFields,
        }
    }

    // Successful, redirect to another route
    if (response.ok) {
        return redirect('/')
    }
}

export default blogAction;