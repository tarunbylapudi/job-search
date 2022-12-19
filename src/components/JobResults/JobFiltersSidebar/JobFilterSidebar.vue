<template>
  <div class="container">
    <section style="padding-bottom: 1rem; width: 100%">
      <div class="Sidebar-header-container">
        <h3 class="sidebar-header">What do you want to do?</h3>
        <div class="filter-button-container">
          <action-button text="Clear filters" type="secondary" />
        </div>
      </div>
      <job-filters-sidebar-checkbox-group
        header="Organizations"
        :unique-values="uniqueOrganizations"
        mutation="ADD_SELECTED_ORGANIZATIONS"
      />
      <job-filters-sidebar-checkbox-group
        header="Job Type"
        :unique-values="uniqueJobTypes"
        mutation="ADD_SELECTED_JOB_TYPES"
      />
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";
import {
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANIZATIONS,
} from "@/store/constants";
import {
  useUniqueJobTypes,
  useUniqueOriganizations,
} from "@/store/composables";
export default {
  name: "JobFilterSidebar",
  components: {
    ActionButton,
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueOrganizations = useUniqueOriganizations();
    const uniqueJobTypes = useUniqueJobTypes();
    return {
      uniqueOrganizations,
      uniqueJobTypes,
      ADD_SELECTED_JOB_TYPES,
      ADD_SELECTED_ORGANIZATIONS,
    };
  },
};
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
.Sidebar-header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #d9d9da;
}
.sidebar-header {
  font-size: 1rem;
  line-height: 0.825rem;
  font-weight: 600;
  margin: auto;
}
.filter-button-container {
  display: flex;
  align-items: center;
  font-size: 0.825rem;
  line-height: 1.25rem;
  margin-left: auto;
}
.filter {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.filter-option {
  width: 50%;
  height: 2rem;
  font-size: 0.8rem;
  font-weight: 500;
}
</style>
