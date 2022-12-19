<template>
  <div class="accordian">
    <div class="accordian-container" @click="filterToggleHandler">
      <h3 class="accordian-header">{{ header }}</h3>
      <font-awesome-icon :icon="fontIconHandler" />
    </div>
    <div v-if="isOpen" class="filter-container">
      <slot>Data not given!, Fallback</slot>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  name: "Accordian",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const fontIconHandler = computed(() =>
      isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]
    );
    const filterToggleHandler = () => {
      isOpen.value = !isOpen.value;
    };
    return { isOpen, fontIconHandler, filterToggleHandler };
  },
  // data() {
  //   return {
  //     isOpen: false,
  //   };
  // },
  // computed: {
  //   fontIconHandler() {
  //     return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
  //   },
  // },
  // methods: {
  //   filterToggleHandler() {
  //     this.isOpen = !this.isOpen;
  //   },
  // },
};
</script>
<style scoped>
.accordian {
  padding: 1.2rem 0;
  border-bottom: 1px solid #d9d9da;
}
.accordian-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.accordian-header {
  font-size: 1rem;
  line-height: 0.825rem;
  font-weight: 600;
}
.filter-container {
  width: 100%;
  margin-top: 2rem;
}
</style>
