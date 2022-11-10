<script setup lang="ts">
const props = defineProps<{
   heading: string;
   image: string;
   color: string;
}>();
const imageModule = await import(`../../assets/svg/${props.image}.svg`);
</script>

<template>
   <div class="Info-Item" :style="{ background: color }">
      <h1>{{ heading }}</h1>
      <img :src="imageModule.default" :alt="heading" />
      <p>
         <slot></slot>
      </p>
   </div>
</template>

<style scoped>
.Info-Item {
   height: 900px;
   width: 100%;
   position: relative;
   border-radius: 30px;
   color: white;
   font-family: "Raleway";
   font-style: normal;
   font-weight: 700;
   overflow: hidden;
}
.Info-Item h1 {
   font-size: 56.2293px;
   line-height: 66px;
   letter-spacing: 0.01em;
   margin-top: 60px;
   margin-left: 40px;
   margin-bottom: 40px;
}
.Info-Item p {
   font-size: 23.2293px;
   line-height: 27px;
   letter-spacing: 0.01em;
   padding-right: 25%;
   margin-left: 40px;
}
.Info-Item img {
   position: absolute;
   width: 450px;
   bottom: 0;
   left: 0;
   transform: translateY(30%);
   opacity: 0.5;
}
@media (max-width: 1024px) {
   .Info-Item img {
      width: 300px;
   }
}
@media (max-width: 768px) {
   .Info-Item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 0;
   }
   .Info-Item h1 {
      margin-inline: 0;
      text-align: center;
   }
   .Info-Item img {
      display: none;
   }
   .Info-Item p {
      margin-inline: 0;
      text-align: center;
      padding: 0;
      width: 80%;
   }
}
@media (max-width: 475px) {
   .Info-Item p {
      font-size: 13pt;
      line-height: 20pt;
   }
}
@media (max-width: 375px) {
   .Info-Item h1 {
      font-size: 19pt;
      margin-bottom: 0;
   }
}
</style>
