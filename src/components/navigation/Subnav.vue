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
import { FILTERED_JOBS } from "@/store/constants";
import { mapGetters } from "vuex";
export default {
  name: "Subnav",

  computed: {
    onJobResultsPage() {
      return this.$route.name === "JobResults";
    },

    ...mapGetters([FILTERED_JOBS]),
  },
};
</script>
