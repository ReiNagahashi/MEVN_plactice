import axios from 'axios';

const url = 'http://localhost:3000/blogs/api'

class BlogService{
    // Get Blog
    static async getBlogs(){
        try {  
            const res = await axios.get(url);
            const data = res.data;

        return data.map(blog => ({
                    ...blog,
                    createdAt:new Date(blog.createdAt)
                }))
            } catch (error) {
                console.log(error);
            }
    } 
    // Delete Blog
    static deleteBlog(id){
        return axios.delete(`${url}/${id}`);
    }
}

export default BlogService;