import { GlobalState } from "@/store/types";
import { Job, Credentials } from "@/api/types";
import Authentication from "@/utils/Authentication";
import {
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  UNIQUE_DEGREES,
  INCLUDE_JOB_BY_JOB_TYPE,
  INCLUDE_JOB_BY_ORGANIZATION,
  INCLUDE_JOB_BY_DEGREE,
  FILTERED_JOBS,
  IS_LOADING,
  INCLUDE_JOB_BY_SKILL,
  AUTHENTICATION,
  LOGIN_LOGOUT_USER,
} from "@/store/constants";

interface IncludeJobGetters {
  INCLUDE_JOB_BY_ORGANIZATION: (job: Job) => boolean;
  INCLUDE_JOB_BY_JOB_TYPE: (job: Job) => boolean;
  INCLUDE_JOB_BY_DEGREE: (job: Job) => boolean;
  INCLUDE_JOB_BY_SKILL: (job: Job) => boolean;
}

const getters = {
  [UNIQUE_ORGANIZATIONS](state: GlobalState) {
    const uniqueOrganizations = new Set<string>();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },

  [UNIQUE_DEGREES](state: GlobalState) {
    return state.degrees.map((degree) => degree.degree);
  },

  [UNIQUE_JOB_TYPES](state: GlobalState) {
    const uniqueJobTypes = new Set<string>();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },

  [INCLUDE_JOB_BY_JOB_TYPE]: (state: GlobalState) => (job: Job) => {
    if (state.selectedJobTypes.length === 0) return true;
    return state.selectedJobTypes.includes(job.jobType);
  },

  [INCLUDE_JOB_BY_ORGANIZATION]: (state: GlobalState) => (job: Job) => {
    if (state.selectedOrganizations.length === 0) return true;
    return state.selectedOrganizations.includes(job.organization);
  },
  [INCLUDE_JOB_BY_DEGREE]: (state: GlobalState) => (job: Job) => {
    if (state.selectedDegrees.length === 0) return true;
    return state.selectedDegrees.includes(job.degree);
  },
  [INCLUDE_JOB_BY_SKILL]: (state: GlobalState) => (job: Job) => {
    return job.title
      .toLowerCase()
      .includes(state.skillsSearchTerm.toLowerCase());
  },

  [FILTERED_JOBS](state: GlobalState, getters: IncludeJobGetters) {
    return state.jobs
      .filter((job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job))
      .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job))
      .filter((job) => getters.INCLUDE_JOB_BY_DEGREE(job))
      .filter((job) => getters.INCLUDE_JOB_BY_SKILL(job));
  },
  [IS_LOADING](state: GlobalState) {
    return state.isLoading;
  },
  [AUTHENTICATION](state: GlobalState) {
    const authentication = Authentication(state.authData, state.credentials);
    return authentication;
  },
};

export default getters;
