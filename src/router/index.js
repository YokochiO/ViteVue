import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '../pages/NotFound.vue'

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../pages/About.vue'),
    },
    {
        path: '/post/:id',
        name: 'Post',
        component: () => import('../pages/Post.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        return savedPosition ?? { top: 0 }
    },
    routes,
})

export default router
