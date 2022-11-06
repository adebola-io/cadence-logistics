<script setup lang="ts">
import gsap from "gsap";
import PaperPlane from "@/assets/svg/paper-plane.svg";
import DollarSign from "@/assets/svg/dollar.svg";
import NairaSign from "@/assets/svg/naira.svg";
import World from "@/assets/svg/world.svg";
import Location from "@/assets/svg/location.svg";
import Box from "@/assets/svg/box.svg";
import Handshake from "@/assets/svg/handshake.svg";
import { PAPER_PLANE } from "@/animations";
import { onMounted, ref } from "vue";
import GridItem from "./GridItem.vue";

let line: HTMLElement | null,
   naira: HTMLElement | null,
   dollar: HTMLElement | null;

const firstHeadingRef = ref<HTMLHeadingElement | null>(null),
   section2Ref = ref<HTMLElement | null>(null);

function addObserver(element: Element) {
   // Animations.
   new IntersectionObserver(
      ([{ isIntersecting: intersect }]) => {
         const timeline = gsap.timeline();
         timeline.to(line, {
            scaleX: intersect ? 1 : 0.1,
            duration: 0.6,
         });
         timeline.to(
            naira,
            {
               xPercent: intersect ? 0 : 100,
               yPercent: intersect ? 0 : 50,
               opacity: intersect ? 1 : 0,
               rotate: intersect ? 0 : 9,
               duration: 0.5,
            },
            "<"
         );
         timeline.to(
            dollar,
            {
               xPercent: intersect ? 0 : -100,
               yPercent: intersect ? 0 : -50,
               opacity: intersect ? 1 : 0,
               rotate: intersect ? 0 : -9,
               duration: 0.5,
            },
            "<"
         );
      },
      {
         threshold: 0.5,
      }
   ).observe(element);
}

onMounted(() => {
   gsap.from(firstHeadingRef.value, {
      xPercent: -80,
      opacity: 0,
      duration: 0.9,
   });
   const section2 = section2Ref.value as HTMLElement;
   line = section2.querySelector("hr");
   naira = section2.querySelector("img.Naira-Sign");
   dollar = section2.querySelector("img.Dollar-Sign");
   if (dollar) addObserver(section2);
});
</script>

<template>
   <main class="Home">
      <section class="Section Section-1">
         <div class="Text">
            <h1 ref="firstHeadingRef" class="Heading">
               Here to there, <span class="Heading-Block">in record time.</span>
            </h1>
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
      <section class="Section Section-3">
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
      <section class="Section Section-4">
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

.Section-1 .Heading .Heading-Block {
   display: block;
}
.Section-1 .Paragraph {
   width: 80%;
   text-align: justify;
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
   rotate: 4deg;
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
</style>
