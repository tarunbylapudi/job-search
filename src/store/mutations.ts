import { GlobalState } from "@/store/types";
import { Job, Degree, AuthData } from "@/api/types";
import { Credentials } from "@/api/types";
import {
  LOGIN_LOGOUT_USER,
  RECEIVE_JOBS,
  ADD_SELECTED_ORGANIZATIONS,
  LOADING,
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_DEGREES,
  RECEIVE_DEGREES,
  CLEAR_SELECTED_FILTERS,
  UPDATE_SKILLS_SEARCH_TERM,
  RECEIVE_AUTH_DATA,
  UPDATE_CREDENTIALS,
} from "@/store/constants";

const mutations = {
  [LOGIN_LOGOUT_USER](state: GlobalState, value: boolean) {
    state.isLoggedIn = value;
  },
  [UPDATE_CREDENTIALS](state: GlobalState, credentials: Credentials) {
    state.credentials.email = credentials.email;
    state.credentials.password = credentials.password;
  },
  [RECEIVE_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs;
  },
  [RECEIVE_DEGREES](state: GlobalState, degrees: Degree[]) {
    state.degrees = degrees;
  },
  [RECEIVE_AUTH_DATA](state: GlobalState, authData: AuthData[]) {
    state.authData = authData;
    console.log(state.authData);
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
  [UPDATE_SKILLS_SEARCH_TERM](state: GlobalState, skillsSearchTerm: string) {
    state.skillsSearchTerm = skillsSearchTerm;
  },
  [CLEAR_SELECTED_FILTERS](state: GlobalState) {
    state.selectedDegrees = [];
    state.selectedJobTypes = [];
    state.selectedOrganizations = [];
    state.skillsSearchTerm = "";
  },
};

export default mutations;
