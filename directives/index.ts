import { AnimationConfig, runAnimationConfig } from "@/animations";
import { Directive } from "vue";

export const AnimateDirective: Directive<HTMLElement, AnimationConfig> = {
   mounted: (el, binding) => {
      el.onload = () => runAnimationConfig(el, binding.value);
   },
   unmounted: (el) => {
      el.getAnimations().forEach((animation) => {
         animation.cancel();
      });
   },
};
