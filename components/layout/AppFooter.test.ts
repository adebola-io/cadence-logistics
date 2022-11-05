import setup from "@/tests/setup";
import { describe, test, beforeEach, expect } from "vitest";
import AppFooterVue from "./AppFooter.vue";

describe("AppFooter.vue", () => {
   beforeEach(() => {
      setup.stage(AppFooterVue);
   });
   test("should render headings", () => {
      const headings = setup.wrapper.findAll("h3");
      expect(headings).toHaveLength(4);
      expect(headings[0].text()).toBe("INFO");
   });
   test("should show copyright", () => {
      expect(setup.wrapper.text()).toContain("Cadence Logistics 2022.");
   });
});
