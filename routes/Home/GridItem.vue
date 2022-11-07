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
@media (max-width: 912px) {
   .Section-Grid-Item {
      width: 23vw;
      font-size: 15px;
   }
}
@media (max-width: 768px) {
   .Section-Grid-Item {
      width: 43vw;
      font-size: 19px;
   }
   .Text {
      line-height: 27px;
   }
}
@media (max-width: 425px) {
   .Section-Grid-Item {
      width: 50vw;
   }
}
</style>
