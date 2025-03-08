"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DesignSteps() {
  //   const [activeStep, setActiveStep] = useState<number>(0);
  //   const containerRef = useRef(null);
  //   const scrollLine = useRef(null);
  //   const strategy = useRef(null);
  //   const wireframes = useRef(null);

  //   useGSAP(() => {
  //     gsap.to(scrollLine.current, {
  //       scrollTrigger: {
  //         trigger: strategy.current,
  //         start: "top 60%",
  //         end: "bottom top",
  //         scrub: true,
  //         duration: 100,
  //       },
  //       y: window.innerHeight ,

  //       ease: "power1.inOut",
  //     });
  //   });

  const containerRef = useRef(null);
  const scrollContainer = useRef(null);
  const strategyInfoBox = useRef(null);
  const scroll = useRef(null);
  const firstText = useRef(null);
  const firstNumber = useRef(null);
  const secondText = useRef(null);
  const secondNumber = useRef(null);
  const thirdText = useRef(null);
  const thirdNumber = useRef(null);

  const [processPoints, setProcessPoint] = useState([
    "Problem Analysis",
    "Game Research",
    " Flow Planning",
    "Role Assignment",
    "Timeline Setup",
  ]);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 4000px)", () => {
      gsap.to(strategyInfoBox.current, {
        duration: 20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          end: "120% center",
          scrub: 4,
          pin: true,
        },
      });
    });

    mm.add("(max-width: 3999px)", () => {
      gsap.to(strategyInfoBox.current, {
        duration: 20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          end: "90% center",
          scrub: 4,
          pin: true,
        },
      });
    });
    mm.add("(min-width: 3000px)", () => {
      gsap.to(scrollContainer.current, {
        duration: 10,
        scrollTrigger: {
          trigger: scroll.current,
          start: "top center",
          end: "bottom 20%",
          scrub: 4,
          pin: true,
        },
      });
    });
    mm.add("(max-width: 2999px)", () => {
      gsap.to(scrollContainer.current, {
        duration: 10,
        scrollTrigger: {
          trigger: scroll.current,
          start: "top center",
          end: "bottom -30%",
          scrub: 4,
          pin: true,
        },
      });
    });

    gsap.to(firstText.current, {
      duration: 10,
      scrollTrigger: {
        trigger: firstText.current,
        start: "top 70%",
        end: "bottom 40%",
        toggleClass: {
          targets: [firstText.current, firstNumber.current],
          className: "active",
        },

        onUpdate: () => {
          setProcessPoint([
            "Problem Analysis",
            "Game Research",
            "Flow Planning",
            "Role Assignment",
            "Timeline Setup",
          ]);
        },
      },
    });

    gsap.to(secondText.current, {
      duration: 10,
      scrollTrigger: {
        trigger: secondText.current,
        start: "top 70%",
        end: "bottom 40%",

        toggleClass: {
          targets: [secondText.current, secondNumber.current],
          className: "active",
        },

        onUpdate: () => {
          setProcessPoint([
            "Logic Implementation",
            "Real-time Feedback",
            "Performance Optimization",
            "Feature Integration",
            "Cross-Testing",
          ]);
        },
      },
    });

    gsap.to(thirdText.current, {
      duration: 10,
      scrollTrigger: {
        trigger: thirdText.current,
        start: "top 60%",
        end: "bottom 40%",

        toggleClass: {
          targets: [thirdText.current, thirdNumber.current],
          className: "active",
        },
        onUpdate: () => {
          setProcessPoint([
            "User Interface (UI)",
            "Brand Design",
            "Mobile Responsive",
            "Web Design",
            "Visual Communication",
          ]);
        },
      },
    });
  }, []);

  // mobile animation

  const firstMobText = useRef(null);
  const firstMobNumber = useRef(null);
  const secondMobText = useRef(null);
  const secondMobNumber = useRef(null);
  const thirdMobText = useRef(null);
  const thirdMobNumber = useRef(null);

  useGSAP(() => {
    gsap.to(firstMobText.current, {
      duration: 10,
      scrollTrigger: {
        trigger: firstMobText.current,
        start: "top 70%",
        end: "bottom 40%",
        toggleClass: {
          targets: [firstMobText.current, firstMobNumber.current],
          className: "active",
        },

        onUpdate: () => {
          setProcessPoint([
            "Problem Analysis",
            "Game Research",
            "Flow Planning",
            "Role Assignment",
            "Timeline Setup",
          ]);
        },
      },
    });

    gsap.to(secondMobText.current, {
      duration: 10,
      scrollTrigger: {
        trigger: secondMobText.current,
        start: "top 70%",
        end: "bottom 40%",

        toggleClass: {
          targets: [secondMobText.current, secondMobNumber.current],
          className: "active",
        },
        onUpdate: () => {
          setProcessPoint([
            "User Experience (UX)",
            "Motion Design",
            "User Interaction",
            "Prototypes",
          ]);
        },
      },
    });

    gsap.to(thirdMobText.current, {
      duration: 10,
      scrollTrigger: {
        trigger: thirdMobText.current,
        start: "top 50%",
        end: "bottom 40%",

        toggleClass: {
          targets: [thirdMobText.current, thirdMobNumber.current],
          className: "active",
        },

        onUpdate: () => {
          setProcessPoint([
            "Team Brainstorming",
            "Strategic Debugging",
            "Communication Boost",
          ]);
        },
      },
    });
  }, []);

  return (
    <div className="md:max-h-[1500px]">
      <div className="relative hidden  lg:block">
        <div className="mt-20 flex w-1/2 flex-col gap-20 lg:flex-row">
          <div className="flex items-center justify-between gap-10 py-8 lg:py-12">
            <div className="flex h-full max-h-[1500px] flex-col justify-between pb-48 pt-36">
              <h2
                className="text-2xl font-medium text-[#878C8E]"
                ref={firstNumber}
              >
                01
              </h2>
              <h2
                className="text-2xl font-medium text-[#878C8E]"
                ref={secondNumber}
              >
                02
              </h2>
              <h2
                className="text-2xl font-medium text-[#878C8E]"
                ref={thirdNumber}
              >
                03
              </h2>
            </div>

            <div
              className="hidden h-full max-h-[1500px] w-[1.5px] overflow-hidden bg-[#8B8C8D] lg:block"
              ref={scrollContainer}
            >
              <div
                className="sticky top-0 h-40 w-[2px] bg-white"
                ref={scroll}
              ></div>
            </div>

            <div className="flex h-full flex-col justify-around gap-28 py-20 lg:gap-36 xl:gap-44 ">
              <div
                className="text-[#878C8E] transition-all duration-200 ease-in-out xl:w-2/3 "
                ref={firstText}
              >
                <h3 className="text-[32px] font-medium">
                  {" "}
                  Decoding the Challenge
                </h3>
                <p className="text-xl font-light ">
                  Transforming a web development problem into an interactive
                  experience, we set out to craft a Mastermind game where users
                  could outsmart a computer-generated secret code.
                </p>
              </div>

              <div
                className="text-[#878C8E] transition-all duration-200 ease-in-out xl:w-2/3"
                ref={secondText}
              >
                <h3 className="text-[32px] font-medium ">
                  Engineering the Mind Game
                </h3>
                <p className="text-xl font-light">
                  From sleek UI design to complex game logic, we fused
                  creativity with technical skills, ensuring a smooth and
                  engaging gameplay experience.
                </p>
              </div>

              <div
                className="mb-10 text-[#878C8E] transition-all duration-200 ease-in-out xl:w-2/3"
                ref={thirdText}
              >
                <h3 className="text-[32px] font-medium ">
                  Breaking the Code, Building Bonds
                </h3>
                <p className="text-xl font-light ">
                  More than just writing code, this challenge sharpened our
                  problem-solving skills and strengthened our teamwork, proving
                  that great solutions emerge from great collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute right-0 top-20 hidden w-1/2 p-10 lg:block lg:h-[80%] 2xl:h-full `}
          ref={containerRef}
        >
          <ul
            className="steps-bg w-full columns-2  gap-6 rounded-[8px] p-4 font-light md:gap-4 lg:p-6 xl:p-8"
            ref={strategyInfoBox}
          >
            {processPoints.map((item) => (
              <li
                className="3xl:text-xl mb-6 flex items-center gap-4 font-light text-white sm:text-xs xl:text-base 2xl:whitespace-nowrap"
                key={item}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#3239FF"
                    d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
                  ></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* responsive  */}

      <div className=" block lg:hidden">
        <div className="flex flex-col items-baseline gap-4">
          <h2
            className="text-base font-medium text-[#878C8E]"
            ref={firstMobNumber}
          >
            01
          </h2>
          <div
            className="text-[#878C8E] transition-all duration-200 ease-in-out"
            ref={firstMobText}
          >
            <h3 className="mb-4 text-2xl font-medium">Strategy</h3>
            <p className="mb-4 text-lg font-light">
              We combine all the elements and achieve successful results for our
              clients. That's how we create something incredible.
            </p>
          </div>
        </div>
        <ul className="steps-bg  columns-1 gap-6 rounded-[8px] p-4 font-light sm:columns-2 md:gap-4">
          <li className="mb-5 flex items-center gap-4 whitespace-nowrap font-light text-white  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3239FF"
                d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
              ></path>
            </svg>
            Research
          </li>
          <li className="mb-5 flex items-center gap-4 whitespace-nowrap font-light text-white  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3239FF"
                d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
              ></path>
            </svg>
            User Journeys/Flows
          </li>
          <li className="mb-5 flex items-center gap-4 whitespace-nowrap font-light text-white  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3239FF"
                d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
              ></path>
            </svg>
            Personas
          </li>
          <li className="mb-5 flex items-center gap-4 whitespace-nowrap font-light text-white  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3239FF"
                d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
              ></path>
            </svg>
            Competitor
          </li>
          <li className="mb-5 flex items-center gap-4 whitespace-nowrap font-light text-white  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3239FF"
                d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
              ></path>
            </svg>
            Analysis
          </li>
          <li className="mb-5 flex items-center gap-4 whitespace-nowrap font-light text-white  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3239FF"
                d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
              ></path>
            </svg>
            Mind Mapping
          </li>
        </ul>

        <div className="mt-8 flex flex-col items-baseline gap-4">
          <h2
            className="text-base font-medium text-[#878C8E]"
            ref={secondMobNumber}
          >
            02
          </h2>
          <div
            className="text-[#878C8E] transition-all duration-200 ease-in-out xl:w-2/3"
            ref={secondMobText}
          >
            <h3 className="mb-4 text-2xl font-medium">Wireframes</h3>
            <p className="mb-4 text-lg font-light">
              We craft detailed wireframes and prototypes to define user
              journeys, ensuring clarity and seamless functionality.
            </p>
          </div>
        </div>
        <ul className="steps-bg  columns-1 gap-6 rounded-[8px] p-4 font-light sm:columns-2 md:gap-4">
          <li className="mb-6 flex items-center gap-4 whitespace-nowrap font-light text-white  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3239FF"
                d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
              ></path>
            </svg>
            User Experience (UX)
          </li>
          <li className="mb-6 flex items-center gap-4 whitespace-nowrap font-light text-white  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3239FF"
                d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
              ></path>
            </svg>
            Motion Design
          </li>
          <li className="mb-6 flex items-center gap-4 whitespace-nowrap font-light text-white  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3239FF"
                d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
              ></path>
            </svg>
            User Interaction
          </li>
          <li className="mb-6 flex items-center gap-4 whitespace-nowrap font-light text-white  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3239FF"
                d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
              ></path>
            </svg>
            Prototypes
          </li>
          <li className="mb-6 flex items-center gap-4 whitespace-nowrap font-light text-white  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3239FF"
                d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
              ></path>
            </svg>
            Customer Experience
          </li>
        </ul>

        <div className="mt-10 flex flex-col items-baseline gap-4">
          <h2
            className="text-base font-medium text-[#878C8E] "
            ref={thirdMobNumber}
          >
            03
          </h2>
          <div
            className=" text-[#878C8E] transition-all duration-200 ease-in-out xl:w-2/3 "
            ref={thirdMobText}
          >
            <h3 className="mb-4 text-2xl font-medium">User Interface</h3>
            <p className="mb-4 text-lg font-light">
              We craft detailed wireframes and prototypes to define user
              journeys, ensuring clarity and seamless functionality.
            </p>
          </div>
        </div>
        <ul className="steps-bg  columns-1 gap-6 rounded-[8px] p-4 font-light sm:columns-2 md:gap-4">
          <li className="mb-6 flex items-center gap-4 whitespace-nowrap font-light text-white  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3239FF"
                d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
              ></path>
            </svg>
            User Experience (UX)
          </li>
          <li className="mb-6 flex items-center gap-4 whitespace-nowrap font-light text-white  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3239FF"
                d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
              ></path>
            </svg>
            Motion Design
          </li>
          <li className="mb-6 flex items-center gap-4 whitespace-nowrap font-light text-white  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3239FF"
                d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
              ></path>
            </svg>
            User Interaction
          </li>
          <li className="mb-6 flex items-center gap-4 whitespace-nowrap font-light text-white  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3239FF"
                d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
              ></path>
            </svg>
            Prototypes
          </li>
          <li className="mb-6 flex items-center gap-4 whitespace-nowrap font-light text-white  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3239FF"
                d="M23.557 12.018 1.352.117C.754-.204.012.173 0 .797l.059 22.406c0 .606.718.99 1.297.695L23.52 13.404c.63-.292.634-1.065.036-1.386m-7.033.977L4.178 18.849c-.195.089-.434-.04-.438-.235l-.01-4.146a.25.25 0 0 0-.187-.246l-2.506-.834c-.263-.093-.267-.41 0-.485l2.493-.843c.108-.039.2-.135.188-.238l-.022-5.703c-.004-.196.247-.327.447-.22l12.389 6.64c.211.09.2.35-.008.456"
              ></path>
            </svg>
            Customer Experience
          </li>
        </ul>
      </div>
    </div>
  );
}
