export const tweens = {
   firstHeading: [
      {
         x: -200,
         opacity: 0,
         duration: 0.9,
      },
   ],
   lineExpand: [
      {
         scaleX: 0,
      },
      {
         scaleX: 1,
         duration: 0.6,
      },
   ],
   fadeInFromBottom: [
      {
         opacity: 0,
         yPercent: 60,
      },
      {
         opacity: 1,
         yPercent: 0,
         duration: 0.7,
      },
   ],
   fadeInFromTop: [
      {
         opacity: 0,
         yPercent: -60,
      },
      {
         opacity: 1,
         yPercent: 0,
         duration: 0.7,
      },
   ],
   nairaSign: [
      // Initial
      {
         xPercent: 100,
         yPercent: 50,
         opacity: 0,
         rotate: 9,
      },
      // Final
      {
         xPercent: 0,
         yPercent: 50,
         opacity: 1,
         rotate: 0,
         duration: 0.4,
      },
   ],
   dollarSign: [
      // Initial
      {
         xPercent: -100,
         yPercent: -50,
         opacity: 0,
         rotate: -9,
      },
      // Final
      {
         xPercent: 0,
         yPercent: 0,
         opacity: 1,
         rotate: 0,
         duration: 0.4,
      },
   ],
   gridItemStaggerDrop: [
      {
         opacity: 0,
         yPercent: -50,
      },
      {
         opacity: 1,
         yPercent: 0,
         duration: 1,
         stagger: {
            amount: 0.4,
         },
         ease: "bounce.out",
      },
   ],
   fadeInFromLeft: [
      {
         opacity: 0,
         xPercent: 30,
      },
      {
         opacity: 1,
         xPercent: 0,
         duration: 0.5,
      },
   ],
};
