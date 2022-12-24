import { GlobalState } from "@/store/types";
import { Job, Degree } from "@/api/types";
import {
  LOGIN_USER,
  RECEIVE_JOBS,
  ADD_SELECTED_ORGANIZATIONS,
  LOADING,
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_DEGREES,
  RECEIVE_DEGREES,
  CLEAR_SELECTED_FILTERS,
} from "@/store/constants";

const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs;
  },
  [RECEIVE_DEGREES](state: GlobalState, degrees: Degree[]) {
    state.degrees = degrees;
  },
  [ADD_SELECTED_ORGANIZATIONS](state: GlobalState, organizations: string[]) {
    state.selectedOrganizations = organizations;
  },
  [LOADING](state: GlobalState, status: boolean) {
    state.isLoading = status;
  },
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, jobTypes: string[]) {
    state.selectedJobTypes = jobTypes;
  },
  [ADD_SELECTED_DEGREES](state: GlobalState, degrees: string[]) {
    state.selectedDegrees = degrees;
  },
  [CLEAR_SELECTED_FILTERS](state: GlobalState) {
    state.selectedDegrees = [];
    state.selectedJobTypes = [];
    state.selectedOrganizations = [];
  },
};

export default mutations;
