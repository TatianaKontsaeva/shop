import { createRouter, createWebHashHistory } from 'vue-router'
// import vCatalogue from '../components/v-catalogue.vue';
// import vCart from '../components/v-cart.vue';

const routes = [
  {
    path: '/',
    name: 'catalogue',
    component: () => import('../components/v-catalogue.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../components/v-cart.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
