import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)




const routes = [
  {
    path: '/',
    name: 'Index',
    // component: Index
    component: () => import('../views/Index.vue')
  },
  {
    path: '/detail',
    name: 'Detail',

    component: () => import('../views/Detail.vue')
  },
  {
    path: '/login',
    name: 'Login',

    component: () => import('../views/Login.vue')
  },
  {
    path: '/signin',
    name: 'Signin',

    component: () => import('../views/Signin.vue'),
      //   children: [   
      //     {
      //         path: '/phone',   
      //         component: () => import('../views/Phone.vue'),
      //     },
        
      // ]
  },
  {
    path: '/signin/phone',
    name: 'Phone',

    component: () => import('../views/Phone.vue')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('../views/City.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/Calendar.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Result.vue')
  }

]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
