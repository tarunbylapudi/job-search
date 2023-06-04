<template>
  <div class="container"><job-filter-sidebar /> <job-listings /></div>
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
</style>
