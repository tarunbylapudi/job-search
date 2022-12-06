import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

import App from "@/App.vue";
import "./assets/tailwind.css";
import router from "./router";

library.add(faSearch, faLocationDot, faBuilding);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
