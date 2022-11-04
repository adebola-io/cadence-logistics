import AboutVue from "./About/About.vue";
import HomeVue from "./Home/Home.vue";
import ServicesVue from "./Services/Services.vue";

export default [
   {
      path: "/",
      component: HomeVue,
   },
   {
      path: "/about",
      component: AboutVue,
   },
   {
      path: "/services",
      component: ServicesVue,
   },
];
