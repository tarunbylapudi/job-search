<template>
  <div class="w-full h-12 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" />
        <span class="text-brand-green-1 ml-1"> {{ FILTERED_JOBS.length }}</span>
        jobs matched
      </div>
    </div>
  </div>
</template>

<script>
////import { computed } from "vue";
//import { useStore } from "vuex";
import useConfirmRoute from "@/composables/useConfirmRoute";
import { useFilteredJobs } from "@/store/composables";

export default {
  name: "Subnav",
  setup() {
    //const store = useStore();

    // const FILTERED_JOBS = computed(() => store.getters.FILTERED_JOBS);

    //const onJobResultsPage = computed(() => route.name === "JobResults");
    const FILTERED_JOBS = useFilteredJobs();
    const onJobResultsPage = useConfirmRoute("JobResults");

    return { onJobResultsPage, FILTERED_JOBS };
  },

  // computed: {
  //   onJobResultsPage() {
  //     return this.$route.name === "JobResults";
  //   },

  //   ...mapGetters([FILTERED_JOBS]),
  // },
};
</script>
