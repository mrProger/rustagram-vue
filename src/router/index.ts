import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeView_ from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rustagram',
    name: 'home1',
    component: HomeView_
  },
  {
    path: '/rustagram/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/rustagram/auth',
    name: 'auth',
    component: AuthView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
