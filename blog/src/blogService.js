import axios from 'axios';

const url = 'http://localhost:3000/blogs/api/'

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
    // show post
    static async showBlog(id){
        try{
            const res = await axios.get(`${url}${id}`);
            return res.data;
        }catch(error){
            console.log(error);
        }
    }
    // Create Post
    static insertPost(post){
        return axios.post(url,post);
    }
    // Update Post
    static updatePost(id,post){
        return axios.put(`${url}${id}`,post);
    }
    // Delete Blog
    static deleteBlog(id){
        return axios.delete(`${url}${id}`);
    }
}
export default BlogService;