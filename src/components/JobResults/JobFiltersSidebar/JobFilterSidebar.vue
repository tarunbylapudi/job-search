<template>
  <div class="container">
    <section style="padding-bottom: 1rem; width: 100%">
      <job-filter-sidebar-prompt />
      <accordian header="Degrees">
        <job-filter-sidebar-degrees />
      </accordian>
      <accordian header="Organizations">
        <job-filters-sidebar-organizations />
      </accordian>

      <accordian header="Job Type">
        <job-filters-sidebar-job-type />
      </accordian>
    </section>
  </div>
</template>

<script lang="ts">
import Accordian from "@/components/shared/Accordian.vue";
import { defineComponent } from "vue";
import JobFilterSidebarPrompt from "./JobFilterSidebarPrompt.vue";
import JobFilterSidebarDegrees from "./JobFilterSidebarDegrees.vue";
import JobFiltersSidebarJobType from "./JobFiltersSidebarJobType.vue";
import JobFiltersSidebarOrganizations from "./JobFiltersSidebarOrganizations.vue";
export default defineComponent({
  name: "JobFilterSidebar",
  components: {
    Accordian,
    JobFilterSidebarDegrees,
    JobFiltersSidebarOrganizations,
    JobFiltersSidebarJobType,
    JobFilterSidebarPrompt,
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem 1rem;
  width: 21rem;
  height: 100%;
  position: fixed;
  border-right: 1px solid #dadce0;
}
</style>
