import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FaceView from '../views/FaceView.vue'
import ChatView from '../views/ChatView.vue'
import HealthView from '../views/HealthView.vue'
import SignView from '../views/SignView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatView
  },
  {
    path: '/face',
    name: 'face',
    component: FaceView
  },
  {
    path: '/',
    name: 'health',
    component: HealthView
  },
  {
    path: '/sign',
    name: 'sign',
    component: SignView
  },
  {
    path: '/health',
    name: 'health',
    component: HealthView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
})

export default router
