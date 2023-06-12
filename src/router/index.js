import { createRouter, createWebHistory } from "vue-router";
import { authMiddleware } from "./middleware/auth.middleware";
import LoginView from "@/views/auth/LoginView.vue";
import IndexView from "@/views/IndexView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: IndexView,
      meta: {
        group: "landing",
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        group: "auth",
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/DashboardView.vue"),
      meta: {
        requiredAuth: true,
      },
    },
  ],
});

router.beforeEach(authMiddleware);
export default router;
