import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        component: resolve=>require(['@/pages/index'], resolve)
    }
]

const router = new VueRouter({
    routes
})
export default router