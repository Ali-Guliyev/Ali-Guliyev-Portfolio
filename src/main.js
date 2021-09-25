import { createApp } from "vue";
import App from "./App.vue";
import "./styles.css";
import router from "./router/index";
import store from "./store/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGithub, faTwitterSquare);

createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(router)
  .use(store)
  .mount("#app");
