import { AnimateDirective } from "@/directives";
import routes from "@/routes";
import { mount } from "@vue/test-utils";
import BaseWrapper from "@vue/test-utils/dist/baseWrapper";
import { createPinia, Pinia } from "pinia";
import { vitest } from "vitest";
import { Component } from "vue";
import { createRouter, createWebHashHistory, Router } from "vue-router";

/**
 * A custom Vue testing setup.
 * Contains all configurations for the Router, Pinia, custom directives and global mocks so I dont have to rewrite them in every test.
 */
export class TestSetup {
   /**
    * Creates a wrapper for a mounted node instance.
    * @param component The vue component to render.
    * @returns The wrapper for the mounted instance, same as `mount` in `@vue/test-utils`
    */
   stage(component: Component) {
      this.createMocks();
      (this as any).wrapper = mount(component as any, this.mountingOptions());
      return this.wrapper;
   }
   /**
    * Removes the staged component.
    */
   clear() {
      (this as any).wrapper = undefined as any;
      (this as any).router = undefined as any;
      (this as any).pinia = undefined as any;
   }
   private createMocks() {
      // Mock Intersection Observer in test env.
      window.IntersectionObserver = vitest.fn().mockReturnValue({
         observe: () => null,
         unobserve: () => null,
         disconnect: () => null,
      });
   }
   private mountingOptions(): Parameters<typeof mount>[1] {
      (this as any).router = createRouter({
         routes,
         history: createWebHashHistory(),
      });
      (this as any).pinia = createPinia();

      return {
         global: {
            plugins: [this.router, this.pinia],
            directives: { animate: AnimateDirective },
         },
      };
   }
   readonly router = undefined as unknown as Router;
   readonly pinia = undefined as unknown as Pinia;
   readonly wrapper = undefined as unknown as BaseWrapper<Node>;
}

export default new TestSetup();
