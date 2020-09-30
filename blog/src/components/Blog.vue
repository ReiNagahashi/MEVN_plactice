<template>
  <div class="container">
    <h1 class="text-center">Latest Blog</h1>
    <!-- Create post  -->
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="post-container row">
      <div class="post col-md-12"
      v-for="(blog,index) in blogs" :key="index">
        <div>
          <h2>{{ blog.title }}</h2>
          <small>{{ blog.snippet }}</small>
          <p>{{ blog.body }}</p>
        </div>
        <div class="btnPosition">
          <router-link :to="{name:'showPost',params:{post_id:blog._id}}" class="btn btn-info showBtn">Show</router-link>
        </div>
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
  async created(){
    try{
      this.blogs = await BlogService.getBlogs();
    }catch(error){
      this.error = error.message;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btnPosition{
    display: flex;
    justify-content: flex-end;
  }
</style>
