<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>
    <div class="pagination-container">
      <p>Page {{ currentPage }}</p>
      <router-link
        v-if="previousPage"
        :to="{ name: JobResults, query: { page: previousPage } }"
        class="link"
        >Previous</router-link
      >
      <router-link
        v-if="nextPage"
        :to="{ name: JobResults, query: { page: nextPage } }"
        class="link"
        >Next</router-link
      >
    </div>
  </main>
</template>
<script>
import axios from "axios";
import JobListing from "@/components/JobResults/JobListing.vue";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    };
  },
  computed: {
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = this.jobs.length / 10;
      return nextPage <= maxPage ? nextPage : undefined;
    },
    currentPage() {
      const pageString = this.$route.query.page || "1";
      return +pageString;
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstPageIndex = (pageNumber - 1) * 10;
      const lastPageIndex = pageNumber * 10;
      return this.jobs.slice(firstPageIndex, lastPageIndex);
    },
  },
  async mounted() {
    const baseUrl = process.env.VUE_APP_API_URL;
    const response = await axios.get(`${baseUrl}/jobs`);
    this.jobs = response.data;
  },
};
</script>

<style scoped>
.pagination-container {
  margin: 1rem auto 0;
  display: flex;
  flex-direction: row;
  flex-flow: nowrap;
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
