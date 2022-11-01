declare module "*.vue" {
   import { Component } from "vue";
   export default {} as Component;
}

declare module "*.svg" {
   const image: string;
   export const app: {
      default: string;
   };
   export default image;
}
