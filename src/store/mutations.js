import {
  LOGIN_USER,
  RECIVE_JOBS,
  ADD_SELECTED_ORGANIZATIONS,
  LOADING_STARTED,
  LOADING_ENDED,
  ADD_SELECTED_JOB_TYPES,
} from "@/store/constants";

const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
  [ADD_SELECTED_ORGANIZATIONS](state, organizations) {
    state.selectedOrganizations = organizations;
  },
  [LOADING_STARTED](state) {
    state.isLoading = true;
  },
  [LOADING_ENDED](state) {
    state.isLoading = false;
  },
  [ADD_SELECTED_JOB_TYPES](state, jobTypes) {
    state.selectedJobTypes = jobTypes;
  },
};

export default mutations;
