import AboutVue from "./About/About.vue";
import HomeVue from "./Home/Home.vue";

export default [
   {
      path: "/",
      component: HomeVue,
   },
   {
      path: "/about-us",
      component: AboutVue,
   },
];
