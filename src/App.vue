<template>
  <div>
    <main-nav />
    <loader v-if="isLoading" />
    <router-view v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import MainNav from "@/components/navigation/MainNav.vue";
import Loader from "@/components/shared/Loader.vue";
export default defineComponent({
  name: "App",
  components: {
    MainNav,
    Loader,
  },
  computed: {
    ...mapState(["isLoading"]),
  },
});
</script>
