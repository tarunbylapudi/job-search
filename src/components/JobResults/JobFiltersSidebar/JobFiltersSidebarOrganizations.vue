<template>
  <accordian header="Organizations">
    <fieldset>
      <ul class="filter">
        <li class="filter-option">
          <input id="VueTube" type="checkbox" style="margin-right: 0.5rem" />
          <label for="VueTube">VueTube</label>
        </li>
        <li class="filter-option">
          <input
            id="Between Vue and Me"
            type="checkbox"
            style="margin-right: 0.5rem"
          />
          <label for="Between Vue and Me">Between Vue and Me</label>
        </li>
        <li class="filter-option">
          <input
            id="Et Vue Brute"
            type="checkbox"
            style="margin-right: 0.5rem"
          />
          <label for="Et Vue Brute">Et Vue Brute</label>
        </li>
        <li class="filter-option">
          <input
            id="Vue and a Half Men"
            type="checkbox"
            style="margin-right: 0.5rem"
          />
          <label for="Vue and a Half Men">Vue and a Half Men</label>
        </li>
      </ul>
    </fieldset>
  </accordian>
</template>

<script>
import Accordian from "@/components/shared/Accordian.vue";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordian,
  },
};
</script>
<style scoped>
.filter {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.filter-option {
  width: 50%;
  height: 2rem;
  font-size: 0.8rem;
  font-weight: 500;
}
</style>
