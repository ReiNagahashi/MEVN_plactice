<template>
  <div class="container">
    <h1>latest Blog</h1>
    <!-- Create post  -->
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="post-container">
      <div class="post"
      v-for="(blog,index) in blogs" :key="index">
        <div>
          <h2>{{ blog.title }}</h2>
          <small>{{ blog.snippet }}</small>
          <p>{{ blog.body }}</p>
        </div>
        <button @click.prevent="deletePost(blog._id)" class="btn btn-danger">Delete</button>
        <hr>
      </div>
      <p v-if="error" class="text-danger">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import BlogService from '@/blogService.js'

export default {
  name: 'Blog',
  data(){
    return{
      blogs:[],
      error:'',
      body:''
    }
  },
  methods:{
    async deletePost(id){
      try{
         await BlogService.deleteBlog(id);
         alert('Deleted successfully!')
      }catch(error){
         this.error = error.message;
      }
    }
  },
  async created(){
    try{
      this.blogs = await BlogService.getBlogs();
    }catch(error){
      this.error = error.message;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
