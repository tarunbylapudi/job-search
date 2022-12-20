<template>
  <HeaderContainer>
    <template #title>
      <h1 class="title">Teams</h1>
    </template>
    <template #subtitle>
      <h1 class="subtitle">
        It's awesome working here, why dont you come here!
      </h1>
    </template>
  </HeaderContainer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HeaderContainer from "@/components/shared/HeaderContainer.vue";
export default defineComponent({
  name: "TeamsView",
  components: {
    HeaderContainer,
  },
});
</script>
<style scoped>
.title {
  width: 100%;
  font-size: 2rem;
  font-weight: 600;
}
.subtitle {
  width: 100%;
  font-size: 1rem;
  font-weight: 300;
  margin: 2rem auto;
}
</style>
