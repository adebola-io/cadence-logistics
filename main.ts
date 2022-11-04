import { createApp, DirectiveBinding } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./styles";
import { AnimationConfig, runAnimationConfig } from "./animations";
import { AnimateDirective } from "./directives";

const pinia = createPinia();

createApp(App)
   .use(pinia)
   .use(router)
   .directive("animate", AnimateDirective)
   .mount("#vue-app");
