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
  { path: '/', component: Home, meta: { title: 'Home | Project Chandana' } },
  { path: '/about', component: About, meta: { title: 'About Us | Project Chandana' } },
  { path: '/vision', component: Vision, meta: { title: 'Vision | Project Chandana' } },
  { path: '/teams', component: Teams, meta: { title: 'Our Teams | Project Chandana' } },
  { path: '/activities', component: Activities, meta: { title: 'Activities | Project Chandana' } },
  { path: '/reports', component: Reports, meta: { title: 'Reports | Project Chandana' } },
  { path: '/events', component: Events, meta: { title: 'Events | Project Chandana' } },
  { path: '/contact', component: Contact, meta: { title: 'Contact Us | Project Chandana' } }
]
// const routes = [
//   { path: '/', name: 'Home', component: Home },
//   { path: '/about', name: 'About', component: About },
//   { path: '/vision', name: 'Vision', component: Vision },
//   { path: '/teams', name: 'Teams', component: Teams },
//   { path: '/activities', name: 'Activities', component: Activities },
//   { path: '/reports', name: 'Reports', component: Reports },
//   { path: '/events', name: 'Events', component: Events },
//   { path: '/contact', name: 'Contact', component: Contact }
// ]

const router = createRouter({
  history: createWebHistory(),
  routes,

  // ✅ Scroll to top on every route change
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }

})
// Set page title dynamically
router.afterEach((to) => {
  document.title = to.meta.title || 'Project Chandana'
})
export default router
