import { render, screen } from "@testing-library/vue";
import { describe, test } from "vitest";
import AboutVue from "./About.vue";

describe("About Us Page", () => {
   render(AboutVue);
   test("should show heading text", () => {});
});
