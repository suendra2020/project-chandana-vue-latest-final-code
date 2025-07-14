// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Vision from '../views/Vision.vue'
import Teams from '../views/Teams.vue'
import Activities from '../views/Activities.vue'
import Reports from '../views/Reports.vue'
import Events from '../views/Events.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/vision', name: 'Vision', component: Vision },
  { path: '/teams', name: 'Teams', component: Teams },
  { path: '/activities', name: 'Activities', component: Activities },
  { path: '/reports', name: 'Reports', component: Reports },
  { path: '/events', name: 'Events', component: Events },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // ✅ Important fix here
  routes
})

export default router
