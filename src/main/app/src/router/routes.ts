import { RouteRecordRaw } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      { path: "", component: HomePage, name: "home" },
      { path: "about", component: () => import("@/pages/AboutPage.vue") },
      { path: "contact", component: () => import("@/pages/ContactPage.vue") },
    ],
  },
  {
    path: "/login",
    component: () => import("@/pages/LoginPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("@/pages/ErrorNotFound.vue"),
  },
];

export default routes;
