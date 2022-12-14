import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "@/views/HomeView.vue";
// import JobSearchView from "@/views/JobSearchView.vue";
// import JobView from "@/views/JobView.vue";

const HomeView = () => import("@/views/HomeView.vue");
const JobSearchView = () =>
  import(/* webpackChunkName:"jobs" */ "@/views/JobResultsView.vue");
const JobView = () =>
  import(/* webpackChunkName:"jobs" */ "@/views/JobView.vue");

const TeamsView = () => import("@/views/TeamsView.vue");

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
  {
    path: "/teams",
    name: "Teams",
    component: TeamsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
