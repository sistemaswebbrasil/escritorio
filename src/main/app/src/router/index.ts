import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  console.log(next);
  next();
});

export default router;
