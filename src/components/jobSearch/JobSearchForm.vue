<template>
  <form action="" @submit.prevent="searchForJobs">
    <font-awesome-icon :icon="['fas', 'search']" class="icon" />
    <div class="form-container">
      <div class="input-container-1">
        <label for="role">Role </label>

        <text-input
          v-model="role"
          placeholder="Full Stack Developer"
          data-test="role-input"
        />
      </div>
      <span class="in-container">in</span>
      <div class="input-container-2">
        <label for="location">Location</label>

        <text-input
          v-model="location"
          placeholder="Visakhapatnam"
          data-test="location-input"
        />
      </div>
    </div>
    <action-button
      text="Search"
      type="secondary"
      class="btn"
      data-test="form-submit-button"
    />
  </form>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import TextInput from "@/components/shared/TextInput.vue";

export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    searchForJobs() {
      this.$router.push({
        name: "JobResults",
        query: { role: this.role, location: this.location },
      });
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
  height: 3rem;
  border: 1px solid #80868b;
  border-radius: 1.5rem;
}
label {
  position: absolute;
  left: 0px;
  top: -2rem;
}
.icon {
  margin-left: 1rem;
  margin-right: 0.75rem;
}
.form-container {
  display: flex;
  flex-wrap: nowrap;
  flex: 1 1 0%;
  height: 100%;
  font-size: 1rem;
  line-height: 1.5rem;
}
.input-container-1 {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  height: 100%;
  padding-right: 0.75rem;
}
.input-container-2 {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  height: 100%;
  margin-left: 0.75rem;
}
.in-container {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 0.75rem;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: #80868b;
  background-color: #f8f9fa;
}
.btn {
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  height: 100%;
}

@media only screen and (max-width: 500px) {
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    border: none;
  }
  label {
    position: absolute;
    left: 1rem;
    top: -1.75rem;
  }
  .icon {
    display: none;
  }
  .in-container {
    display: none;
  }
  .form-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0 1rem 0 0;
    margin-bottom: 1.5rem;
  }
  .input-container-1 {
    position: relative;
    display: block;
    width: 100%;
    height: 4rem;
    border: 1px solid #80868b;
    border-radius: 1.5rem;
    margin-bottom: 2rem;
    padding-left: 1rem;
  }

  .input-container-2 {
    position: relative;
    display: block;
    width: 100%;
    height: 4rem;
    border: 1px solid #80868b;
    border-radius: 1.5rem;
    margin-left: 0;
    padding-left: 1rem;
  }
  .btn {
    display: block;
  }
}

@media only screen and (min-width: 501px) and (max-width: 1000px) {
  form {
    margin: 0 2rem 0 0;
    margin-right: 4rem;
  }
}
</style>
