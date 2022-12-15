<template>
  <div>
    <main-nav />
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainNav from "@/components/navigation/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav,
  },
  computed: {
    ...mapState(["isLoading"]),
  },
};
</script>
