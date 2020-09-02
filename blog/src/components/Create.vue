<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create blog</h3>
            <form @submit.prevent="handleSubmitForm">
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
import axios from 'axios'

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
           async handleSubmitForm() { 
                const apiURL = 'http://localhost:3000/blogs/api';
                try {
                    await axios.post(apiURL,this.blog,{
                          withCredentials: true
                    })
                    this.$router.push('/')
                    this.blog = {
                        title:'',
                        snippet:'',
                        body:''
                     }
                } catch (error) {
                    console.log(error)
                }
             }
        }
    }
</script>
<style>

</style>