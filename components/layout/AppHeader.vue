<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import Logo from "@/assets/svg/logo.svg";
import { Page, useStore } from "@/stores";
import gsap from "gsap";
import { useRouter } from "vue-router";
const store = useStore(),
   router = useRouter();
const headerRef = ref<HTMLElement | null>(null);

const sidebarIsOpen = ref(false);

watch(router.currentRoute, (val) => {
   store.changePage(val.fullPath as Page);
});

function onEnter(el: HTMLElement, done: () => any) {
   alert(9);
   gsap.from(el, {
      opacity: 0,
      delay: parseInt(el.dataset?.index ?? "0") * 0.15,
      onComplete: done,
   });
}

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
   <Teleport to="body">
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
               <button type="button" class="Navlink Contact-Us">
                  Contact Us
               </button>
               <button type="button" class="Item-Tracker-Button">
                  Track An Item
               </button>
            </menu>
         </nav>
         <button
            @click="sidebarIsOpen = !sidebarIsOpen"
            :class="[{ Toggled: sidebarIsOpen }, 'Sidebar-Toggle']"
            type="button"
         >
            <div class="Sidebar-Toggle-Line" v-for="x in 3"></div>
         </button>
      </header>
      <Teleport to="body">
         <Transition name="sidebar">
            <aside v-if="sidebarIsOpen" class="Sidebar">
               <TransitionGroup @enter="onEnter" :css="false">
                  <router-link
                     @click="sidebarIsOpen = !sidebarIsOpen"
                     v-for="(link, index) in links"
                     :class="[
                        { Selected: store.page === link.to },
                        'Sidebar-Link',
                     ]"
                     :to="link.to"
                     :key="link.text"
                     :data-index="index"
                  >
                     {{ link.text }}
                  </router-link>
                  <button
                     type="button"
                     :key="4"
                     :data-index="3"
                     class="Sidebar-Link"
                  >
                     Contact Me
                  </button>
                  <button :key="5" :data-index="4" class="Item-Tracker-Button">
                     Track an Item
                  </button>
               </TransitionGroup>
            </aside>
         </Transition>
      </Teleport>
   </Teleport>
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
   height: var(--Header-Size);
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
.Sidebar-Toggle {
   position: relative;
   display: none;
}
@media (max-width: 912px) {
   .Navlinks > * {
      margin-right: 1.5vw;
   }
}
@media (max-width: 768px) {
   .Navlinks {
      display: none;
   }
   .Sidebar-Toggle {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 80%;
      width: auto;
      aspect-ratio: 1;
   }
   .Sidebar-Toggle-Line {
      height: 8%;
      width: 80%;
      margin-block: 6%;
      border-radius: 10px;
      background-color: #125e8a;
      transition-duration: 500ms;
   }
   .Toggled .Sidebar-Toggle-Line {
      position: absolute;
   }
   .Toggled .Sidebar-Toggle-Line:nth-child(1) {
      transform: rotate(-45deg);
   }
   .Toggled .Sidebar-Toggle-Line:nth-child(2) {
      width: 0;
   }
   .Toggled .Sidebar-Toggle-Line:nth-child(3) {
      transform: rotate(45deg);
   }
   .Sidebar {
      position: fixed;
      top: 0;
      z-index: 98;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
         52deg,
         var(--Dark-Green),
         var(--Another-Dark-Green)
      );
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
   .Sidebar-Link {
      color: white;
      font-size: 20pt;
      margin-top: 20px;
   }
   .Sidebar-Link.Selected {
      border-bottom: 2px solid white;
      font-weight: bold;
   }
   .Sidebar .Item-Tracker-Button {
      color: white;
      border-color: white;
      margin: 0;
      margin-top: 20px;
      font-size: 20pt;
   }
}
</style>
