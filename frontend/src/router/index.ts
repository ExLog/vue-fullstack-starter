import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      title: `${import.meta.env.VITE_APP_TITLE} | Home`,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;