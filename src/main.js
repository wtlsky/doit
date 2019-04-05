import Vue from 'vue'
import App from './App.vue'
import '@/assets/icon/iconfont.css'
import VueRouter from 'vue-router'
import router from '@/router'
import {remote} from 'electron'


Vue.config.productionTip = false
Vue.prototype.$remote = remote
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
