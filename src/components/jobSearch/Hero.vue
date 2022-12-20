<template>
  <div class="grid-container">
    <div class="headLine"><headline /> <job-search-form /></div>
    <div class="headLineImg"><hero-image /></div>
    <div class="spotlight">
      <spotlight class="spotlight-container">
        <template #default="{ img, title, description }">
          <router-link :to="{ name: 'JobResults' }" class="spotlight-card">
            <img :src="img" />
            <div class="h-45 px-6 py-2 mt-3">
              <h3 class="text-lg font-medium">
                {{ title }}
              </h3>
              <p class="mt-3 text-sm">{{ description }}</p>
            </div>
            <router-link
              :to="{ name: 'JobResults' }"
              class="px-6 pb-4 test-sm text-brand-blue-1"
              >See Jobs</router-link
            >
          </router-link>
        </template>
      </spotlight>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Headline from "@/components/jobSearch/Headline.vue";
import JobSearchForm from "@/components/jobSearch/JobSearchForm.vue";
import HeroImage from "@/components/jobSearch/HeroImage.vue";
import Spotlight from "@/components/jobSearch/Spotlight.vue";

export default defineComponent({
  name: "Hero",
  components: {
    Headline,
    JobSearchForm,
    HeroImage,
    Spotlight,
  },
});
</script>

<style scoped>
.headLine {
  grid-area: headLine;
}
.headLineImg {
  grid-area: headLineImg;
  margin: auto;
}
.spotlight {
  grid-area: spotlight;
  margin: 2.5rem 0;
}

.grid-container {
  display: grid;
  gap: 10px;
  background-color: white;
  padding: 10px;
  margin: 2rem 4rem 0;
  grid-template-areas: "headLine headLineImg" "spotlight spotlight";
}

/* spotlight */
.spotlight-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.spotlight-card {
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  width: 17rem;
  height: 21rem;
  border-radius: 0.5rem;
  background-color: #dadbdc;
}

@media screen and (max-width: 500px) {
  .grid-container {
    grid-template-areas: "headLineImg" "headLine" "spotlight";
    margin: 0.9rem 0.9rem 0;
  }
  .spotlight-container {
    flex-direction: column;
  }
}
@media screen and (min-width: 501px) and (max-width: 1000px) {
  .grid-container {
    grid-template-areas: "headLineImg" "headLine" "spotlight";
    margin: 2rem 2rem 0;
  }
}
</style>
