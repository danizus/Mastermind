"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

const AchievementsBgAnimation = () => {
  useGSAP(() => {
    gsap.to("#footercircle1", {
      duration: 10,
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

    gsap.to("#footercircle2", {
      duration: 8,
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

    gsap.to("#footercircle3", {
      duration: 6,
      ease: "none",
      motionPath: {
        path: "#footerpath3",
        align: "#footerpath3",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
      immediateRender: true,
    });
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1749"
      height="968"
      fill="none"
      viewBox="0 0 1749 968"
      className="right-0 bottom-0 z-10 absolute w-[90%] max-w-[1450px] h-auto"
    >
      <path
        stroke="#323639"
        d="M1748.5 3v-.5H801C358.896 2.5.5 360.896.5 803v164.5h1748V3z"
      ></path>
      <path
        stroke="#323639"
        d="M1748.5 310v-.5H809c-276.419 0-500.5 224.081-500.5 500.5v157.5h1440V310z"
      ></path>
      <circle cx="920.5" cy="309.5" r="2.5" fill="#323639"></circle>
      <circle cx="1670.5" cy="2.5" r="2.5" fill="#323639"></circle>
      <circle cx="308.5" cy="798.5" r="2.5" fill="#323639"></circle>
      <circle cx="245.5" cy="226.5" r="2.5" fill="#323639"></circle>
    </svg>
  );
};

export default AchievementsBgAnimation;