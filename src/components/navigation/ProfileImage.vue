<template>
  <img
    :src="profilePicUrl"
    alt="Profile-pic"
    srcset=""
    class="w-10 h-10 object-contain rounded-3xl"
  />
</template>
<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      profilePicUrl:
        "https://www.pngall.com/wp-content/uploads/5/User-Profile.png",
    };
  },
};
</script>

<style scoped>
img {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
  border-radius: 1.5rem;
}
@media screen and (max-width: 500px) {
  img {
    width: 2rem;
    height: 2rem;
  }
}
</style>
