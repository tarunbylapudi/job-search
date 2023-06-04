<template>
  <div>
    <main-nav />
    <loader v-if="IS_LOADING" />
    <router-view v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import MainNav from "@/components/navigation/MainNav.vue";
import Loader from "@/components/shared/Loader.vue";
import { IS_LOADING } from "./store/constants";
import { autoLoginCheck } from "@/components/auth/composables";
export default defineComponent({
  name: "App",
  components: {
    MainNav,
    Loader,
  },
  mounted() {
    autoLoginCheck();
  },
  computed: {
    ...mapGetters([IS_LOADING]),
    ...mapState(["isLoggedIn"]),
  },
});
</script>
