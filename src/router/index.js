import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobSearchView from "@/views/JobSearchView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobSearchView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
