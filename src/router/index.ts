import { createRouter, createWebHistory } from 'vue-router'

import UserVier from '../views/UsersView.vue'
import ProductsView from '../views/ProductsView.vue'
import OrdersView from '../views/OrdersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/users'
    },
    {
      path: '/users',
      name: 'users',
      component: UserVier
    },
    // Rotas que serão implementadas posteriormente
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView
    }
  ]
})

export default router
