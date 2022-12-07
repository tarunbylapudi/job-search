<template>
  <section>
    <h1 class="headerText" data-test="action-phrase">
      <span :class="actionClasses">{{ action }}</span> <br />for everyone
    </h1>
    <h2 class="sub-head">Find your next job at VitaVings Inc.</h2>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList.js";
export default {
  name: "Headline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        // build: this.action === "Build",
        // create: this.action === "Create",
        // design: this.action === "Design",
        // code: this.action === "Code",
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },

  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
      }, 4000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73eb;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
section {
  margin-bottom: 4rem;
}
.headerText {
  font-weight: 700;
  letter-spacing: -0.05em;
  font-size: 5.5rem;
  line-height: 1;
  margin-bottom: 3.5rem;
}
.sub-head {
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 2.25rem;
}
@media only screen and (max-width: 500px) {
  .headerText {
    font-size: 2.5rem;
    margin: 1.5rem 0 1.5rem 0;
  }
  .sub-head {
    font-size: 1.2rem;
    line-height: 2.25rem;
  }
}
@media only screen and (min-width: 501px) and (max-width: 1000px) {
  .headerText {
    font-size: 4.7rem;
    margin: 2rem 0 3.5rem 0;
  }
  .sub-head {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
}
</style>
