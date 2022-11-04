import { defineStore } from "pinia";

type Page = "Home" | "About Us" | "Services";

export const useStore = defineStore("main", {
   state: () => ({ page: "Home" as Page }),
   actions: {
      changePage(to: Page) {
         this.page = to;
      },
   },
});
