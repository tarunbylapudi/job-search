<template>
  <!-- <div class="container"><job-filter-sidebar /> <job-listings /></div> -->
  <div class="grid-container">
    <div class="sideNav"><job-filter-sidebar /></div>
    <div class="jobListings"><job-listings /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JobFilterSidebar from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";

export default defineComponent({
  name: "JobResultsView",
  components: {
    JobFilterSidebar,
    JobListings,
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-flow: nowrap;
  max-width: 100%;
}
.sideNav {
  grid-area: sideNav;
}
.jobListings {
  grid-area: jobListings;
}
.grid-container {
  display: grid;

  background-color: white;
  grid-template-areas: "sideNav jobListings jobListings jobListings jobListings";
}
</style>
