/**
 * Runs an animation on an element.
 * @param target The element to animate.
 * @param config The animation configuration.
 */
export function runAnimationConfig(
   target: HTMLElement,
   config: AnimationConfig
) {
   const animation = target.animate(config.frames, { ...config });
   animation.onfinish = () => config.onAnimationEnd?.(target, animation);
}

export const PAPER_PLANE: AnimationConfig<HTMLImageElement> = {
   frames: [
      {
         transform: "translate(7%, 272%) rotate(90deg)",
         opacity: "0",
      },
      {
         transform: "translate(-45%, 100%) rotate(15deg)",
      },
      {},
   ],
   duration: 1200,
   delay: 200,
   fill: "both",
   easing: "ease-out",
   onAnimationEnd(plane) {
      runAnimationConfig(plane, {
         frames: [
            { transform: "translateY(0%)" },
            {
               transform: "translateY(4%)",
               filter: "drop-shadow(0px 50px 15px)",
            },
            { transform: "translateY(0%)" },
         ],
         duration: 3000,
         iterations: Infinity,
      });
   },
};

export * from "./tweens";
