<script setup lang="ts">
defineProps<{
   src: string;
   alt: string;
}>();
</script>

<template>
   <div class="Service-Item">
      <img :src="src" :alt="alt" />
      <h3>
         <slot name="heading"></slot>
      </h3>
      <p>
         <slot></slot>
      </p>
   </div>
</template>

<style scoped>
.Service-Item {
   display: flex;
   align-items: center;
   flex-direction: column;
   width: 80%;
}
.Service-Item img {
   height: 126px;
   margin-bottom: 15px;
}
.Service-Item p {
   width: 80%;
   height: 50%;
   text-align: justify;
}
@media (max-width: 1024px) {
   .Service-Item {
      width: 100%;
   }
   .Service-Item img {
      height: 100px;
   }
   .Service-Item p {
      width: 90%;
      font-size: 11pt;
   }
}
@media (max-width: 768px) {
   .Service-Item p {
      width: 70%;
      text-align: center;
      font-size: 12pt;
   }
}
@media (max-width: 475px) {
   .Service-Item p {
      width: 80%;
      font-size: 11pt;
   }
}
</style>
