const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
}, { timestamps:true })

// モデルの作成 
const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;