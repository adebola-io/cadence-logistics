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
