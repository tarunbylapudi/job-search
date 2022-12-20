import { Commit } from "vuex";
import {
  FETCH_JOBS,
  RECIVE_JOBS,
  //LOADING_ENDED,
  // LOADING_STARTED,
} from "@/store/constants";
import getJobs from "@/api/getJobs";

interface Context {
  commit: Commit;
}

const actions = {
  [FETCH_JOBS]: async (context: Context) => {
    //context.commit(LOADING_STARTED);
    const jobListings = await getJobs();
    context.commit(RECIVE_JOBS, jobListings);
    //context.commit(LOADING_ENDED);
  },
};

export default actions;
