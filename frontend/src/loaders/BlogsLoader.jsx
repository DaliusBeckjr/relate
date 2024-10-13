// Since useAuthContext can only be used inside a component and not a non-component like a loader, we need to use localStorage in the loader since the user data is already being set in localStorage on login.


export const BlogsLoader = async () => {
    const user = JSON.parse(localStorage.getItem('user'))


    const response = await fetch(`http://localhost:8000/api/blogs/`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${user.tokens.access}`
        },
    });
    const json = await response.json();
    return json;
}
