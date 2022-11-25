<template>
  <main-nav />
  <hero />
</template>

<script>
import MainNav from "@/components/navigation/MainNav.vue";
import Hero from "@/components/jobSearch/Hero.vue";

export default {
  name: "App",
  components: {
    MainNav,
    Hero,
  },
};
</script>
