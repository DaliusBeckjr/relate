import { redirect } from "react-router-dom";
export const BlogAction =  async ({request}) => {
    const data = await request.formData();

    const blog = {
        title: data.get('title'),
        body: data.get('body')
    }

    const response = await fetch('/api/blogs/create', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(blog)
    });

    if (!response.ok) {
        throw new Error('failed to create blog');
    }

    return redirect('/create');
}