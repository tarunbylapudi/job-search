<template>
  <div class="container">
    <section style="padding-bottom: 1rem; width: 100%">
      <job-filter-sidebar-prompt />
      <accordian header="Skills and Qualifications"
        ><job-filters-sidebar-skills
      /></accordian>
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
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { key } from "@/store";
import { UPDATE_SKILLS_SEARCH_TERM } from "@/store/constants";
import { defineComponent, onMounted } from "vue";
import JobFilterSidebarPrompt from "./JobFilterSidebarPrompt.vue";
import JobFilterSidebarDegrees from "./JobFilterSidebarDegrees.vue";
import JobFiltersSidebarJobType from "./JobFiltersSidebarJobType.vue";
import JobFiltersSidebarOrganizations from "./JobFiltersSidebarOrganizations.vue";
import JobFiltersSidebarSkills from "./JobFiltersSidebarSkills.vue";
export default defineComponent({
  name: "JobFilterSidebar",
  components: {
    Accordian,
    JobFilterSidebarDegrees,
    JobFiltersSidebarOrganizations,
    JobFiltersSidebarJobType,
    JobFilterSidebarPrompt,
    JobFiltersSidebarSkills,
  },
  setup() {
    const parseSkillSearchTerm = () => {
      const route = useRoute();
      const role = route.query.role || "";
      const store = useStore(key);
      store.commit(UPDATE_SKILLS_SEARCH_TERM, role);
    };
    onMounted(parseSkillSearchTerm);
  },
});
</script>

<style scoped>
.container {
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem 1rem;
  margin-bottom: 5rem;
  width: 21rem;
  height: 100%;
  border-right: 1px solid #dadce0;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgb(214, 213, 213);
}
</style>
