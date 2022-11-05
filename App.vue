<script setup lang="ts">
import AppFooter from "./components/layout/AppFooter.vue";
import AppHeader from "./components/layout/AppHeader.vue";
</script>

<template>
   <AppHeader />
   <router-view></router-view>
   <AppFooter />
</template>
