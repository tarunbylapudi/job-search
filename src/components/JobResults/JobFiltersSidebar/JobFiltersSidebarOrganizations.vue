<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="uniqueOrganizations"
    mutation="ADD_SELECTED_ORGANIZATIONS"
  />
</template>

<script>
import { defineComponent } from "vue";
import JobFiltersSidebarCheckboxGroup from "./JobFiltersSidebarCheckboxGroup.vue";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";
import { useUniqueOriganizations } from "@/store/composables";
export default defineComponent({
  name: "JobFilterSidebarOrganizations",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueOrganizations = useUniqueOriganizations();
    return {
      ADD_SELECTED_ORGANIZATIONS,
      uniqueOrganizations,
    };
  },
});
</script>
