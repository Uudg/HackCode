import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImageView from '../views/ImageView.vue'
import ChatView from '../views/ChatView.vue'
import HealthView from '../views/HealthView.vue'
import SignView from '../views/SignView.vue'
import SettingsView from '../views/SettingsView.vue'

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
    path: '/image',
    name: 'image',
    component: ImageView
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
    path: '/settings',
    name: 'settings',
    component: SettingsView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
