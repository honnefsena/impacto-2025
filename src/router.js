import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Schedule from './views/Schedule.vue'
import Guests from './views/Guests.vue'
import Map from './views/Map.vue'
import Interactions from './views/Interactions.vue'
import Details from './views/Details.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/schedule', name: 'Schedule', component: Schedule },
  { path: '/guests', name: 'Guests', component: Guests },
  { path: '/map', name: 'Map', component: Map },
  { path: '/interactions', name: 'Interactions', component: Interactions },
  { path: '/details/:id', name: 'Details', component: Details, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 