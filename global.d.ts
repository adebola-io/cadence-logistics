export {};

declare global {
   type Nullable<T> = T | null;
   type TweenStore = {
      [keyof: string]: gsap.TweenVars[];
   };
   export interface AnimationConfig<T extends Element = HTMLElement>
      extends KeyframeAnimationOptions {
      frames: Array<
         Partial<Omit<CSSStyleDeclaration, keyof Keyframe>> & Keyframe
      >;
      onAnimationEnd?: (el: T, animation: Animation) => void;
   }
}
