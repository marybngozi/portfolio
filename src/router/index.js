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
    path: '/process',
    name: 'Process',
    // route level code-splitting
    // this generates a separate chunk (process.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "process" */ '../views/Process.vue')
  },
  {
    path: '/hostels',
    name: 'BookRoom',
    // route level code-splitting
    // this generates a separate chunk (hostels.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "hostels" */ '../views/BookRoom.vue')
  },
  {
    path: '/floor/:hostelid',
    name: 'Floor',
    // route level code-splitting
    // this generates a separate chunk (room.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "room" */ '../views/Floor.vue'),
    props: true
  },
  {
    path: '/room/:roomid',
    name: 'Room',
    // route level code-splitting
    // this generates a separate chunk (room.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "room" */ '../views/Room.vue'),
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (signup.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    // route level code-splitting
    // this generates a separate chunk (signup.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "signup" */ '../views/FAQ.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
