<template>
  <h1 class="font-bold text-6xl">Job Search page {{ zinx }}</h1>
  <button @click="goToHome">go to Home</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";

export default defineComponent({
  name: "JobSearchView",
  computed: {
    zinx() {
      this.$route;

      return "zinx";
    },
  },
  methods: {
    goToHome() {
      router.push({ name: "Home" });
    },
  },
});
</script>
