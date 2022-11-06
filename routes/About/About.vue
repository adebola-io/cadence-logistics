<script setup>
import InfoItem from "./InfoItem.vue";
import Person from "./Person.vue";

import Adeola from "@/assets/image/adeola.jpg";
import Ifeanyi from "@/assets/image/ifeanyi.jpg";
import Ronke from "@/assets/image/ronke.png";
import Harold from "@/assets/image/harold.png";
import Adaora from "@/assets/image/adaora.png";
import Ayobami from "@/assets/image/ayobami.jpg";
</script>

<template>
   <main class="App-About">
      <section class="Section Section-1">
         <div class="Overlay"></div>
         <h1 class="Heading">We deliver goods to where they need to be.</h1>
      </section>
      <Suspense>
         <section class="Section Section-2">
            <InfoItem
               heading="Who we are"
               image="info"
               color="linear-gradient(110.76deg, #204B57 0.54%, #053957 66.49%)"
            >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
            </InfoItem>
            <InfoItem heading="What we do" image="box" color=" #125E8A">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
            </InfoItem>
            <InfoItem
               heading="What is our mission?"
               image="flag"
               color="#36578B"
            >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
            </InfoItem>
            <InfoItem
               heading="Going global"
               image="world"
               color="linear-gradient(222.98deg, #8A716A 28.01%, #6C5A55 100%)"
            >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
            </InfoItem>
         </section>
      </Suspense>
      <section class="Section Section-3">
         <div class="Overlay"></div>
         <h1 class="Heading">Meet Our Management</h1>
         <div class="Profile-Grid">
            <Person :image="Adeola">
               Adeola Adenuga
               <template #title> Chief Executive Officer </template>
            </Person>
            <Person :image="Ifeanyi">
               Ifeanyi Michaels
               <template #title> Chief Legal Officer </template>
            </Person>
            <Person :image="Ronke">
               Ronke Bankole
               <template #title> Executive Manager </template>
            </Person>
            <Person :image="Harold">
               Harold Visser
               <template #title>Assistant Manager</template>
            </Person>
            <Person :image="Adaora">
               Adaora Obi
               <template #title>Chief Financial Officer</template>
            </Person>
            <Person :image="Ayobami">
               Ayobami Ojo
               <template #title>Chief Technical Officer</template>
            </Person>
         </div>
      </section>
   </main>
</template>

<style scoped>
.Section-1 {
   position: relative;
   background-image: url(@/assets/image/Temple-Background.png);
   display: flex;
   justify-content: end;
   align-items: center;
}
.Overlay {
   position: absolute;
   z-index: 0;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
}
.Section-1 .Overlay {
   background-image: linear-gradient(0deg, white, transparent);
}
.Heading {
   position: relative;
   z-index: 1;
   text-align: end;
   width: 70%;
}
.Section-2 {
   display: grid;
   grid: auto auto/ 50% 50%;
   gap: 33px;
   place-items: center;
   height: fit-content;
   max-height: fit-content;
   margin-bottom: 45px;
}
.Section-3 {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: fit-content;
   max-height: fit-content;
   background-image: url(@/assets/image/Temple-Background.png);
}
.Section-3 .Heading {
   text-align: center;
   margin-top: 45px;
}
.Profile-Grid {
   display: grid;
   grid: repeat(2, auto) / repeat(3, auto);
   place-items: center;
   width: 100%;
   margin-block: 100px;
}
.Section-3 .Overlay {
   background-image: linear-gradient(180deg, white, transparent);
}
</style>
