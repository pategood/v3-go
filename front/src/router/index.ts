import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        // title: lpk('page.home.title'),
        requireAuth: false
      },
      // children: [
      //   {
      //     path: '',
      //     // name: 'home',
      //     // component: () => import('@/views/AboutView.vue')
      //   }
      // ]
    },
  ]
})

export default router
