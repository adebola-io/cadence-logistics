import setup from "@/tests/setup";
import { describe, test, beforeEach, expect } from "vitest";
import ServicesVue from "./Services.vue";

describe("Services.vue", () => {
   beforeEach(() => {
      setup.stage(ServicesVue);
   });
   test("should render heading", () => {
      const section1 = setup.wrapper.find("section.Section-1");
      expect(section1.text()).toContain("Our Services");
   });
   test("should show services grid", () => {
      const services = setup.wrapper.findAll(".Service-Item");
      expect(services).toHaveLength(6);
   });
   test("should show partners", () => {
      const partners = setup.wrapper.findAll("img.Partner");
      expect(partners).toHaveLength(12);
   });
});
