export const BlogDetailsLoader = async ({ params }) => {
    const user = JSON.parse(localStorage.getItem('user'));



    const { id } = params;
    console.log('ID from params:', id);  // Debugging to check the value of 'id'
    
    const backendURI = 'http://localhost:8000/api/blogs/single/';
    const response = await fetch(`${backendURI}${id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${user.tokens.access}`,
        }
    });
    
    if (!response.ok) {
        throw new Error('Could not fetch the blog');
    }
    
    return response.json();
};
