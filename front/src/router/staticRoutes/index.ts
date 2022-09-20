import HomeView from '@/views/HomeView.vue'

export const staticRoutes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      //   title: lpk("page.home.title"),
      requireAuth: false,
    },
  },
];
