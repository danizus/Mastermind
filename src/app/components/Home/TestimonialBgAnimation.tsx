"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

const TestimonialBgAnimation = () => {
  useGSAP(() => {
    gsap.to("#circle1", {
      duration: 6,
      stagger: {
        amount: 4,
        repeat: -1,
      },
      ease: "none",
      motionPath: {
        path: "#footerpath1",
        align: "#footerpath1",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
      immediateRender: true,
    });
    gsap.to("#circle2", {
      duration: 6,
      stagger: {
        amount: 4,
        repeat: -1,
      },
      ease: "none",
      motionPath: {
        path: "#footerpath1",
        align: "#footerpath1",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
      immediateRender: true,
    });
    gsap.to("#circle3", {
      duration: 6,
      stagger: {
        amount: 4,
        repeat: -1,
      },
      ease: "none",
      motionPath: {
        path: "#footerpath2",
        align: "#footerpath2",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
      immediateRender: true,
    });

    gsap.to("circle4", {
      duration: 6,
      ease: "none",
      motionPath: {
        path: "#footerpath2",
        align: "#footerpath2",
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
      className="absolute bottom-0 right-0 z-10 h-auto w-[90%] max-w-[1450px]"
    >
      <path
        id="footerpath1"
        d="M1748 3H801C359.172 3 1 361.172 1 803V967"
        stroke="#5C62FF"
      />
      <path
        id="footerpath2"
        d="M1748 310H809C532.858 310 309 533.858 309 810V967"
        stroke="#5C62FF"
      />
      <circle cx="920.5" cy="309.5" r="2.5" fill="#5C62FF" id="circle4" />
      <circle cx="1670.5" cy="2.5" r="2.5" fill="#5C62FF" id="circle1" />
      <circle cx="308.5" cy="798.5" r="2.5" fill="#5C62FF" id="circle3" />
      <circle cx="245.5" cy="226.5" r="2.5" fill="#5C62FF" id="circle2" />
    </svg>
  );
};

export default TestimonialBgAnimation;
