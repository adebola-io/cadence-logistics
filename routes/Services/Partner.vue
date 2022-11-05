<template>
   <div class="Partner-Item">
      <img class="Partner" :src="src" :alt="alt" />
   </div>
</template>

<script setup lang="ts">
defineProps<{
   src: string;
   alt: string;
}>();
</script>

<style scoped>
.Partner-Item {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 209px;
   width: 360px;
   background: #ffffff;
   border: 4px solid #125e8a;
   border-radius: 32px;
   margin-right: 7px;
}
.Partner {
   width: 65%;
}
</style>
