export const BlogDetailsLoader = async ({ params }) => {
    const { id } = params;
    console.log('ID from params:', id);  // Debugging to check the value of 'id'
    
    const backendURI = 'http://localhost:8000/api/blogs/single/';
    const response = await fetch(`${backendURI}${id}`);
    
    if (!response.ok) {
        throw new Error('Could not fetch the blog');
    }
    
    return response.json();
};
