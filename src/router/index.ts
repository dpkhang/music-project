import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../components/layouts/Main.vue'
import NotFound from '../components/layouts/NotFound.vue'
import Home from '../components/partials/main/content/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Main,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'personal',
        component: Home
      },
      {
        path: 'rating',
        component: Main
      },
      {
        path: 'categories',
        component: Main
      },
      {
        path: 'singers',
        component: Main
      }
    ]
  },
  {
    path:'*',
    name:"404",
    component: NotFound,
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
