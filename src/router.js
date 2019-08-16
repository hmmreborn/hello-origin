import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import('./views/List.vue')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('./views/User.vue')
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('./views/Add.vue')
    }
  ]
})
