<template>
  <div class="container">
    <section style="padding-bottom: 1rem; width: 100%">
      <div class="Sidebar-header-container">
        <h3 class="sidebar-header">What do you want to do?</h3>
        <div class="filter-button-container">
          <action-button text="Clear filters" type="secondary" />
        </div>
      </div>
      <accordian header="Organizations">
        <div>
          <fieldset>
            <ul class="filter">
              <li class="filter-option">
                <input
                  id="VueTube"
                  type="checkbox"
                  style="margin-right: 0.5rem"
                />
                <label for="VueTube">VueTube</label>
              </li>
              <li class="filter-option">
                <input
                  id="Between Vue and Me"
                  type="checkbox"
                  style="margin-right: 0.5rem"
                />
                <label for="Between Vue and Me">Between Vue and Me</label>
              </li>
              <li class="filter-option">
                <input
                  id="Et Vue Brute"
                  type="checkbox"
                  style="margin-right: 0.5rem"
                />
                <label for="Et Vue Brute">Et Vue Brute</label>
              </li>
              <li class="filter-option">
                <input
                  id="Vue and a Half Men"
                  type="checkbox"
                  style="margin-right: 0.5rem"
                />
                <label for="Vue and a Half Men">Vue and a Half Men</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </accordian>
      <job-filters-sidebar-organizations />
      <accordian header="Zinx"></accordian>
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import Accordian from "@/components/shared/Accordian.vue";
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";
export default {
  name: "JobFilterSidebar",
  components: {
    ActionButton,
    Accordian,
    JobFiltersSidebarOrganizations,
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
