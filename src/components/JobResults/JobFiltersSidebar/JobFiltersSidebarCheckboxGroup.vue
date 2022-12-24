<template>
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
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { key } from "@/store";
import { CLEAR_SELECTED_FILTERS } from "@/store/constants";

export default defineComponent({
  name: "JobFiltersSidebarCheckboxGroup",
  props: {
    uniqueValues: {
      type: [Array, Set] as PropType<string[] | Set<string>>,
      required: true,
    },
    mutation: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore(key);
    const router = useRouter();

    const selectedValues = ref<string[]>([]);

    store.subscribe((mutation) => {
      if (mutation.type === CLEAR_SELECTED_FILTERS) {
        selectedValues.value = [];
      }
    });

    const selectValues = () => {
      store.commit(props.mutation, selectedValues.value);
      router.push({ name: "JobResults" });
    };
    return { selectedValues, selectValues };
  },
});
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
