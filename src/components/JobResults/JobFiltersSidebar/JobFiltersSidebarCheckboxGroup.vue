<template>
  <accordian :header="header">
    <fieldset>
      <ul class="filter">
        <li v-for="value in uniqueValues" :key="value" class="filter-option">
          <input
            :id="value"
            v-model="selectedValues"
            :value="value"
            type="checkbox"
            style="margin-right: 0.5rem"
            @change="selectValues"
          />
          <label :for="value">{{ value }}</label>
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
export default {
  name: "JobFiltersSidebarCheckboxGroup",
  components: {
    Accordian,
  },
  props: {
    header: {
      type: String,
      required: true,
    },
    uniqueValues: {
      type: Set,
      required: true,
    },
    mutation: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const selectedValues = ref([]);

    const selectValues = () => {
      store.commit(props.mutation, selectedValues.value);
      router.push({ name: "JobResults" });
    };
    return { selectedValues, selectValues };
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
