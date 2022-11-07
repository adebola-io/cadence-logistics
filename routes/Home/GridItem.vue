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
   font-size: 17px;
   width: 15vw;
}
@media (max-width: 912px) {
   .Section-Grid-Item {
      width: 23vw;
      font-size: 15px;
   }
}
.Image {
   height: 140px;
}
.Text {
   font-family: "Product Sans";
   font-style: normal;
   font-weight: 500;
   margin-top: 25px;

   line-height: 17px;
   text-align: center;
   letter-spacing: 0.01em;
   color: #c1dbe4;
}
</style>
