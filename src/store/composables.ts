import { useStore } from "vuex";
import { computed } from "vue";
import { Job } from "@/api/types";
import { key } from "@/store";

import {
  FILTERED_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
  FETCH_JOBS,
} from "@/store/constants";

//getters

export const useFilteredJobs = () => {
  const store = useStore(key);
  return computed<Job[]>(() => store.getters[FILTERED_JOBS]);
};

export const useUniqueJobTypes = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_JOB_TYPES]);
};

export const useUniqueOriganizations = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

//actions

export const useFetchJobs = () => {
  const store = useStore(key);
  return store.dispatch(FETCH_JOBS);
};
