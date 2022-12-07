<template>
  <div class="grid-container">
    <div class="headLine"><headline /> <job-search-form /></div>
    <div class="headLineImg"><hero-image /></div>
  </div>
</template>

<script>
import Headline from "@/components/jobSearch/Headline.vue";
import JobSearchForm from "@/components/jobSearch/JobSearchForm.vue";
import HeroImage from "@/components/jobSearch/HeroImage.vue";

export default {
  name: "Hero",
  components: {
    Headline,
    JobSearchForm,
    HeroImage,
  },
};
</script>

<style scoped>
.headLine {
  grid-area: headLine;
}
.headLineImg {
  grid-area: headLineImg;
  margin: auto;
}

.grid-container {
  display: grid;
  gap: 10px;
  background-color: white;
  padding: 10px;
  margin: 2rem 4rem 0;
  grid-template-areas: "headLine headLineImg ";
}

@media screen and (max-width: 500px) {
  .grid-container {
    grid-template-areas: "headLineImg" "headLine";
    margin: 0.9rem 0.9rem 0;
  }
}
@media screen and (min-width: 501px) and (max-width: 1000px) {
  .grid-container {
    grid-template-areas: "headLineImg" "headLine";

    margin: 2rem 2rem 0;
  }
}
</style>
