<template>
  <accordian header="Organizations">
    <fieldset>
      <ul class="filter">
        <li
          v-for="organization in uniqueOrganizations"
          :key="organization"
          class="filter-option"
        >
          <input
            :id="organization"
            v-model="selectedOrganizations"
            :value="organization"
            type="checkbox"
            style="margin-right: 0.5rem"
            @change="selectOrganizations"
          />
          <label :for="organization">{{ organization }}</label>
        </li>
      </ul>
    </fieldset>
  </accordian>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import Accordian from "@/components/shared/Accordian.vue";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";
import { useUniqueOriganizations } from "@/store/composables";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordian,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const selectedOrganizations = ref([]);
    const uniqueOrganizations = useUniqueOriganizations();
    const selectOrganizations = () => {
      store.commit(ADD_SELECTED_ORGANIZATIONS, selectedOrganizations.value);
      router.push({ name: "JobResults" });
    };
    return { selectedOrganizations, uniqueOrganizations, selectOrganizations };
  },
  // data() {
  //   return {
  //     selectedOrganizations: [],
  //   };
  // },
  // computed: {
  //   // UNIQUE_ORGANIZATIONS() {
  //   //   return this.$store.getters.UNIQUE_ORGANIZATIONS;
  //   // },

  //   ...mapGetters([UNIQUE_ORGANIZATIONS]),
  // },
  // methods: {
  //   ...mapMutations([ADD_SELECTED_ORGANIZATIONS]),
  //   selectOrganizations() {
  //     this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
  //     this.$router.push({ name: "JobResults" });
  //   },
  // },
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
