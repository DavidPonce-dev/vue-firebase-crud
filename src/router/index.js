import { createRouter, createWebHashHistory } from 'vue-router'

import verUsuarios from '../views/verUsuarios.vue'
import Registrar from '../views/Registrar.vue'

const routes = [
  {
    path: '/',
    name: 'Registrar',
    component: Registrar
  },
  {
    path: '/verUsuarios',
    name: 'verUsuarios',
    component: verUsuarios
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
