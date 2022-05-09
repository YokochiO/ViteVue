import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '../pages/NotFound.vue'
import Home from '../pages/Home.vue'

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
        props: {
            query: '{pageBy(pageId:2){id title content}}',
        },
        component: () => import('../pages/About.vue'),
    },
    {
        path: '/post/:id',
        name: 'post',
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
