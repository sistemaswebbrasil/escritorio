import { createRouter, createWebHistory } from "vue-router";
import UserRoutes from "./user.routes";
import AuthRoutes from "./auth.routes";
import UIRoutes from "./ui.routes";
import LandingRoutes from "./landing.routes";
import UtilityRoutes from "./utility.routes";
import PagesRoutes from "./pages.routes";
import ChartsRoutes from "./charts.routes";
import UmlRoutes from "./uml.routes";
import AppsRoutes from "./apps.routes";
import DataRoutes from "./data.routes";
import AiRoutes from "./ai.routes";
import { useAuthStore } from "@/stores/authStore";

import HomePageVue from "../views/pages/HomePage.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "menu.home",
      requiresAuth: true,
      layout: "landing",
    },
    component: HomePageVue,
  } as any,
  {
    path: "/dashboard",
    meta: {
      requiresAuth: true,
      layout: "landing",
    },
    component: () => import("@/views/pages/DashBoard.vue"),
  },
  {
    path: "/users",
    name: "UserList",
    component: () =>
      import(
        /* webpackChunkName: "chart-echart-line" */ "@/domain/user/UserList.vue"
      ),
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "Chart",
      links: [
        { title: "menu.home", to: { name: "home" }, disable: false },
        { title: "menu.users", to: { name: "UserList" }, disable: false },
        { title: "common.list", to: "/users/form", disable: true },
      ],
      title: "menu.users",
    },
  },
  {
    path: "/roles",
    name: "RoleList",
    component: () =>
      import(
        /* webpackChunkName: "chart-echart-line" */ "@/domain/role/RoleList.vue"
      ),
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "Chart",
      links: [
        { title: "menu.home", to: { name: "home" }, disable: false },
        { title: "menu.roles", to: { name: "RoleList" }, disable: false },
        { title: "common.list", to: "/roles/form", disable: true },
      ],
      title: "menu.roles",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: () =>
      import(/* webpackChunkName: "error" */ "@/views/errors/NotFoundPage.vue"),
  },
  ...UserRoutes,
  ...LandingRoutes,
  ...AuthRoutes,
  ...PagesRoutes,
  ...UtilityRoutes,
  ...UIRoutes,
  ...ChartsRoutes,
  ...UmlRoutes,
  ...AppsRoutes,
  ...DataRoutes,
  ...AiRoutes,
];

// 动态路由，基于用户权限动态去加载
export const dynamicRoutes = [];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHistory(import.meta.env.VITE_API_BASE_URL),

  // hash模式：createWebHashHistory，history模式：createWebHistory
  // process.env.NODE_ENV === "production"

  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth || false;
  const token = JSON.stringify(localStorage.getItem("token")) || null;

  const authStore = useAuthStore();
  const { user } = storeToRefs(authStore);

  if (requiresAuth) {
    if (token && !user.value) {
      authStore.getProfile(token);
    } else if (!token) {
      next("/auth/signin");
    }
  }

  next();
});

export default router;
