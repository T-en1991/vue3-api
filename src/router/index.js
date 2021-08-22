import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/mixin',
    name: 'Minxin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Minxin.vue')
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () => import(/* webpackChunkName: "about" */ '../views/ref.vue')
  },
  {
    path: '/reactive',
    name: 'Reactive',
    component: () => import(/* webpackChunkName: "about" */ '../views/reactive.vue')
  },
  {
    path: '/context',
    name: 'Context',
    component: () => import(/* webpackChunkName: "about" */ '../views/context/parent.vue')
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import(/* webpackChunkName: "about" */ '../views/watch.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
