<template>
  <accordian header="Job Types">
    <fieldset>
      <ul class="filter">
        <li
          v-for="jobType in UNIQUE_JOB_TYPES"
          :key="jobType"
          class="filter-option"
        >
          <input
            :id="jobType"
            v-model="selectedJobTypes"
            :value="jobType"
            type="checkbox"
            style="margin-right: 0.5rem"
            @change="selectJobType"
          />
          <label :for="jobType">{{ jobType }}</label>
        </li>
      </ul>
    </fieldset>
  </accordian>
</template>

<script>
import Accordian from "@/components/shared/Accordian.vue";
import { mapGetters, mapMutations } from "vuex";
import { UNIQUE_JOB_TYPES, ADD_SELECTED_JOB_TYPES } from "@/store/constants";
export default {
  name: "JobFiltersSidebarJobTypes",
  components: {
    Accordian,
  },
  data() {
    return {
      selectedJobTypes: [],
    };
  },
  computed: {
    // UNIQUE_ORGANIZATIONS() {
    //   return this.$store.getters.UNIQUE_ORGANIZATIONS;
    // },

    ...mapGetters([UNIQUE_JOB_TYPES]),
  },
  methods: {
    ...mapMutations([ADD_SELECTED_JOB_TYPES]),
    selectJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
      this.$router.push({ name: "JobResults" });
    },
  },
};
</script>
<style scoped>
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
