"use client";
import { VolkohAlt } from "@/lib/icons";
import { CustomButton } from "@/app/components/theme";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import TypewriterText from "@/app/components/TypewriterText";
gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

export default function TextContent() {
  useGSAP(() => {
    gsap.to("#circle1", {
      duration: 6,
      ease: "none",
      motionPath: {
        path: "#path1",
        align: "#path1",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
      immediateRender: true,
    });

    gsap.to("#circle2, #circle3, #circle5", {
      duration: 6,
      stagger: {
        amount: 4,
        repeat: -1,
      },
      ease: "none",
      motionPath: {
        path: "#path2",
        align: "#path2",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
      immediateRender: true,
    });

    gsap.to("#circle4", {
      duration: 6,
      ease: "none",
      motionPath: {
        path: "#path3",
        align: "#path3",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
      immediateRender: true,
    });

    gsap.to("#circle6", {
      duration: 1,
      yoyo: true,
      ease: "power1.inOut",
      motionPath: {
        path: "#path4",
        align: "#path4",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
      immediateRender: true,
    });
  });

  return (
    <section className="relative bg-[#17191B] py-12 text-white md:py-16 lg:py-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1921"
        height="317"
        fill="none"
        viewBox="0 0 1921 317"
        className="absolute left-1/2 top-1/2 h-auto w-full -translate-x-1/2 -translate-y-1/2"
      >
        <mask
          id="mask0_2133_54"
          style={{ maskType: "alpha" }}
          width="1921"
          height="317"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 0H1921V317H0z"></path>
        </mask>
        <g mask="url(#mask0_2133_54)">
          <path
            stroke="#323639"
            d="M.5.5h260c87.261 0 158 70.739 158 158s-70.739 158-158 158H.5V.5z"
            id="path3"
          ></path>
          <path stroke="#323639" d="M1623.5 0.5H1920.5V316.5H1623.5z"></path>
          <path
            stroke="#323639"
            d="M576.5 0.5h287s158 0 158 158v0s0 158 -158 158h-287s-158 0 -158 -158v0s0 -158 158 -158"
            id="path2"
          />
          <path
            stroke="#323639"
            d="M1021.5 158.5c0-87.261 70.74-158 158-158h444v316h-444c-87.26 0-158-70.739-158-158z"
            id="path1"
          ></path>
          <circle cx="103.5" cy="158.5" r="158" stroke="#323639"></circle>
          <circle cx="1781.5" cy="158.5" r="158" stroke="#323639"></circle>
          <path stroke="#323639" d="M261.5 0L261.5 316"></path>
          <path stroke="#323639" d="M103.5 164L103.5 244" id="path4"></path>
          <circle
            cx="103.5"
            cy="158.5"
            r="2.5"
            fill="#323639"
            id="circle6"
          ></circle>
          <circle
            cx="418.5"
            cy="158.5"
            r="2.5"
            fill="#323639"
            id="circle4"
          ></circle>
          <circle
            cx="578.5"
            cy="0.5"
            r="2.5"
            fill="#323639"
            id="circle5"
          ></circle>
          <circle
            cx="861.5"
            cy="0.5"
            r="2.5"
            fill="#323639"
            id="circle2"
          ></circle>
          <circle
            cx="1181.5"
            cy="0.5"
            r="2.5"
            fill="#323639"
            id="circle1"
          ></circle>
          <circle
            cx="719.5"
            cy="316.5"
            r="2.5"
            fill="#323639"
            id="circle3"
          ></circle>
        </g>
      </svg>

      <div className="container">
        <div className="grid items-start gap-4 md:grid-cols-4">
          <div className="col-span-1">
            <p className="text-sm font-light md:text-base lg:text-xl">
              The Game
            </p>
          </div>
          <div className="col-span-2">
            <h2 className="min-h-[80px] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              <TypewriterText>
                What is the game about?
              </TypewriterText>
            </h2>
            <div className="py-10 sm:py-24 md:py-32 lg:py-44">
              <p className="text-sm font-light leading-normal text-[#878C8E] md:text-xl">
                In this game, the computer generates a 4-digit secret code with
                unique numbers between 1 and 6, and your objective is to guess
                the correct combination. To make a guess, enter four different
                numbers in the input field and submit it. After each guess,
                you'll receive feedback in the form of hints: 🖤 Black pegs
                represent a correct number in the correct position, while ⚪
                White pegs indicate a correct number but in the wrong position.
                Use this feedback to adjust your next guesses and refine your
                approach. The goal is to crack the code by getting 4 black pegs,
                which means you've successfully guessed the secret code. Once
                you win, you can restart the game and try again with a new
                secret code, continuing to guess, analyze, and improve your
                strategy to master the game. 
              </p>
            </div>
          </div>
          <div className="col-span-1 flex md:justify-end">
            <VolkohAlt className="mt-10 h-auto w-16 sm:w-20 md:mt-0 md:w-24" />
          </div>
        </div>
      </div>
    </section>
  );
}
