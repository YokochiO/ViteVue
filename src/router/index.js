import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../pages/NotFound.vue'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Post from '../pages/Post.vue'

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/post/:id',
        name: 'post',
        component: Post,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
