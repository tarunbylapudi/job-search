<template>
  <ul class="my-8">
    <div class="text-center mt-16 mb-6 text-lg">
      Images from Public-dir and using Feach
    </div>
    <div class="imgContainer">
      <li v-for="image in images" :key="image.id">
        <img :src="image.url" />
      </li>
    </div>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

interface Image {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export default defineComponent({
  name: "ImagePublic",
  setup() {
    const images = ref<Image[]>([]);

    function request<T>(url: string): Promise<T> {
      return fetch(url)
        .then((response) => response.json())
        .then((data) => (images.value = data))
        .catch((error) => {
          console.log(error);
        });
    }

    request<Image[]>("/images.json");
    return { images };
  },
});
</script>
<style scoped>
.imgContainer {
  display: inline-block;
  justify-content: space-between;
}
</style>
