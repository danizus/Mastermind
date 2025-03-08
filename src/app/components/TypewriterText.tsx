"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin, TextPlugin);

export default function TypewriterText(props: { children: string }) {
  const challengersHeading = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.to(challengersHeading.current!, {
      scrollTrigger: {
        trigger: challengersHeading.current,
        start: "top center",
        end: "bottom center",
      },
      delay: 1,
      duration: 3,
      text: {
        value: props.children.toString(),
        preserveSpaces: true,
      },
    });
  });

  return (
    <>
      <span ref={challengersHeading}></span>
      <span className="animate-ping">_</span>
    </>
  );
}

// "use client";

// export default function TypewriterText(props: { children: string }) {

//   return (
//     <span>
//       {props.children}
//     </span>
//   );
// }
