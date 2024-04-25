import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import DevTabs from "@/views/DevTabs.vue";
import TechTabs from "@/views/TechTabs.vue";
import AdminTabs from "@/views/AdminTabs.vue";

//TODO : Need to add navigation guards
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/LoginPage.vue"), // Added the login route here
  },

  //developer tab- orange and grey
  {
    path: "/DevTabs/",
    component: DevTabs,
    children: [
      {
        path: "Add",
        component: () => import("@/views/AddPage.vue"), // Corrected the file name casing
      },
      {
        path: "Edit",
        component: () => import("@/views/EditPage.vue"), // Corrected the file name casing
      },
      {
        path: "devices",
        component: () => import("@/views/DevicesPage.vue"),
      },
      {
        path: "transactions",
        component: () => import("@/views/TransactionPage.vue"),
      },
      {
        path: "importdevices",
        component: () => import("@/views/ImportDevicePage.vue"),
      },
      // TODO: add import device page
    ],
  },
  {
    path: "/TechTabs/",
    component: TechTabs,
    children: [
      {
        path: "Move",
        component: () => import("@/views/MovePage.vue"), // Corrected the file name casing
      },
      {
        path: "Dispose",
        component: () => import("@/views/DisposePage.vue"), // Corrected the file name casing
      },
      {
        path: "devices",
        component: () => import("@/views/DevicesPage.vue"),
      },
      {
        path: "transactions",
        component: () => import("@/views/TransactionPage.vue"),
      },
    ],
  },
  {
    path: "/AdminTabs/",
    component: AdminTabs,
    children: [
      {
        path: "users", //show the list of users
        component: () => import("@/views/UserRegisteration.vue"), // Corrected the file name casing
      },
      {
        path: "/register", //make new users
        component: () => import("@/views/UserRegisteration.vue"), // Make sure the path matches your file location
      },
      {
        path: "locations",
        component: () => import("@/views/LocationsPage.vue"), // Corrected the file name casing
      },
      {
        path: "departments",
        component: () => import("@/views/DepartmentsPage.vue"),
      },
      {
        path: "devices",
        component: () => import("@/views/DevicesPage.vue"),
      },
      // TODO: add import device page
      {
        path: "importdevices",
        component: () => import("@/views/ImportDevicePage.vue"),
      },
      {
        path: "transactions",
        component: () => import("@/views/TransactionPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
