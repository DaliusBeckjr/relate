

export const BlogsLoader = async () => {
    const response = await fetch(`http://localhost:8000/api/blogs/`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
    });
    const json = await response.json();
    return json;
}
