<script setup lang="ts">
import AppFooter from "./components/layout/AppFooter.vue";
import AppHeader from "./components/layout/AppHeader.vue";
</script>

<template>
   <AppHeader />
   <RouterView v-slot="{ Component }">
      <Transition name="fade-leave" mode="out-in">
         <component :is="Component"></component>
      </Transition>
   </RouterView>
   <AppFooter />
</template>

<style scoped>
.fade-leave-enter-active,
.fade-leave-leave-active {
   transition-duration: 500ms;
}
.fade-leave-leave-to {
   transform: translateX(10%);
   opacity: 0;
}
.fade-leave-enter-from {
   opacity: 0;
   transform: translateX(-10%);
}
</style>
