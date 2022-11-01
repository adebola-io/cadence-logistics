import { render, screen } from "@testing-library/vue";
import { describe, expect, test } from "vitest";
import Home from "./Home.vue";

describe("Home Page", () => {
   render(Home);
   test("should show heading text", () => {
      expect(
         screen.getByText(/Here\sto\sthere,\sin\srecord\stime\./)
      ).toBeDefined();
   });

   test("should show Get Started button", () => {
      const button = screen.getByRole("button");
      expect(button.innerText).toBe("Get Started");
   });
});
