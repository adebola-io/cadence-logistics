<script setup lang="ts">
import gsap from "gsap";
import PaperPlane from "@/assets/svg/paper-plane.svg";
import DollarSign from "@/assets/svg/dollar.svg";
import NairaSign from "@/assets/svg/naira.svg";
import World from "@/assets/svg/world.svg";
import Location from "@/assets/svg/location.svg";
import Box from "@/assets/svg/box.svg";
import Handshake from "@/assets/svg/handshake.svg";
import { PAPER_PLANE, tweens } from "@/animations";
import { onMounted, ref } from "vue";
import GridItem from "./GridItem.vue";

const section2Ref = ref<Nullable<HTMLElement>>(null),
   section3Ref = ref<Nullable<HTMLElement>>(null),
   section4Ref = ref<Nullable<HTMLElement>>(null),
   observeroptions = {
      threshold: 0.5,
   };

// Animation observers.
const section2Observer = new IntersectionObserver(([{ isIntersecting }]) => {
   const tweenvar = isIntersecting ? 1 : 0;
   gsap.to(".Section-2 .Heading", tweens.fadeInFromTop[tweenvar]);
   gsap.to(".Section-2 .Line", tweens.lineExpand[tweenvar]);
   gsap.to(".Section-2 .Naira-Sign", tweens.nairaSign[tweenvar]);
   gsap.to(".Section-2 .Dollar-Sign", tweens.dollarSign[tweenvar]);
}, observeroptions);

const section3Observer = new IntersectionObserver(([{ isIntersecting }]) => {
   const tweenvar = isIntersecting ? 1 : 0;
   let timeline = gsap.timeline();
   timeline.to(".Section-3 .Heading", tweens.fadeInFromBottom[tweenvar]);
   timeline.to(".Section-Grid-Item", tweens.gridItemStaggerDrop[tweenvar]);
}, observeroptions);

const section4Observer = new IntersectionObserver(([{ isIntersecting }]) => {
   const tweenvar = isIntersecting ? 1 : 0;
   gsap.to(".Section-4 .Heading", tweens.fadeInFromLeft[tweenvar]);
}, observeroptions);

onMounted(() => {
   gsap.from(".Section-1 .Heading", tweens.firstHeading[0]);
   const [section2, section3, section4] = [
      section2Ref.value,
      section3Ref.value,
      section4Ref.value,
   ] as HTMLElement[];

   section2Observer.observe(section2);
   section3Observer.observe(section3);
   section4Observer.observe(section4);
});
</script>

<template>
   <main class="Home">
      <section class="Section Section-1">
         <div class="Text">
            <h1 class="Heading">Here to there, in record time.</h1>
            <p class="Paragraph">
               Cadence is a logistics company focused on providing the best
               means of transport for your products and services. Send anything
               to anywhere, safely and quickly, with us.
            </p>
            <button type="button" class="Action-Button">Get Started</button>
         </div>
         <div class="Paper-Plane-Container">
            <img
               :src="PaperPlane"
               v-animate="PAPER_PLANE"
               class="Paper-Plane"
               alt="White paper plane with green-to-brown outline gradient."
            />
         </div>
      </section>
      <section ref="section2Ref" class="Section Section-2">
         <hr class="Line" />
         <img
            :src="NairaSign"
            class="Floating-Image Naira-Sign"
            alt="A green-to-brown colored naira sign."
         />
         <img
            :src="DollarSign"
            class="Floating-Image Dollar-Sign"
            alt="A green-to-brown colored dollar sign."
         />
         <h1 class="Heading">Cheap, affordable costs.</h1>
         <p class="Paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam sint
            possimus illum voluptates veniam atque placeat qui, ratione, ex
            eligendi beatae ad repudiandae quidem dicta, mollitia cumque aliquid
            aspernatur ullam.
         </p>
         <button type="button" class="Action-Button">
            See Our Pricing List
         </button>
      </section>
      <section ref="section3Ref" class="Section Section-3">
         <h1 class="Heading">Seamless and Secure Delivery.</h1>
         <div class="Grid-Container">
            <GridItem :src="World" alt="A white outline of a globe.">
               Ship from UK/USA to Nigeria & Export to 230 plus locations
               worldwide.
            </GridItem>
            <GridItem :src="Location" alt="A white outline of a location pin.">
               Get real time tracking on your shipments and services.
            </GridItem>
            <GridItem :src="Box" alt="A white outline of a packaging box.">
               Proper, waterproof and damage-resistant item packaging.
            </GridItem>
         </div>
         <button type="button" class="Action-Button">Learn More</button>
      </section>
      <section ref="section4Ref" class="Section Section-4">
         <div class="Handshake-Container">
            <img :src="Handshake" class="Handshake" alt="A handshake" />
         </div>
         <div class="Text">
            <h1 class="Heading">Ready to Get Started?</h1>
            <p class="Paragraph">
               Convinced? Give Cadence a go! Lorem ipsum dolor sit, amet
               consectetur adipisicing elit. Illo id vitae, sequi asperiores
               debitis, ut dolor quasi voluptatibus omnis, minus velit
               distinctio maxime voluptates corrupti eius provident. Eaque, quia
               mollitia.
            </p>
            <button type="button" class="Action-Button">Send an Item</button>
         </div>
      </section>
   </main>
</template>

<style scoped>
.Paragraph {
   font-family: "Product Sans";
   font-style: normal;
   font-weight: 700;
   font-size: 20.4848px;
   line-height: 27px;
   letter-spacing: 0.01em;
   color: var(--Yet-Another-Dark-Green);
}

.Action-Button {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 19px 25px;
   gap: 10px;
   background: var(--Another-Dark-Green);
   color: white;
   border-radius: 10px;
   flex: none;
   order: 2;
   flex-grow: 0;
   transition-duration: 500ms;
}
.Action-Button:hover {
   transform: scale(1.1);
}
.Section-1 {
   display: grid;
   grid: auto/ 48% 52%;
   place-items: center;
}
.Section-1 .Paragraph {
   width: 80%;
   text-align: justify;
}
@media (max-width: 912px) {
   .Section-1 .Paragraph {
      width: 100%;
      font-size: 18px;
   }
}
.Section-1 .Action-Button {
   width: 160px;
   height: 65px;
}
.Paper-Plane-Container {
   position: relative;
   height: 100%;
   width: 100%;
   max-width: 850px;
   display: flex;
   justify-content: center;
   align-items: center;
}
.Paper-Plane {
   position: absolute;
   width: 90%;
   transform: rotate(4deg);
   transition-duration: 500ms;
   color: #125e8a7a;
   filter: drop-shadow(0px 110px 40px);
}
.Section-2 {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}
.Section-2 .Line {
   position: absolute;
   top: 0;
   width: 50%;
   margin-top: 37.5px;
   height: 10px;
   background-color: rgba(18, 94, 138, 0.43);
   border: none;
   border-radius: 10px;
   transform: scaleX(0.5);
}
.Section-2 .Heading {
   width: 50%;
   text-align: center;
}

.Section-2 .Paragraph {
   text-align: center;
   width: 60%;
}
.Floating-Image {
   position: absolute;
   width: 15%;
   color: #204b5787;
   filter: drop-shadow(0px 22px 13px);
   transition-duration: 500ms;
}
.Floating-Image:hover {
   filter: drop-shadow(0px 10px 5px);
   transform: scale(0.8);
}
.Floating-Image.Naira-Sign {
   top: 5%;
   left: var(--Vertical-Squeeze);
}
.Floating-Image.Dollar-Sign {
   bottom: 5%;
   right: var(--Vertical-Squeeze);
}
.Section-3 {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background: linear-gradient(110.76deg, #204b57 0.54%, #053957 66.49%);
}
.Section-3 .Heading {
   width: 60%;
   text-align: center;
   color: #c1dbe4;
   background: none;
   -webkit-background-clip: none;
   -webkit-text-fill-color: #c1dbe4;
   background-clip: none;
}
.Section-3 .Grid-Container {
   display: grid;
   grid: auto / auto auto auto;
   gap: 15.68px;
   margin-top: 30px;
}
.Section-3 .Action-Button {
   border: 2.26829px solid #c1dbe4;
   border-radius: 11.3415px;
   background-color: transparent;
}
.Section-4 {
   display: grid;
   grid: auto/ 48% 52%;
   place-items: center;
}
.Section-4 .Text {
   display: flex;
   justify-content: center;
   align-items: end;
   flex-direction: column;
}
.Section-4 .Heading,
.Section-4 .Paragraph {
   text-align: end;
}
.Section-4 .Paragraph {
   width: 70%;
   min-width: 400px;
}
.Handshake {
   width: 130%;
   transform: rotate(-4deg);
}
@media (max-width: 1024px) {
   .Section-2 .Heading {
      width: 70%;
   }
   .Section-2 .Paragraph {
      width: 80%;
   }
   .Section-3 .Heading {
      width: 100%;
      margin-bottom: 13px;
   }
   .Section-3 .Grid-Container {
      margin-bottom: 13px;
   }
   .Handshake {
      width: 90%;
   }
}
@media (max-width: 768px) {
   .Section-1 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;
   }
   .Section-1 .Text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
   .Section-1 .Heading {
      text-align: center;
      width: 70%;
   }
   .Section-1 .Paragraph {
      text-align: center;
      width: 80%;
   }
   .Paper-Plane-Container {
      height: 40%;
   }
   .Paper-Plane {
      height: 80%;
   }
   .Section-3 {
      height: fit-content;
      max-height: fit-content;
   }
   .Section-3 .Heading {
      margin-top: 80px;
      margin-bottom: 60px;
      width: 70%;
   }
   .Section-3 .Grid-Container {
      grid: repeat(3, auto) / auto;
   }
   .Section-3 .Action-Button {
      margin-bottom: 80px;
   }
   .Section-4 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
   .Handshake-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
   }
   .Handshake {
      width: 45vw;
      min-width: 300px;
   }
   .Section-4 .Text {
      align-items: center;
   }
   .Section-4 .Heading,
   .Section-4 .Paragraph {
      text-align: center;
   }
   .Section-4 .Heading {
      width: 70%;
   }
   .Section-4 .Paragraph {
      width: 80%;
   }
}
@media (max-width: 425px) {
   .Paragraph {
      font-size: 18px;
      width: 80%;
   }
   .Section-1 .Heading {
      width: 90%;
   }
   .Paper-Plane-Container {
      width: 90%;
      height: 35%;
      max-height: 400px;
   }
   .Section-1 .Paper-Plane {
      width: 60%;
   }
   .Floating-Image {
      width: 30%;
   }
   .Floating-Image.Naira-Sign {
      left: 0;
   }
   .Floating-Image.Dollar-Sign {
      right: 0;
   }

   .Section-4 .Text {
      width: 100%;
   }
   .Section-4 .Paragraph {
      width: 80%;
      min-width: 0;
   }
   .Handshake {
      min-width: 0;
      max-height: 400px;
   }
}
@media (max-width: 380px) {
   section.Section .Paragraph {
      font-size: 15px;
      line-height: 25px;
      width: 90%;
   }
}
</style>
