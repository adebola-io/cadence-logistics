import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import Header from "./AppHeader.vue";

describe("Header.vue", () => {
   test("should render navigations", () => {
      render(Header);

      expect(screen.getByText(/Home/)).toBeDefined();
      expect(screen.getByText(/Services/)).toBeDefined();
      expect(screen.getByText(/About/)).toBeDefined();
      expect(screen.getByText(/Track\sAn\sItem/)).toBeDefined();
      // const navbar = wrapper.findComponent("navbar");
      // console.log(navbar);
   });
});
