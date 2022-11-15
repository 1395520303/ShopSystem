import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const constantRoutes = [
  {
    path: "/home",
    component: () => import("../pages/home"),
    hidden: true,
    children: [
      {
        path: 'phone',
        component: () => import('../pages/phone'),
        hidden: false,
      },
    ]
  },
  {
    path: "/",
    redirect: "/home",
    component: () => import("../pages/home"),
    hidden: false,
  },
  {
    path: "/404",
    component: () => import("../pages/404"),
    hidden: true,
  },
  {
    path: "/test",
    component: () => import("../test/index.vue"),
    hidden: true,
  },
  {
    path: "/login",
    component: () => import("../pages/login"),
    hidden: true,
  },
];

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();



export default router;
