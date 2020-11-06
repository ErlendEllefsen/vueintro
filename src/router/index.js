import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/instance',
    name: 'Instance',
    component: () => import('../views/Instance.vue')
  },
  {
    path: '/intro',
    name: 'Intro',
    component: () => import('../views/Intro.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/unit',
    name: 'Unit',
    component: () => import('../views/Unit.vue')
  },
  {
    path: '/memory',
    name: 'Memory',
    component: () => import('../views/Memory.vue')
  },
  {
    path: '/storage',
    name: 'Storage',
    component: () => import('../views/Storage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
