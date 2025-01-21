import { createRouter, createWebHistory } from "vue-router";

const Login = () => import("../pages/LoginPage.vue");

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
