import Home from "./Home/Home.vue";
const About = () => import("./About/About.vue");
const Services = () => import("./Services/Services.vue");

export default [
   {
      path: "/",
      component: Home,
   },
   {
      path: "/about",
      component: About,
   },
   {
      path: "/services",
      component: Services,
   },
];
