import AboutVue from "./About/About.vue";
import HomeVue from "./Home/Home.vue";

// import {RouterLink} from "vue-router";
export const routes = [
   {
      path: "/",
      component: HomeVue,
   },
   {
      path: "/about-us",
      component: AboutVue,
   },
];
