import { useStore } from "vuex";
import { computed } from "vue";

import {
  FILTERED_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
  FETCH_JOBS,
} from "@/store/constants";

//getters

export const useFilteredJobs = () => {
  const store = useStore();
  return computed(() => store.getters[FILTERED_JOBS]);
};

export const useUniqueJobTypes = () => {
  const store = useStore();
  return computed(() => store.getters[UNIQUE_JOB_TYPES]);
};

export const useUniqueOriganizations = () => {
  const store = useStore();
  return computed(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

//actions

export const useFetchJobs = () => {
  const store = useStore();
  return store.dispatch(FETCH_JOBS);
};
