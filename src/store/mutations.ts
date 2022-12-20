import { GlobalState } from "@/store/types";
import { Job } from "@/api/types";
import {
  LOGIN_USER,
  RECIVE_JOBS,
  ADD_SELECTED_ORGANIZATIONS,
  LOADING_STARTED,
  LOADING_ENDED,
  ADD_SELECTED_JOB_TYPES,
} from "@/store/constants";

const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true;
  },
  [RECIVE_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs;
  },
  [ADD_SELECTED_ORGANIZATIONS](state: GlobalState, organizations: string[]) {
    state.selectedOrganizations = organizations;
  },
  [LOADING_STARTED](state: GlobalState) {
    state.isLoading = true;
  },
  [LOADING_ENDED](state: GlobalState) {
    state.isLoading = false;
  },
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, jobTypes: string[]) {
    state.selectedJobTypes = jobTypes;
  },
};

export default mutations;
