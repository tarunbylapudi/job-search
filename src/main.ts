import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faSearch,
  faLocationDot,
  faBuilding,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import App from "@/App.vue";
import "./assets/tailwind.css";
import router from "./router";
import store from "./store";
import { key } from "@/store";

library.add(
  faSearch,
  faLocationDot,
  faBuilding,
  faBars,
  faAngleUp,
  faAngleDown
);

createApp(App)
  .use(store, key)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
