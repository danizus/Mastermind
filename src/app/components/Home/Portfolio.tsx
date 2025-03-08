"use client";
import React, { useState } from "react";
import portfolio1 from "@images/Rectangle 40615portfolio.webp";
import portfolio2 from "@images/Rectangle 40615portfolio-1.webp";
import portfolio3 from "@images/Rectangle 40615portfolio-3.webp";
import portfolio4 from "@images/Rectangle 40615portfolio-2.webp";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from "../theme";
import TypewriterText from "@/app/components/TypewriterText";
import AchievementsBgAnimation from "./AchievementsBgAnimation";

const portfolio = [
  {
    title: "Homeloop",
    description:
      "A dynamic platform for property managers to streamline their ope...",
    tags: ["Real Estate", "Property Management", "User Experience"],
    image: portfolio1,
    link: "/homeloop",
  },
  {
    title: "Pet shack",
    description:
      "An engaging app that connects pet owners with local pet services...",
    tags: ["Pet Care", "Mobile App", "User Engagement"],
    image: portfolio2,
    link: "/petshack-case-study",
  },
  {
    title: "Cerro System",
    description:
      "A comprehensive system designed to simplify and optimize logist...",
    tags: ["Logistics", "Supply Chain", "Efficiency"],
    image: portfolio3,
    link: "#",
    comingSoon: true,
  },
  {
    title: "Flexi Clean",
    description:
      "A revolutionary cleaning services app that simplifies booking and...",
    tags: ["Cleaning Services", "App Development", "Convenience"],
    image: portfolio4,
    link: "/flexi-clean",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section py-12 lg:py-20 xl:py-24">
        
      <div className="container">
        <div className="mb-10 grid items-start gap-4 md:grid-cols-4 lg:mb-20">
          <div className="col-span-1">
            <p className="text-sm font-light md:text-base lg:text-xl">
              Portfolio
            </p>
          </div>
          <div className="col-span-2">
            <h2 className="max-w-full text-lg font-bold sm:text-xl md:text-2xl lg:max-w-[80%] lg:text-3xl xl:max-w-[60%] xl:text-4xl">
              <TypewriterText>
                We bring your boldest ideas to life
              </TypewriterText>
            </h2>
          </div>
          <div className="col-span-1 flex md:justify-end">
            <CustomButton href="/about" bgClassNames="group-hover:bg-[#3239FF]" textClassNames="group-hover:text-white">View all projects</CustomButton>
          </div>
        </div>
        <div className="grid-col-1 grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-12 lg:gap-16 lg:gap-x-20">
          {portfolio.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="portfolio-item group duration-300 ease-in-out group"
              scroll={!item.comingSoon}
            >
              <div className="img-wrap relative mb-4 overflow-hidden transition-all duration-200 rounded-lg">
                <Image
                  src={item.image}
                  width={812}
                  height={880}
                  alt="Portfolio Image"
                  className="group-hover:scale-110 transition-all duration-300"
                />
                {!item.comingSoon && (
                  <div className="absolute bottom-4 right-4 z-10 flex size-16 translate-y-full items-center justify-center rounded-full bg-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:bottom-8 md:right-8 md:size-20 xl:bottom-12 xl:right-12 xl:size-28">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="none"
                      viewBox="0 0 40 40"
                      className="size-6 md:size-8 lg:size-10"
                    >
                      <path
                        stroke="#fff"
                        strokeWidth="4"
                        d="M20 .8v38.4M39.2 20H.8"
                      ></path>
                    </svg>
                  </div>
                )}
                {item.comingSoon && (
                  <div className="absolute bottom-4 right-4 z-10 flex translate-y-full items-center justify-center rounded-full bg-primary px-6 py-3 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:bottom-8 md:right-8 xl:bottom-12 xl:right-12">
                    Coming Soon
                  </div>
                )}
              </div>
              <div className="portfolio-content md:p-6">
                <h4 className="mb-3 text-lg md:mb-6 md:text-xl lg:text-2xl xl:text-3xl">
                  {item.title}
                </h4>
                <p className="mb-4 text-xs font-light md:text-base lg:text-lg">
                  {item.description}
                </p>
                <div className="portfolio-tags hidden flex-wrap items-center gap-2 font-light md:flex md:gap-3 xl:gap-6">
                  {item.tags.map((tag, index) => (
                         <span key={index} className="group">
                         <span className="text-xs md:text-sm">{tag}</span>
                         <span className={`ml-4 hidden h-[5px] w-[5px] rounded-full bg-[#323639] align-middle  md:${index<2?"inline-block":"hidden"}`}></span>
                       </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
