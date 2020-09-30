<template>
        <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create blog</h3>
            <form @submit.prevent="updatePost(id)">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" v-model="post.title" required>
                </div>

                <div class="form-group">
                    <label>Snippet</label>
                    <input type="text" class="form-control" v-model="post.snippet" required>
                </div>

                <div class="form-group">
                    <label>Content</label>
                    <input type="text" class="form-control" v-model="post.body" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-info btn-block">Update</button>
                </div>
            </form>
                <hr>
                <button @click.prevent="deletePost(id)" class="btn btn-danger btn-block">Delete this post</button>
        </div>
    </div>
</template>
<script>
import BlogService from '@/blogService.js'

    export default {
        data() {
            return {
                post: {},
                id: this.$route.params.post_id
            }
        },
    methods:{
        async deletePost(id){
            try{
                await BlogService.deleteBlog(id);
                this.$router.push({name:"home"});
            }catch(error){
                this.error = error.message;
            }
        },
           async updatePost(id){
               await BlogService.updatePost(id,this.post);
               this.$router.push({name:"home"});
           }
    },
       async created(){
            // show post
            try{
                this.post = await BlogService.showBlog(this.id);
            }catch(error){
                this.error = error.message;
            }
        }
    }
</script>
<style>

</style>