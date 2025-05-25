import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: { template: '<div></div>' } },
  { path: '/schedule', name: 'Schedule', component: { template: '<div></div>' } },
  { path: '/guests', name: 'Guests', component: { template: '<div></div>' } },
  { path: '/map', name: 'Map', component: { template: '<div></div>' } },
  { path: '/interactions', name: 'Interactions', component: { template: '<div></div>' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 