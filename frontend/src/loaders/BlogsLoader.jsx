

export const BlogsLoader = async () => {
    const response = await fetch(`/api/blogs/`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
    });
    const json = await response.json();
    return json;
}
