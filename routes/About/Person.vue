<script setup lang="ts">
defineProps<{
   image: string;
}>();
</script>

<template>
   <div class="Person">
      <div
         :style="{ backgroundImage: `url(${image})` }"
         class="Profile-Pic"
      ></div>
      <h3 class="Person-Name">
         <slot></slot>
      </h3>
      <p>
         <slot name="title"></slot>
      </p>
   </div>
</template>

<style scoped>
.Person {
   position: relative;
   z-index: 1;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}
.Person-Name {
   font-size: 30px;
   color: black;
   margin-top: 7px;
}
.Profile-Pic {
   height: 250px;
   aspect-ratio: 1;
   background-color: var(--Dark-Green);
   background-size: cover;
   background-position: center;
   border-radius: 50%;
   filter: drop-shadow(-2px 4px 24px rgba(0, 0, 0, 0.25));
}
@media (max-width: 768px) {
   .Profile-Pic {
      height: 45vw;
      border: 5px solid white;
   }
   .Person-Name {
      font-size: 38px;
   }
   .Person p {
      margin-top: 5px;
      font-size: 16pt;
      margin-bottom: 30px;
   }
}
@media (max-width: 412px) {
   .Person-Name {
      font-size: 19pt;
   }
}
</style>
