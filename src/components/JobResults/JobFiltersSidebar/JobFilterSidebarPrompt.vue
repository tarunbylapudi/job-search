<template>
  <div class="Sidebar-header-container">
    <h3 class="sidebar-header">What do you want to do?</h3>
    <div class="filter-button-container">
      <action-button
        text="Clear filters"
        type="secondary"
        @click="clearFilters"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";
import { CLEAR_SELECTED_FILTERS } from "@/store/constants";
import ActionButton from "@/components/shared/ActionButton.vue";

export default defineComponent({
  name: "JobFilterSidebarPrompt",
  components: {
    ActionButton,
  },
  setup() {
    const store = useStore(key);
    const clearFilters = () => {
      store.commit(CLEAR_SELECTED_FILTERS);
    };
    return {
      clearFilters,
    };
  },
});
</script>
<style scoped>
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
