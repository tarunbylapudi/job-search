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
