<template>
  <li class="mb-7">
    <router-link :to="jobPageLink" class="job-container">
      <div class="job-head-container">
        <h2 class="job-heading">
          {{ job.title }}
        </h2>
        <div class="job-address-container">
          <font-awesome-icon :icon="['fas', 'building']" class="my-auto mr-2" />
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <ul>
              <font-awesome-icon :icon="['fas', 'location-dot']" class="mr-2" />
              <li
                v-for="location in job.locations"
                :key="location"
                class="inline-block mr-3"
              >
                {{ location }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div class="job-discription-container">
        <div>
          <h3 class="mt-1 mb-2">Qualifications:</h3>
          <div>
            <ul class="qualifications">
              <li
                v-for="qualification in job.minimumQualifications"
                :key="qualification"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link :to="jobPageLink" class="text-brand-blue-1"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script lang="ts">
import { computed, PropType } from "vue";
import { defineComponent } from "vue";
import { Job } from "@/api/types";

export default defineComponent({
  name: "JobListing",
  props: {
    job: {
      type: Object as PropType<Job>,
      required: true,
    },
  },
  setup(props) {
    const jobPageLink = computed(() => `/jobs/results/${props.job.id}`);
    return { jobPageLink };
  },
  // computed: {
  //   jobPageLink() {
  //     return `/jobs/results/${this.job.id}`;
  //   },
  // },
});
</script>

<style scoped>
.job-container {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border: 2px solid #e6e7e8;
  border-radius: 2px;
}
.job-container:hover {
  box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3);
}

.job-head-container {
  padding-top: 1.25rem;
  padding-bottom: 1rem;
  margin-right: 2rem;
  margin-left: 2rem;
  border: 1px solid #f8f9fa;
}
.job-heading {
  font-size: 1.5rem;
  padding-bottom: 0.25rem;
  font-weight: 500;
}
.job-address-container {
  display: flex;
  flex-direction: row;
  vertical-align: middle;
}
.job-discription-container {
  padding: 0.5rem 2rem;
}
.qualifications {
  padding-left: 2rem;
  list-style-type: disc;
}
</style>
