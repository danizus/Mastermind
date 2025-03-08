"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

const StepsAnimation = () => {
  useGSAP(() => {
    gsap.to(".circle1", {
      duration: 6,
      stagger: {
        amount: 4,
        repeat: -1,
      },
      ease: "none",
      motionPath: {
        path: ".path1",
        align: ".path1",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
      immediateRender: true,
    });
    gsap.to(".circle2", {
      duration: 6,
      stagger: {
        amount: 4,
        repeat: -1,
      },
      ease: "none",
      motionPath: {
        path: ".path1",
        align: ".path1",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
      immediateRender: true,
    });
    gsap.to(".circle3", {
      duration: 6,
      stagger: {
        amount: 4,
        repeat: -1,
      },
      ease: "none",
      motionPath: {
        path: ".path2",
        align: ".path2",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
      immediateRender: true,
    });

    gsap.to(".circle4", {
      duration: 6,
      ease: "none",
      motionPath: {
        path: ".path2",
        align: ".path2",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
      immediateRender: true,
    });
  });

  return (
    <svg
      width="1748"
      height="967"
      viewBox="0 0 1748 967"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-0 top-0 z-10 h-auto w-[90%] max-w-[1450px]"
    >
      <path
        d="M1748 964H801C359.172 964 1 605.828 1 164V0"
        stroke="#323639"
        className="path1"
      />
      <circle
        cx="2.5"
        cy="2.5"
        r="2.5"
        transform="matrix(1 0 0 -1 243 743)"
        fill="#323639"
        className="circle1"
      />
      <circle
        cx="2.5"
        cy="2.5"
        r="2.5"
        transform="matrix(1 0 0 -1 1668 967)"
        fill="#323639"
        className="circle2"
      />
      <path
        d="M1748 657H809C532.858 657 309 433.142 309 157V0"
        stroke="#323639"
        className="path2"
      />
      <circle
        cx="2.5"
        cy="2.5"
        r="2.5"
        transform="matrix(1 0 0 -1 918 660)"
        fill="#323639"
        className="circle3"
      />

      <circle
        cx="2.5"
        cy="2.5"
        r="2.5"
        transform="matrix(1 0 0 -1 306 171)"
        fill="#323639"
        className="circle4"
      />
    </svg>
  );
};

export default StepsAnimation;
