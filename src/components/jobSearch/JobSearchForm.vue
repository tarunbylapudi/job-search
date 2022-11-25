<template>
  <form
    action=""
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base text-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label for="role" class="absolute left-0 -top-8">Role</label>
        <input
          id="role"
          v-model="role"
          type="text"
          placeholder="Full Stack Developer"
          class="w-full text-lg text-normal focus:outline-none"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full ml-3">
        <label for="location" class="absolute left-0 -top-8">Location</label>
        <input
          id="location"
          v-model="location"
          type="text"
          placeholder="Visakhapatnam"
          class="w-full text-lg text-normal focus:outline-none"
        />
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
};
</script>
