<script setup lang="ts">
defineProps<{
   src: string;
   alt: string;
}>();
</script>

<template>
   <div class="Section-Grid-Item">
      <img :src="src" :alt="alt" class="Image" />
      <p class="Text">
         <slot></slot>
      </p>
   </div>
</template>

<style scoped>
.Section-Grid-Item {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: 234.1px;
   width: 15vw;
}
.Image {
   height: 140px;
}
.Text {
   font-family: "Product Sans";
   font-style: normal;
   font-weight: 500;
   margin-top: 25px;
   font-size: 17px;
   line-height: 17px;
   text-align: center;
   letter-spacing: 0.01em;
   color: #c1dbe4;
}
</style>
