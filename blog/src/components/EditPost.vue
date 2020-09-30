<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create blog</h3>
            <form @submit.prevent="createPost">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" v-model="blog.title" required>
                </div>

                <div class="form-group">
                    <label>Snippet</label>
                    <input type="text" class="form-control" v-model="blog.snippet" required>
                </div>

                <div class="form-group">
                    <label>Content</label>
                    <input type="text" class="form-control" v-model="blog.body" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-info btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import BlogServoce from '@/blogService'

    export default {
        data() {
            return {
                blog: {
                   title: '',
                   snippet: '',
                   body: ''
                }
            }
        },
        methods: {
           async createPost(){
               await BlogServoce.insertPost(this.blog);
               this.$router.push({name:"home"});
           }
        }
    }
</script>
<style>

</style>