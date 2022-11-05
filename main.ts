import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { AnimateDirective } from "./directives";
import "./styles";

createApp(App)
   .use(createPinia())
   .use(router)
   .directive("animate", AnimateDirective)
   .mount("#vue-app");
