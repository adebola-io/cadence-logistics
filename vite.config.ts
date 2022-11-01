/// <reference types="vitest" />
import { UserConfig } from "vite";
import path from "node:path";
import vue from "@vitejs/plugin-vue";

export default <UserConfig>{
   plugins: [vue()],
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "."),
      },
   },
   test: {
      environment: "happy-dom",
   },
};
