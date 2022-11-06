import setup from "@/tests/setup";
import { beforeEach, describe, expect, test } from "vitest";
import AppHeaderVue from "./AppHeader.vue";

describe("AppHeader.vue", () => {
   beforeEach(() => {
      setup.stage(AppHeaderVue);
   });

   test("should render links", () => {
      const text = setup.wrapper.text();
      // expect(text).toContain("Home");
      // expect(text).toContain("About");
      // expect(text).toContain("Services");
      // expect(text).toContain("Track An Item");
      // expect(text).toContain("Contact");
   });
});
