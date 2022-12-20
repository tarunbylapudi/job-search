<template>
  <div>
    <div class="flex pb-5">
      <h3 class="text-sm font-semibold">SPOTLIGHT</h3>
    </div>
    <ul>
      <li v-for="spotlight in spotlights" :key="spotlight.id">
        <slot
          :img="spotlight.img"
          :title="spotlight.title"
          :description="spotlight.description"
        ></slot>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { ref, onMounted } from "vue";

interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}
export default defineComponent({
  name: "Spotlight",
  setup() {
    const spotlights = ref<Spotlight[]>([]);
    const getSpotlights = async () => {
      const baseurl = process.env.VUE_APP_API_URL;
      const url = `${baseurl}/spotlights`;
      const response = await axios.get<Spotlight[]>(url);
      spotlights.value = response.data;
    };

    onMounted(getSpotlights);

    return { spotlights };
  },
  // data() {
  //   return { spotlights: [] };
  // },
  // async mounted() {
  //   const baseurl = process.env.VUE_APP_API_URL;
  //   const url = `${baseurl}/spotlights`;
  //   const response = await axios.get(url);
  //   this.spotlights = response.data;
  // },
});
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  width: 100;
  height: auto;
}

@media only screen and (max-width: 500px) {
  ul {
    flex-direction: column;
  }
  li {
    margin-bottom: 1rem;
  }
}
</style>
