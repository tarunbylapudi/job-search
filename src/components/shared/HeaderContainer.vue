<template>
  <div class="header-container">
    <div class="container">
      <slot name="title">Title</slot>
      <slot name="subtitle">Subtitle</slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderContainer",
};
</script>
<style scoped>
.header-container {
  width: 100%;
  border-bottom: 1px solid#dadce0;
}
.container {
  margin: 4rem auto;
  text-align: center;
}
</style>
