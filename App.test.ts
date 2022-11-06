import { describe, test, beforeEach, expect } from "vitest";
import AppVue from "./App.vue";
import setup from "@/tests/setup";

describe("App.vue", () => {
   beforeEach(async () => {
      await setup.stage(AppVue);
   });

   test("should start on home", async () => {
      setup.router.push("/");
      await setup.router.isReady();
      expect(setup.wrapper.text()).toContain("Here to there, in record time.");
   });

   test("should navigate to About", async () => {
      setup.router.push("/");
      await setup.router.isReady();
   });
});
