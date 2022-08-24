import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City';
Vue.use(VueRouter)

//路由表--配置式路由
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
]

const router = new VueRouter({
  routes
})

export default router
