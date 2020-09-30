import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'home',
        component:() => import('../components/Blog.vue')
    },
    {
        path:'/create',
        name:'create',
        component:() => import('../components/Create.vue')
    },
    {
        path:'/show/:post_id',
        name:'showPost',
        component:() => import('../components/ShowPost.vue')
    },
]

const router = new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})

export default router