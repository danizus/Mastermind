"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HeroLineAnimation() {
  useEffect(() => {
    // on mouse move, move the vertical line using gsap and useGSAP hook
    const verticalLineRight = document.querySelector(".vertical-line-right");
    const verticalLineLeft = document.querySelector(".vertical-line-left");

    const moveVerticalLine = (e: { clientX: number; clientY: number }) => {
      const x = e.clientX - 10;
      const y = e.clientY - 10;

      gsap.to(verticalLineRight, {
        duration: 1,
        css: {
          left: x,
          top: y,
        },
      });

      gsap.to(verticalLineLeft, {
        duration: 1,
        css: {
          left: x,
          top: y,
        },
      });

      gsap.to(".vertical-line-text", {
        duration: 1,
        css: {
          left: x,
          top: y,
        },
      });
    };
    
    document.addEventListener("mousemove", moveVerticalLine);
  });

  return (
    <>
      <span className="vertical-line vertical-line-right absolute -z-10 block h-[200vw] w-[1px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#17191B] opacity-30"></span>
      <span className="vertical-line vertical-line-left absolute -z-10 block h-[200vw] w-[1px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#17191B] opacity-30"></span>
      <span className="vertical-line-text absolute -z-10 w-max -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white p-2 text-xs">
      IAD GROUP 7
      </span>
    </>
  );
}
