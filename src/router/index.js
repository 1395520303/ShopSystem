import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const constantRoutes = [
  {
    path: "/home",
    component: () => import("../pages/Home"),
    hidden: true,
    children: [
      {
        path: '/',
        component: () => import('../components/Carousel'),
        hidden: false,
      },
      {
        path: 'phone',
        component: () => import('../pages/Phone'),
        hidden: false,
      },
    ]
  },
  {
    path: "/",
    redirect: "/test",
    component: () => import("../test/index.vue"),
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
    component: () => import("../pages/LogIn"),
    hidden: true,
  },
  {
    path: "/register",
    component: () => import("../pages/Register"),
    hidden: true,
  },
  {
    path: "/shoppingCar",
    component: () => import("../pages/ShoppingCar"),
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
