<template>
  <div class="container"><job-filter-sidebar /> <job-listings /></div>
</template>

<script>
import JobFilterSidebar from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";

export default {
  name: "JobResultsView",
  components: {
    JobFilterSidebar,
    JobListings,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-flow: nowrap;
  max-width: 100%;
}
</style>
