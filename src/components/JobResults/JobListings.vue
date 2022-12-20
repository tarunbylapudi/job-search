<template>
  <main class="flex-auto p-8 bg-brand-gray-2" style="margin-left: 21rem">
    <div v-if="displayedJobs.length === 0">
      <h2 class="error">Oops!, Something went Wrong!!!</h2>

      <action-button text="Go to Home" type="primary" @click="zinx" />
    </div>
    <ol v-else>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>
    <div v-if="displayedJobs.length !== 0" class="pagination-container">
      <p>Page {{ currentPage }}</p>
      <router-link
        v-if="previousPage"
        :to="{ name: 'JobResults', query: { page: previousPage } }"
        class="link"
        >Previous</router-link
      >
      <router-link
        v-if="nextPage"
        :to="{ name: 'JobResults', query: { page: nextPage } }"
        class="link"
        >Next</router-link
      >
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useFilteredJobs, useFetchJobs } from "@/store/composables";
//import { usePreviousAndNextPages } from "@/composables/usePreviousAndNextPages";

import JobListing from "@/components/JobResults/JobListing.vue";
import ActionButton from "../shared/ActionButton.vue";
export default defineComponent({
  name: "JobListings",
  components: {
    JobListing,

    ActionButton,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    useFetchJobs();

    const goToHome = () => router.push({ name: "Home" });

    const filteredJobs = useFilteredJobs();

    const currentPage = computed(() => {
      const pageString = route.query.page || "1";
      return +pageString;
    });

    // const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10));
    // const { previousPage, nextPage } = usePreviousAndNextPages(
    //   currentPage,
    //   maxPage
    // );
    const previousPage = computed(() => {
      const previousPage = currentPage.value - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    });

    const nextPage = computed(() => {
      const nextPage = currentPage.value + 1;
      const maxPage = Math.ceil(filteredJobs.value.length / 10);
      return nextPage <= maxPage ? nextPage : undefined;
    });

    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstPageIndex = (pageNumber - 1) * 10;
      const lastPageIndex = pageNumber * 10;
      return filteredJobs.value.slice(firstPageIndex, lastPageIndex);
    });

    return { goToHome, currentPage, nextPage, previousPage, displayedJobs };
  },
  methods: {
    zinx() {
      fetch("/d.json")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    },
    // goToHome() {
    //   this.$router.push({ name: "Home" });
    // },
    // ...mapActions([FETCH_JOBS]),
  },
});
</script>

<style scoped>
.pagination-container {
  margin: 1rem auto 0;
  display: flex;
  flex-direction: row;
  flex-flow: nowrap;
}
.error {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  color: red;
  font-size: 1.5rem;
  line-height: 1rem;
  font-weight: 600;
}
p {
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  flex-grow: 1;
}
.link {
  margin: 0 0.5rem;
  font-size: 0.875rem;
  color: #1967d2;
}
</style>
