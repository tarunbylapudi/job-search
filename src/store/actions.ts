import { Commit } from "vuex";
import {
  FETCH_JOBS,
  RECEIVE_JOBS,
  FETCH_AUTH_DATA,
  RECEIVE_AUTH_DATA,
  LOADING,
  FETCH_DEGREES,
  RECEIVE_DEGREES,
} from "@/store/constants";
import getJobs from "@/api/getJobs";
import getDegrees from "@/api/getDegrees";
import getAuthData from "@/api/getAuthData";

interface Context {
  commit: Commit;
}

const actions = {
  [FETCH_JOBS]: async (context: Context) => {
    //context.commit(LOADING, true);
    const jobListings = await getJobs();
    //context.commit(LOADING, false);
    context.commit(RECEIVE_JOBS, jobListings);
  },

  [FETCH_DEGREES]: async (context: Context) => {
    const degrees = await getDegrees();
    context.commit(RECEIVE_DEGREES, degrees);
  },
  [FETCH_AUTH_DATA]: async (context: Context) => {
    const authData = await getAuthData();
    context.commit(RECEIVE_AUTH_DATA, authData);
  },
};

export default actions;
