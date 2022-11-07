<script setup lang="ts">
import Logo from "@/assets/svg/logo.svg";
import Facebook from "@/assets/svg/facebook.svg";
import Twitter from "@/assets/svg/twitter.svg";
import LinkedIn from "@/assets/svg/linkedin.svg";
import Instagram from "@/assets/svg/instagram.svg";
</script>

<template>
   <footer class="App-Footer">
      <div class="Logo-Container">
         <img :src="Logo" alt="Cadence Logo" />
         <p>
            © Cadence®, the Cadence logo, and the names and marks associated
            with Cadence's products are trademarks of Cadence Logistics and/or
            its affiliates.
         </p>
      </div>
      <div class="Icon-Row Outer-Icon-Row">
         <img :src="Facebook" alt="facebook icon" />
         <img :src="Instagram" alt="instagram icon" />
         <img :src="LinkedIn" alt="linkedin icon" />
         <img :src="Twitter" alt="twitter icon" />
      </div>
      <nav class="Links-Container">
         <li class="Links">
            <h3>INFO</h3>
            <ul>
               <li>About Cadence</li>
               <li>Help & Support</li>
               <li>FAQs</li>
               <li>Return Policy</li>
               <li>Terms of Use</li>
            </ul>
         </li>
         <li class="Links">
            <h3>SERVICES</h3>
            <ul>
               <li>Transportation</li>
               <li>Delayed Deliveries</li>
               <li>Packaging</li>
            </ul>
         </li>
         <li class="Links">
            <h3>COMPANY</h3>
            <ul>
               <li>Privacy Policy</li>
               <li>Careers</li>
               <li>Management</li>
            </ul>
         </li>
         <li class="Links Contact-Links">
            <h3>CONTACT</h3>
            <div class="Icon-Row">
               <img :src="Facebook" alt="facebook icon" />
               <img :src="Instagram" alt="instagram icon" />
               <img :src="LinkedIn" alt="linkedin icon" />
               <img :src="Twitter" alt="twitter icon" />
            </div>
         </li>
      </nav>
      <p class="Copyright">Cadence Logistics 2022.</p>
   </footer>
</template>

<style scoped>
.App-Footer {
   position: relative;
   display: grid;
   grid-template-columns: 25% 65%;
   column-gap: 10%;
   place-items: center;
   height: 430px;
   background: #11567d29;
   padding-inline: var(--Vertical-Squeeze);
}
.Logo-Container img {
   height: 66px;
}
.Logo-Container p {
   max-width: 400px;
   font-weight: 700;
   font-size: 13px;
   line-height: 16px;
   color: #125e8a;
}

.Links-Container {
   display: grid;
   grid-template-columns: repeat(4, 25%);
   width: 100%;
}
.Links h3 {
   font-family: "Raleway";
   font-weight: 700;
   font-size: 28px;
   background: linear-gradient(94.74deg, #3c92ca 10.56%, #125e8a 94.88%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
   margin-bottom: 10px;
}
.Links li {
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   margin-bottom: 8px;
   color: #125e8a;
}
.Icon-Row {
   display: grid;
   grid-template-columns: auto auto auto auto;
   column-gap: 5px;
   width: fit-content;
}
.Outer-Icon-Row {
   display: none;
}

.Copyright {
   position: absolute;
   bottom: 0;
   font-family: "Product Sans";
   font-style: normal;
   font-weight: 400;
   font-size: 19.0317px;
   line-height: 23px;
   text-align: center;
   margin-bottom: 40px;
   color: #11567d;
}
@media (max-width: 912px) {
   .Logo-Container img {
      height: 50px;
   }
   .Links h3 {
      font-size: 20px;
   }
   .Links li {
      font-size: 14px;
   }
}
@media (max-width: 768px) {
   .App-Footer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 540px;
   }
   .Logo-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
   .Logo-Container img {
      height: 60px;
   }
   .Logo-Container p {
      text-align: center;
      width: 95%;
      font-size: 11pt;
      line-height: 19px;
      margin-bottom: 0;
   }
   .Outer-Icon-Row {
      display: grid;
      column-gap: 13px;
      margin-block: 40px;
   }
   .Icon-Row img {
      height: 35px;
   }
   .Links-Container {
      display: flex;
      justify-content: space-around;
      padding-inline: var(--Vertical-Squeeze);
      margin-bottom: 30px;
   }
   .Links {
      display: flex;
      align-items: center;
      flex-direction: column;
   }
   .Links > * {
      text-align: center;
   }
   .Links li {
      font-size: 13pt;
   }
   .Links.Contact-Links {
      display: none;
   }
}
</style>
