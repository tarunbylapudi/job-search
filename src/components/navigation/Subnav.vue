<template>
  <div class="w-full h-12 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" />
        <span class="text-brand-green-1"> 1653</span> jobs matched
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subnav",

  computed: {
    onJobResultsPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>
