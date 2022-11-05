<script setup lang="ts">
import Partner from "./Partner.vue";
import ServiceItem from "./ServiceItem.vue";

import Truck from "@/assets/svg/truck.svg";
import Freight from "@/assets/svg/freight.svg";
import Bicycle from "@/assets/svg/bicycle.svg";
import Warehouse from "@/assets/svg/warehouse.svg";
import Papers from "@/assets/svg/papers.svg";
import Chatbox from "@/assets/svg/chatbox.svg";

import Jumia from "@/assets/svg/jumia.svg";
import Amazon from "@/assets/svg/amazon.svg";
import Konga from "@/assets/svg/konga.svg";
import Etsy from "@/assets/svg/etsy.svg";
import Ebay from "@/assets/svg/ebay.svg";
import Macys from "@/assets/svg/macys.svg";
</script>

<template>
   <main class="App-Services">
      <section class="Section Section-1">
         <h1 class="Heading">Our Services</h1>
         <hr class="Line" />
         <p class="Paragraph">
            Here's a look at some of the services we offer as a company. They
            range from good transportation, door delivery, warehousing,
            disposal, security and more.
         </p>
      </section>
      <section class="Section Section-2">
         <div class="Grid-Container">
            <ServiceItem :src="Truck" alt="truck icon.">
               <template #heading> Procurement </template>
               Candace Logistics offers procurement and buyer representation to
               our customers, we buy, pick up, crate and package on your behalf,
               and ship either by air or sea to your final destination.
            </ServiceItem>
            <ServiceItem :src="Freight" alt="freight ship icon.">
               <template #heading> Freight Services </template>
               Cadence ships worldwide, containers and RoRos “Roll on Roll off”,
               whether you are shipping your car, household goods, motorhomes,
               tractors, heavy construction / earth moving equipment and general
               shipping, we can handle it all.
            </ServiceItem>
            <ServiceItem :src="Bicycle" alt="icon of person riding a bicycle.">
               <template #heading>Dispatch Delivery</template>
               Cadence provides the largest last-mile courier delivery solution
               in Nigeria. Send your parcels and packages with Cadence Go.
            </ServiceItem>
            <ServiceItem :src="Warehouse" alt="warehouse icon.">
               <template #heading> Warehousing </template>
               As an experienced logistics provider, we can help with any
               storage needs, for all long as is necessary.
            </ServiceItem>
            <ServiceItem :src="Papers" alt="icon of stacked papers.">
               <template #heading>Customs Clearance</template>
               Cadence will handle all processes involved in the transportation
               of your goods, including clearance.
            </ServiceItem>
            <ServiceItem :src="Chatbox" alt="message chat icon.">
               <template #heading> 24/7 Support </template>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Obcaecati cum nihil corporis exercitationem, Sit asperiores in
               praesentium qui quo aliquid natus expedita accusantium ipsum.
            </ServiceItem>
         </div>
      </section>
      <section class="Section Section-3">
         <h1>Notable Partners</h1>
         <div class="Carousel-Container">
            <div class="Partners-Carousel">
               <Partner :src="Jumia" alt="Jumia" />
               <Partner :src="Amazon" alt="Amazon" />
               <Partner :src="Konga" alt="Konga" />
               <Partner :src="Etsy" alt="Etsy" />
               <Partner :src="Ebay" alt="Ebay" />
               <Partner :src="Macys" alt="Macy's" />
            </div>
         </div>
      </section>
   </main>
</template>

<style scoped>
.App-Services {
   margin-top: 106px;
}
.Section-1 {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background: linear-gradient(105.76deg, #11567d 6.99%, #174552 85.54%);
}
.Section-1 .Heading {
   font-family: "Raleway";
   font-style: normal;
   font-weight: 700;
   font-size: 103.229px;
   line-height: 121px;
   display: flex;
   align-items: center;
   text-align: center;
   letter-spacing: 0.01em;
   color: #c1dbe4;
}
.Section-1 .Line {
   width: 75%;
   height: 7px;
   background-color: #c1dbea;
}
.Section-1 .Paragraph {
   width: 65%;
   font-style: normal;
   font-weight: 700;
   font-size: 20.4848px;
   line-height: 27px;
   text-align: center;
   letter-spacing: 0.01em;
   color: #c1dbe4;
}
.Section-2 {
   display: flex;
   justify-content: center;
   align-items: center;
}
.Grid-Container {
   display: grid;
   grid: repeat(2, auto) / repeat(3, auto);
   row-gap: 25px;
   place-items: center;
}
.Section-3 {
   padding-right: 0;
   max-height: 450px;
}
.Section-3 h1 {
   margin-bottom: 35px;
}
.Carousel-Container {
   width: 100%;
   overflow-x: hidden;
}
.Partners-Carousel {
   display: flex;
}
</style>
