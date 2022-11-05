import { defineStore } from "pinia";

export type Page = "/" | "/services" | "/about";

export const useStore = defineStore("main", {
   state: () => ({ page: window.location.pathname as Page }),
   actions: {
      changePage(to: Page) {
         this.page = to;
      },
   },
});
