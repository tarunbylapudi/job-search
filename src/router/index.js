import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "@/views/HomeView.vue";
// import JobSearchView from "@/views/JobSearchView.vue";
// import JobView from "@/views/JobView.vue";

const HomeView = () => import("@/views/HomeView.vue");
const JobSearchView = () =>
  import(/* webpackChunkName:"jobs" */ "@/views/JobResultsView.vue");
const JobView = () =>
  import(/* webpackChunkName:"jobs" */ "@/views/JobView.vue");

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
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
