import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Feedbacks = () => import('../views/Feedbacks/index.vue')
const Credencials = () => import('../views/Credencials/index.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedback',
    name: 'FeedBacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/creedencials',
    name: 'Credencials',
    component: Credencials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
