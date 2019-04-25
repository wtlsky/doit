import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/mission', // 任务
    component: resolve => require(['@/pages/mission'], resolve)
  },
  {
    path: '/remid', // 提醒
    component: resolve => require(['@/pages/remid'], resolve)
  },
  {
    path: '/note', // 便签
    component: resolve => require(['@/pages/note'], resolve)
  }
]

const router = new VueRouter({
  routes
})
export default router
