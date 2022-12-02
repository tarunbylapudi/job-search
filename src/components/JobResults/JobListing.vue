<template>
  <li class="mb-7">
    <router-link to="/jobs/results/1" class="job-container">
      <div class="job-head-container">
        <h2 class="job-heading">
          Technical Account Manager, Pixel Carrier Engineering
        </h2>
        <div class="job-address-container">
          <div class="mr-5">
            <span>VitaVings</span>
          </div>
          <div><span>Visakhapatnam, Andhra pradesh</span></div>
        </div>
      </div>
      <hr />
      <div class="job-discription-container">
        <div>
          <h3 class="mt-1 mb-2">Qualifications:</h3>
          <div>
            <ul class="qualifications">
              <li>
                Bachelor's degree in computer science, electrical engineering, a
                related technical field, or equivalent practical experience.
              </li>
              <li>
                3 years of experience working with cellular carriers, telecom
                carriers, or device makers.
              </li>
              <li>
                3 years of experience with protocol features of 2G, 3G, 4G, and
                WLAN technologies.
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link to="/jobs/results/1" class="text-brand-blue-1"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>
<script>
export default { name: "JobListing" };
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
