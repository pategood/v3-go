import { createRouter, createWebHistory } from 'vue-router'
import { staticRoutes } from './staticRoutes';
import defaultRoutes from './defaultRoutes';

const routes: any = staticRoutes.concat(defaultRoutes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
