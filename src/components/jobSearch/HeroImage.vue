<template>
  <img :src="actionImg" alt="" class="heroImg" />
</template>

<script>
import nextElementInList from "@/utils/nextElementInList";
export default {
  name: "HeroImage",
  data() {
    return {
      actionImg: require("@/assets/images/build.png"),
      interval: null,
    };
  },
  created() {
    this.actionImgHandler();
  },
  methods: {
    actionImgHandler() {
      this.interval = setInterval(() => {
        const images = ["build", "create", "design", "code"];
        const currentActionImg = this.currentActionIngHandler(
          images,
          this.actionImg
        );
        const nextActionImage = nextElementInList(images, currentActionImg);
        this.nextImageSettingHandler(nextActionImage);
      }, 4000);
    },
    currentActionIngHandler(list, link) {
      for (let i = 0; i < list.length; i++) {
        if (link.includes(list[i])) {
          return list[i];
        }
      }
    },

    nextImageSettingHandler(image) {
      if (image === "build") {
        this.actionImg = require("@/assets/images/build.png");
      } else if (image === "create") {
        this.actionImg = require("@/assets/images/create.png");
      } else if (image === "design") {
        this.actionImg = require("@/assets/images/design.png");
      } else {
        this.actionImg = require("@/assets/images/code.png");
      }
    },
  },
};
</script>

<style scoped>
.heroImg {
  width: 80%;
  height: auto;
  margin: auto;
}
@media only screen and (min-width: 1001px) and (max-width: 1200px) {
  .heroImg {
    width: 100%;
    height: auto;
    margin: auto;
  }
}
@media only screen and (min-width: 501px) and (max-width: 1000px) {
  .heroImg {
    width: 80%;
    height: auto;
    margin: auto;
  }
}
@media only screen and (max-width: 500px) {
  .heroImg {
    width: 80%;
    height: auto;
    margin: auto;
  }
}
</style>
