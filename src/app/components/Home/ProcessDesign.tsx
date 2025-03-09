import { Button } from "@/components/ui/button";
import { CustomButton } from "../theme";
import AnimatedTitleOnScroll from "./AnimatedTitleOnScroll";
import Link from "next/link";
import HolographicEarth from "../HolographicEarth";

export default function ProcessDesign() {
  return (
    <section className="process-section relative overflow-hidden bg-primary pt-12 text-white lg:pt-20 xl:pt-24 2xl:pt-32">
      {/* <div className="top-1/2 left-1/2 z-10 absolute flex justify-center items-start md:items-center w-full h-full -translate-x-1/2 -translate-y-1/2">
        <HolographicEarth />
      </div> */}
      <div className="container relative z-20">
        <div className="my-14 grid grid-cols-1 items-start gap-4 md:grid-cols-4">
          <div className="col-span-1">
            <p className="text-sm font-light !leading-9 md:text-base lg:text-xl">
              Our Tech Stack
            </p>
          </div>
          <div className="col-span-2 hidden pt-12 md:block">
            <AnimatedTitleOnScroll leftText="Technology" rightText="Stack" />
          </div>
          <div className="col-span-2  md:hidden">
            <p className="text-xl font-bold">Technology Stack</p>
          </div>
        </div>
        <div className="grid-items-start grid pt-12 text-black md:grid-cols-2 md:text-white lg:grid-cols-3 lg:pt-20 xl:pt-24 2xl:pt-32">
          <div className="group relative  z-[1] overflow-hidden border-b border-solid border-white border-b-primary px-6 py-8 transition-all duration-300 ease-in-out hover:text-black md:border-b-0 md:border-r">
            <div className="absolute inset-0 -z-[1] bg-white transition-all delay-150 duration-300 group-hover:translate-y-0 md:translate-y-full"></div>
            <h4 className="mb-6 text-xl lg:text-2xl xl:text-3xl">HTML</h4>
            <Link
              href="#"
              className="mb-6 block max-w-fit group-hover:opacity-100 md:opacity-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 50 50"
              >
                <circle cx="25" cy="25" r="25" fill="#17191B"></circle>
                <path stroke="#fff" d="M24.928 21L24.928 29"></path>
                <path stroke="#fff" d="M29 24.929L21 24.929"></path>
              </svg>
            </Link>
            <p className="font-light group-hover:text-[#878C8E] group-hover:opacity-100 md:opacity-0">
              HTML (HyperText Markup Language) is the standard language for
              creating and structuring web pages, using elements like headings,
              paragraphs, links, and images to build the foundation of a
              website.
            </p>
          </div>
          <div className="group relative z-[1] overflow-hidden border-b border-solid border-white border-b-primary px-6 py-8 transition-all duration-300 ease-in-out hover:text-black md:border-b-0 md:border-r">
            <div className="absolute inset-0 -z-[1] bg-white transition-all duration-300 group-hover:translate-y-0 md:translate-y-full"></div>
            <h4 className="mb-6 text-xl lg:text-2xl xl:text-3xl">CSS</h4>
            <Link
              href="#"
              className="mb-6 block max-w-fit group-hover:opacity-100 md:opacity-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 50 50"
              >
                <circle cx="25" cy="25" r="25" fill="#17191B"></circle>
                <path stroke="#fff" d="M24.928 21L24.928 29"></path>
                <path stroke="#fff" d="M29 24.929L21 24.929"></path>
              </svg>
            </Link>
            <p className="font-light group-hover:text-[#878C8E] group-hover:opacity-100 md:opacity-0">
              CSS (Cascading Style Sheets) is a styling language used to design
              and enhance web pages by controlling layout, colors, fonts, and
              responsiveness.
            </p>
          </div>
          <div className="group relative z-[1] overflow-hidden border-b border-solid border-white border-b-primary px-6 py-8 transition-all duration-300 ease-in-out hover:text-black md:border-b-0 md:border-r">
            <div className="absolute inset-0 -z-[1] bg-white transition-all delay-150 duration-300 group-hover:translate-y-0 md:translate-y-full"></div>
            <h4 className="mb-8 text-xl lg:text-2xl xl:text-3xl">Javascript</h4>
            <Link
              href="#"
              className="mb-6 block max-w-fit group-hover:opacity-100 md:opacity-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 50 50"
              >
                <circle cx="25" cy="25" r="25" fill="#17191B"></circle>
                <path stroke="#fff" d="M24.928 21L24.928 29"></path>
                <path stroke="#fff" d="M29 24.929L21 24.929"></path>
              </svg>
            </Link>
            <p className="font-light group-hover:text-[#878C8E] group-hover:opacity-100 md:opacity-0">
              JavaScript is a versatile programming language that adds
              interactivity, dynamic behavior, and functionality to web pages,
              making them more engaging and user-friendly.
            </p>
          </div>
          {/* <div className="group relative z-[1] mb-10 overflow-hidden border-white px-6 py-8 transition-all duration-300 ease-in-out hover:text-black sm:border-solid md:mb-0 md:border-r lg:border-none">
            <div className="absolute inset-0 -z-[1] bg-white transition-all delay-150 duration-300 group-hover:translate-y-0 md:translate-y-full"></div>
            <h4 className="mb-8 text-xl lg:text-2xl xl:text-3xl">
              Web & App Development
            </h4>
            <Link
              href="#"
              className="mb-6 block max-w-fit group-hover:opacity-100 md:opacity-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 50 50"
              >
                <circle cx="25" cy="25" r="25" fill="#17191B"></circle>
                <path stroke="#fff" d="M24.928 21L24.928 29"></path>
                <path stroke="#fff" d="M29 24.929L21 24.929"></path>
              </svg>
            </Link>
            <p className="font-light group-hover:text-[#878C8E] group-hover:opacity-100 md:opacity-0">
              We build robust and scalable web and mobile applications,
              providing exceptional user experiences with the latest
              technologies.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
