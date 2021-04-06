import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () =>
      import("../views/SignUp.vue"),
    children: [
      {
        path: 'page1',
        name: 'page1',
        component: () =>
          import("../views/SignUpPage1.vue")
      },
      {
        path: 'page2',
        name: 'page2',
        component: () =>
          import("../views/SignUpPage2.vue")
      },
    ],
  },
  {
    path: "/main",
    name: "Main",
    component: () =>
      import("../views/Main.vue"),
  },
  {
    path: "/milk-extraction-steps",
    name: "MilkExtractionSteps",
    component: () =>
      import("../views/MilkExtractionSteps.vue"),
      children: [
        {
          path: 'page1',
          name: 'page1',
          component: () =>
            import("../views/MilkExtStepsPage1.vue")
        },
        {
          path: 'page2',
          name: 'page2',
          component: () =>
            import("../views/MilkExtStepsPage2.vue")
        },
        {
          path: 'page3',
          name: 'page3',
          component: () =>
            import("../views/MilkExtStepsPage3.vue")
        },
        {
          path: 'page4',
          name: 'page4',
          component: () =>
            import("../views/MilkExtStepsPage4.vue")
        },
      ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
