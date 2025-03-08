"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function AnimatedTitleOnScroll({
  leftText,
  rightText,
}: {
  leftText: string;
  rightText: string;
}) {
  const processText = useRef(null);
  const designText = useRef(null);

  useGSAP(() => {
    gsap.from(processText.current, {
      scrollTrigger: {
        trigger: processText.current,
        start: "top 100%",
        end: 'bottom center',
        scrub: true,
      },
      x: -(window.innerWidth / 4),
      opacity: 0,
      ease: "power1.inOut",
    });

    gsap.from(designText.current, {
      scrollTrigger: {
        trigger: designText.current,
        start: "top 100%",
        end: 'bottom center',
        scrub: true,
      },
      x: window.innerWidth / 4,
      opacity: 0,
      ease: "power1.inOut",
    });
  });

  return (
    <h2 className="flex flex-col text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl">
      <span ref={processText}>{leftText}</span>
      <span className="translate-x-1/4" ref={designText}>
        {rightText}
      </span>
    </h2>
  );
}
