"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

export default function FooterLogoAnimation() {
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
      width="796"
      height="865"
      fill="none"
      viewBox="0 0 796 865"
      className="absolute left-3/4 top-20 -z-10 h-auto w-auto -translate-x-1/3 transform md:top-24 lg:top-28 xl:top-32 2xl:top-36"
    >
      <path
        stroke="#323639"
        strokeWidth="2"
        d="M485.66 848.32L5.51 51.52C-7.04 29.74 8.03 3 33.1 3h959.44c25.12 0 40.96 26.77 27.6 48.49h-.01L539.98 848.31v.03c-11.67 20.85-41.75 20.91-54.3-.03l-.02.01z"
        id="footerpath1"
      ></path>
      <path
        stroke="#323639"
        strokeWidth="2"
        d="M790.82 171.54v-.03c2.33-4.19 2.1-8.87.1-12.4-2-3.54-5.79-5.92-10.51-5.47H245.16c-9.38 0-15.07 10.32-10.34 17.91l122.4 202.64.03.04.03.04c2.22 2.97 1.57 7.63-.85 10.86l-61.17 77.57c-3.74 4.22-3.75 9.44-1.38 13.34 2.36 3.9 7.07 6.47 12.66 5.53l97.41-18.11h.01c3.89-.78 7.78.75 10.15 4.7l88.79 147.46v.01c4.7 7.53 15.96 7.53 20.66 0v-.01l267.26-444.08z"
        id="footerpath2"
      ></path>
      <circle cx="165" cy="3" r="3" fill="#323639" id="footercircle1"></circle>
      <circle
        cx="354"
        cy="154"
        r="3"
        fill="#323639"
        id="footercircle2"
      ></circle>
      <circle
        cx="545"
        cy="317"
        r="3"
        fill="#323639"
        id="footercircle3"
      ></circle>
      <path
        stroke="#323639"
        strokeWidth="2"
        d="M710.331 212.385l.033-.021.031-.023c1.26-.945 2.664-.673 3.681.26 1.04.953 1.467 2.41.875 3.634L516.717 545.597c-.644.951-1.8 1.477-3.035 1.477s-2.391-.526-3.035-1.477l-69.793-116.364a3.977 3.977 0 00-2.164-1.963c-.882-.34-1.858-.394-2.799-.331-.946.063-1.933.251-2.865.453-.342.074-.671.149-.99.222-.583.132-1.134.257-1.672.358l-68.134 12.831-.01.001c-2.104.347-3.366-.674-3.846-1.953-.502-1.34-.168-2.997 1.143-4.001l350.814-222.465z"
        id="footerpath3"
      ></path>
    </svg>
  );
}
