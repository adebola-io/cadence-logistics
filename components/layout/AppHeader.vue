<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import Logo from "@/assets/svg/logo.svg";
import { Page, useStore } from "@/stores";
import gsap from "gsap";
import { useRouter } from "vue-router";
const store = useStore(),
   router = useRouter();
const headerRef = ref<HTMLElement | null>(null);
const path = computed(() => router.currentRoute.value.fullPath);

watch(path, () => {
   store.changePage(path.value as Page);
});

onMounted(() => {
   gsap.from(headerRef.value, {
      yPercent: -100,
      duration: 3,
      ease: "elastic.out",
   });
});
const links = reactive<Array<{ to: Page; text: string }>>([
   {
      text: "Home",
      to: "/",
   },
   {
      text: "Services",
      to: "/services",
   },
   {
      text: "About Us",
      to: "/about",
   },
]);
</script>

<template>
   <header ref="headerRef" class="Header">
      <img :src="Logo" alt="Cadence" class="Logo" />
      <nav class="Navigation-Bar">
         <menu class="Navlinks">
            <router-link
               v-for="link in links"
               :class="[
                  { Selected: store.page === link.to },
                  `Header-${link.text.split(/\s/g).join('-')}-Link`,
                  'Navlink',
               ]"
               :to="link.to"
               :key="link.text"
            >
               {{ link.text }}
            </router-link>
            <button type="button" class="Navlink Contact-Us">Contact Us</button>
            <button type="button" class="Item-Tracker-Button">
               Track An Item
            </button>
         </menu>
      </nav>
   </header>
</template>

<style scoped>
.Header {
   position: fixed;
   top: 0;
   z-index: 99;
   box-sizing: border-box;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 106px;
   padding-inline: var(--Vertical-Squeeze);
   border-bottom: 2px solid rgba(18, 94, 138, 0.19);
   filter: drop-shadow(0px 5px 7px rgba(32, 75, 87, 0.17));
   flex: none;
   order: 0;
   flex-grow: 0;
   font-size: 18px;
   background-color: white;
}
.Logo {
   height: 48%;
}

.Navlinks > * {
   margin-right: 48px;
}
.Navlink.Selected {
   font-weight: 700;
   border-bottom: 3px solid var(--Dark-Green);
}
.Item-Tracker-Button {
   padding: 14px 24px;
   margin: auto;
   border: 2px solid var(--Dark-Green);
   border-radius: 8px;
   transition-duration: 500ms;
}
.Item-Tracker-Button:hover {
   background-color: var(--Another-Dark-Green);
   color: white;
}
</style>
