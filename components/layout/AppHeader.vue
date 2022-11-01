<script setup lang="ts">
import { onMounted, ref } from "vue";
import Logo from "@/assets/logo.svg";
import gsap from "gsap";

const headerRef = ref<HTMLElement | null>(null);

onMounted(() => {
   gsap.from(headerRef.value, {
      yPercent: -100,
      duration: 2.0,
      ease: "elastic.out",
   });
});
</script>

<template>
   <header ref="headerRef" class="App-Header">
      <img :src="Logo" alt="Cadence" class="Header-Logo" />
      <nav class="Header-Navigation_Bar">
         <menu class="Navigation_Bar-Navlinks">
            <li class="Navlinks-Navlink">Home</li>
            <li class="Navlinks-Navlink">Services</li>
            <li class="Navlinks-Navlink">About</li>
            <li class="Navlinks-Navlink">Track An Item</li>
         </menu>
      </nav>
   </header>
</template>

<style scoped>
.App-Header {
   position: fixed;
   top: 0;
   box-sizing: border-box;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 106px;
   padding-inline: 5.6%;
   border-bottom: 2px solid rgba(18, 94, 138, 0.19);
   filter: drop-shadow(0px 4px 8px rgba(32, 75, 87, 0.17));
   flex: none;
   order: 0;
   flex-grow: 0;
}
.Header-Logo {
   height: 48%;
}
</style>
