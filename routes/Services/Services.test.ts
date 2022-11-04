import setup from "@/tests/setup";
import { describe, test, beforeEach } from "vitest";
import ServicesVue from "./Services.vue";

describe("Services.vue", () => {
   beforeEach(() => {
      setup.stage(ServicesVue);
   });
   test("should render heading", () => {});
});
