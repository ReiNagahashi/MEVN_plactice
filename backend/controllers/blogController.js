const Blog = require('../models/blog');
//Basic syntax of method descriptions 😃👉 blog_index, blog_details, blog_crate_get, blog_create_post, blog_delete
// Index
const blog_index = async (req,res) => {
    const result = await Blog.find().sort({ createdAt: -1 });
    res.send(result);
}
// Details
const blog_details = async (req,res) => {
    const id = req.params.id
    try{
        const result = await Blog.findById(id);
        res.status(201).send(result);
    }catch(err){
        console.log(err);
    }
}
// Create
    // const blog_crate_get = (req,res) => {
    //     res.render('blogs/create',{ title:'Create a new blog' });
    // }
// Store
const blog_create_post = async (req,res) => {
    const {title,snippet,body} = req.body;
    try {
        const blog = await Blog.create({ title,snippet,body });
        res.status(201).json(blog);
    } catch (error) {
        res.status(400);
    }
}
// Update
const blog_update = async (req,res) =>{
    // const {title,snippet,body} = req.body;
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id,req.body,{ useFindAndModify: false })     
        res.status(201).send(blog);
    } catch (error) {
        console.log(error);
    }
}
// Delete
const blog_delete = async (req,res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id)     
        res.status(201).send();
    } catch (error) {
        console.log(error);
    }
}
// Export
module.exports = {
    blog_index,
    blog_details,
    blog_update,
    blog_create_post,
    blog_delete   
}
