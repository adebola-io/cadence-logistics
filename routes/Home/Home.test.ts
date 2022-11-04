import { describe, test, expect, beforeEach, afterAll } from "vitest";
import HomeVue from "./Home.vue";
import setup from "@/tests/setup";

describe("Home.vue", () => {
   beforeEach(() => {
      setup.stage(HomeVue);
   });

   test("should show section 1 text", () => {
      let section1 = setup.wrapper.find("section.Section-1");
      expect(section1.text()).toContain("Here to there, in record time.");
      const button = section1.find("button.Action-Button");
      expect(button.text()).toBe("Get Started");
   });

   test("should show section 2 text", () => {
      let section2 = setup.wrapper.find("section.Section-2");
      expect(section2.text()).toContain("Cheap, affordable costs.");
      const button = section2.find("button.Action-Button");
      expect(button.text()).toBe("See Our Pricing List");
   });

   test("should show section 3 text", () => {
      let section3 = setup.wrapper.find("section.Section-3");
      expect(section3.text()).toContain("Seamless and Secure Delivery.");
      const button = section3.find("button.Action-Button");
      expect(button.text()).toBe("Learn More");
   });

   test("should show section 4 text", () => {
      let section4 = setup.wrapper.find("section.Section-4");
      expect(section4.text()).toContain("Ready to Get Started?");
      const button = section4.find("button.Action-Button");
      expect(button.text()).toBe("Send an Item");
   });
});
