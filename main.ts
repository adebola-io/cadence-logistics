import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { AnimateDirective } from "./directives";
import "./styles/base.css";

createApp(App)
   .use(router)
   .use(createPinia())
   .directive("animate", AnimateDirective)
   .mount("#vue-app");
