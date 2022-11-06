export const tweens: TweenStore = {
   firstHeading: [
      {
         x: -200,
         opacity: 0,
         duration: 0.9,
      },
   ],
   homeline: [
      // Initial
      {
         scaleX: 0.1,
      },
      // Final
      {
         scaleX: 1,
         duration: 0.6,
      },
   ],
   secondHeading: [
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
   heading3: [
      {
         opacity: 0,
         yPercent: 50,
      },
      {
         opacity: 1,
         yPercent: 0,
         duration: 0.5,
      },
   ],
   section3Highlights: [
      {
         opacity: 0,
         yPercent: -50,
      },
      {
         opacity: 1,
         yPercent: 0,
         duration: 1,
         stagger: {
            amount: 0.2,
         },
         ease: "bounce.out",
      },
   ],
   heading4: [
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
