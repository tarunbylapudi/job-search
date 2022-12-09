import { createStore } from "vuex";
import getJobs from "@/api/getJobs";

//mutations
export const LOGIN_USER = "LOGIN_USER";
export const RECIVE_JOBS = "RECIVE_JOBS";

//actions
export const FETCH_JOBS = "FETCH_JOBS";

export const state = () => {
  return { isLoggedIn: false, jobs: [] };
};

export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
};
export const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit("RECIVE_JOBS", jobListings);
  },
};

const store = createStore({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== "Production",
});

export default store;
