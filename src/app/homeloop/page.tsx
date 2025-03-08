"use client";
import React from "react";
import CaseStudiesHeader from "../components/caseStudies/CaseStudiesHeader";
import homeloopScreenshot from "@images/homeloopscreenshot.webp";
import house from "@images/modern-residential-district-with-green-roof-balcony-generated-by-ai 2.webp";
import Image from "next/image";
import questions from "@images/questions.webp";
import caseStudySm from "@images/case-studies/homeloop.webp";
import Footer from "../partials/Footer";
import fleximg1 from "@images/flexImgs (1).webp";
import fleximg2 from "@images/flexImgs (2).png";
import fleximg3 from "@images/flexImgs (3).png";
import oldDesigns from "@images/oldDesigns (2).png";
import imgSection1 from "@images/image-section.webp";
import rotateImg1 from "@images/rotate (1).webp";
import rotateImg2 from "@images/rotate (5).png";
import rotateImg4 from "@images/rotate (4).webp";
import rotateImg3 from "@images/rotate (3).webp";
import personaImg from "@images/persona-img.webp";
import desirability from "@images/desirability(2).png";
import feasibility from "@images/feasibility(2).png";
import viability from "@images/viability (2).png";
import plus from "@images/plus.webp";
import portfolio2 from "@images/Rectangle 40615portfolio-1.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import portfolio4 from "@images/Rectangle 40615portfolio-2.webp";
import "swiper/css/autoplay";
import AosComponent from "../components/caseStudies/AosComponent";
import "aos/dist/aos.css";
import Link from "next/link";
import Questions from "../components/caseStudies/Questions";

export default function page() {
  const portfolio = [
    {
      title: "Pet shack",
      description:
        "An engaging app that connects pet owners with local pet services...",
      tags: ["Pet Care", "Mobile App", "User Engagement"],
      image: portfolio2,
      link: "/petshack-case-study",
      comingSoon: false,
    },
    {
      title: "Flexi Clean",
      description:
        "A revolutionary cleaning services app that simplifies booking and...",
      tags: ["Cleaning Services", "App Development", "Convenience"],
      image: portfolio4,
      link: "/flexi-clean",
      comingSoon: false,
    },
  ];
  return (
    <>
      <AosComponent />
      <CaseStudiesHeader />
      <section className="homeloop-bg">
        <div className="container pt-10 md:pt-40">
          <div className="grid grid-cols-1 gap-10 pb-20 pt-10 md:grid-cols-12 md:gap-0 md:pb-60 md:pt-40">
            <div className="md:col-span-2">
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                fill="none"
                viewBox="0 0 62 62"
              >
                <circle
                  cx="31"
                  cy="31"
                  r="30"
                  stroke="#fff"
                  strokeOpacity="0.15"
                ></circle>
                <path
                  fill="#fff"
                  d="M29.518 34.11l-2.294 2.097c-.157-.351-.27-.64-.409-.904-.651-1.28-1.929-1.947-3.215-1.684-1.408.29-2.381 1.412-2.503 2.904-.122 1.412.678 2.815 1.877 3.28.948.36 1.756.062 2.486-.579 2.668-2.342 5.353-4.666 8.012-7.017 2.486-2.194 6.136-2.062 8.413.324 2.329 2.439 2.364 6.21-.009 8.58-2.99 2.982-7.448 2.289-9.568-1.062-.339-.544-.417-.939.2-1.36.652-.447 1.208-1.026 1.868-1.596.365 1.017.643 1.982 1.617 2.535 1.338.745 2.92.474 3.884-.763.982-1.255.896-3.167-.19-4.325-1.096-1.167-2.669-1.36-3.894-.28-2.381 2.105-4.84 4.14-6.961 6.508-2.677 3-6.857 2.781-9.186.29-1.53-1.64-2.138-4.351-1.2-6.518 1.026-2.377 2.834-3.755 5.44-3.86 2.477-.105 4.642 1.228 5.632 3.448v-.018z"
                ></path>
                <path
                  fill="#fff"
                  d="M22.091 20.632c0 .778-.064 1.589.011 2.291.128 1.081-.203 1.87-1.231 2.216-2.206.746-2.784 2.335-2.41 4.475.011.087.033.173.065.443.503-.292.888-.497 1.263-.724 3.448-2.13 6.907-4.237 10.333-6.41.771-.486 1.317-.561 2.142-.032 3.03 1.956 6.125 3.816 9.198 5.718.782.475 1.563.94 2.538 1.524v-2.908c0-.302 0-.594-.418-.735l-11.286-7.1c-.792-.509-1.36-.53-2.142 0-1.606 1.08-3.276 2.042-5.032 3.112-.032-.735-.065-1.265-.097-1.87h-2.944.01z"
                ></path>
              </svg>
            </div>
            <div className="md:col-span-6">
              <h1 className="mb-2 text-3xl font-medium text-white md:mb-5 md:text-7xl">
                Homeloop
              </h1>
              <p className="mb-14 text-base font-light text-white md:text-xl">
                Transforming Homes, Connecting Dreams – A Case Study in
                Modernizing Home Services
              </p>
              <div className="flex gap-5">
                <div className="cursor-pointer rounded-full border-[1px] border-solid border-[#ffffff26] px-4 py-2 text-sm font-light text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
                  <span>STRATEGY</span>
                </div>
                <div className="cursor-pointer rounded-full border-[1px] border-solid border-[#ffffff26] px-4 py-2 text-sm font-light text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
                  <span>UX</span>
                </div>
                <div className="cursor-pointer rounded-full border-[1px] border-solid border-[#ffffff26] px-4 py-2 text-sm font-light text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
                  <span>UI</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-4">
              <p className="text-2xl font-medium text-white md:text-right">
                2023
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container grid grid-cols-1 gap-10 py-10 lg:grid-cols-12 lg:gap-32 lg:py-40">
        <div className="lg:col-span-4">
          <h4 className="mb-10 text-3xl font-light md:text-4xl">
            Project <span className="font-medium">Duration</span>
          </h4>
          <div className="mb-4 grid w-full grid-cols-2 text-2xl font-medium text-[#25396F] md:text-5xl">
            <p>08</p>
            <p>60+</p>
          </div>
          <div className="mb-4 grid grid-cols-2 text-sm font-light text-[#878C8E] md:text-base">
            <p>Weeks</p>
            <p>Screens</p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <h4 className="mb-10 text-3xl font-light md:text-4xl">
            <span className="font-medium">Tools </span>Used
          </h4>
          <div className="grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-8">
            <div>
              <svg
                className="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" fill="#1D1D1D" rx="6"></rect>
                <path
                  fill="#1ABCFE"
                  d="M30.002 29.999c0-3.732 3.085-6.757 6.891-6.757s6.892 3.025 6.892 6.757c0 3.732-3.086 6.757-6.892 6.757-3.806 0-6.891-3.025-6.891-6.757z"
                ></path>
                <path
                  fill="#0ACF83"
                  d="M16.217 43.515c0-3.732 3.085-6.757 6.891-6.757H30v6.757c0 3.731-3.086 6.756-6.892 6.756-3.806 0-6.891-3.025-6.891-6.756z"
                ></path>
                <path
                  fill="#FF7262"
                  d="M30.002 9.73v13.514h6.891c3.806 0 6.892-3.025 6.892-6.757 0-3.731-3.086-6.757-6.892-6.757h-6.891z"
                ></path>
                <path
                  fill="#F24E1E"
                  d="M16.217 16.487c0 3.732 3.085 6.757 6.891 6.757H30V9.73h-6.892c-3.806 0-6.891 3.026-6.891 6.757z"
                ></path>
                <path
                  fill="#A259FF"
                  d="M16.217 29.999c0 3.732 3.085 6.757 6.891 6.757H30V23.242h-6.892c-3.806 0-6.891 3.025-6.891 6.757z"
                ></path>
              </svg>
              <p className="text-[#878C8E]">Figma</p>
            </div>

            <div>
              <svg
                className="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 60 60"
              >
                <path
                  fill="#1A57E6"
                  d="M49.375 0h-38.75C4.757 0 0 4.879 0 10.897v38.206C0 55.12 4.757 60 10.625 60h38.75C55.243 60 60 55.121 60 49.103V10.897C60 4.88 55.243 0 49.375 0z"
                ></path>
                <g clipPath="url(#clip0_0_9766)">
                  <mask
                    id="mask0_0_9766"
                    style={{ maskType: "luminance" }}
                    width="30"
                    height="30"
                    x="15"
                    y="15"
                    maskUnits="userSpaceOnUse"
                  >
                    <path fill="#fff" d="M15 15h30v30H15V15z"></path>
                  </mask>
                  <g
                    fill="#fff"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    mask="url(#mask0_0_9766)"
                  >
                    <path d="M22.215 38.921h10.8c2.456 0 4.796-1.986 5.23-4.444L40.07 24.11h1.2c2.444 0 4.092 1.99 3.66 4.445l-2.116 12C42.38 43.008 40.04 45 37.585 45h-12c-2.455 0-4.093-2-3.66-4.444l.29-1.634z"></path>
                    <path d="M18.731 35.889h12c2.445 0 4.793-1.991 5.227-4.445l2.115-12C38.507 16.99 36.87 15 34.413 15h-12c-2.453 0-4.795 1.989-5.229 4.444l-2.115 12c-.433 2.446 1.207 4.446 3.661 4.446l.001-.001zm10.088-10.14c1.127-.619 2.618-1.438 2.973-3.552.423-2.56-1.772-4.502-4.142-4.497-2.235 0-3.83.959-5.252 2.668-.257.31-.265.735-.016.963l1.042.959c.254.23.675.177.952-.122.853-.92 1.461-1.449 2.554-1.449.86 0 1.822.58 1.676 1.454-.11.667-.687 1-1.62 1.5-.027.016-.055.03-.084.046-1.074.576-2.44 1.308-2.737 3.074l-.047.287a.603.603 0 00.112.483c.052.066.118.12.192.156a.528.528 0 00.237.054h2.023a.813.813 0 00.514-.206.886.886 0 00.28-.497l.028-.167c.08-.474.63-.777 1.316-1.153v-.001zM24.852 32.7c1.066 0 2.087-.91 2.274-2.03.19-1.12-.522-2.03-1.588-2.03-1.065 0-2.08.909-2.274 2.03-.193 1.12.523 2.03 1.588 2.03z"></path>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_0_9766">
                    <path
                      fill="#fff"
                      d="M0 0H30V30H0z"
                      transform="translate(15 15)"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-[#878C8E]">Userflow</p>
            </div>

            <div>
              <svg
                className="mb-4"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 60 60"
              >
                <path
                  fill="#300"
                  d="M49.375 0h-38.75C4.757 0 0 4.879 0 10.897v38.206C0 55.12 4.757 60 10.625 60h38.75C55.243 60 60 55.121 60 49.103V10.897C60 4.88 55.243 0 49.375 0z"
                ></path>
                <path
                  fill="#FF9A00"
                  d="M29.074 36.011h-9.298l-1.891 6.027a.487.487 0 01-.177.275.465.465 0 01-.306.097h-4.71c-.268 0-.362-.152-.281-.454l8.05-23.779c.08-.247.16-.53.241-.846.106-.551.16-1.11.161-1.672a.262.262 0 01.07-.217.249.249 0 01.212-.072h6.4c.187 0 .295.069.322.206l9.137 26.42c.08.276 0 .414-.242.414h-5.233a.365.365 0 01-.254-.067.382.382 0 01-.148-.222l-2.053-6.11zm-7.849-5.202h6.36c-.161-.55-.349-1.169-.564-1.857-.215-.688-.443-1.424-.684-2.209l-.724-2.353a80.566 80.566 0 01-.664-2.27c-.202-.73-.383-1.397-.544-2.003h-.04a34.058 34.058 0 01-.845 3.303c-.376 1.238-.759 2.504-1.147 3.798-.39 1.294-.772 2.491-1.148 3.591zM42.445 19.746c-.411.017-.82-.055-1.202-.212a2.915 2.915 0 01-1.012-.697 3.279 3.279 0 01-.652-1.09 3.341 3.341 0 01-.194-1.262 3.1 3.1 0 01.215-1.245c.156-.395.392-.752.691-1.047.297-.292.647-.52 1.03-.673a3.041 3.041 0 011.204-.214c.966 0 1.724.296 2.274.887.278.308.494.668.635 1.062.142.393.206.81.19 1.23.017.431-.05.862-.2 1.266a3.237 3.237 0 01-.665 1.086 3.08 3.08 0 01-1.065.703 3.019 3.019 0 01-1.25.206zm-2.778 22.25V22.265c0-.248.107-.372.322-.372h4.951c.215 0 .322.124.322.372v19.733c0 .275-.107.413-.322.413h-4.91c-.242 0-.363-.138-.363-.413z"
                ></path>
              </svg>
              <p className="text-[#878C8E]">AI</p>
            </div>

            <div>
              <svg
                className="mb-4"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 60 60"
              >
                <path
                  fill="#001E36"
                  d="M49.375 0h-38.75C4.757 0 0 4.879 0 10.897v38.206C0 55.12 4.757 60 10.625 60h38.75C55.243 60 60 55.121 60 49.103V10.897C60 4.88 55.243 0 49.375 0z"
                ></path>
                <path
                  fill="#31A8FF"
                  d="M13.51 42.073V15.694c0-.192.08-.289.241-.289.43 0 .82-.006 1.411-.02a788.872 788.872 0 014.086-.083c.764-.014 1.522-.02 2.274-.02 2.039 0 3.756.26 5.152.784a8.903 8.903 0 013.36 2.105 8.1 8.1 0 011.832 2.91 9.873 9.873 0 01.564 3.324c0 2.202-.497 4.018-1.49 5.449a8.44 8.44 0 01-4.025 3.117c-1.69.647-3.569.866-5.635.866-.59 0-1.006-.007-1.247-.02-.242-.014-.604-.021-1.087-.021v8.236a.337.337 0 01-.09.279.32.32 0 01-.272.093H13.79c-.188 0-.281-.11-.281-.33zm5.436-21.714v8.604c.348.027.67.041.966.041h1.328a9.221 9.221 0 002.878-.471 4.33 4.33 0 002.053-1.363c.523-.632.785-1.513.785-2.642a4.258 4.258 0 00-.584-2.27 3.776 3.776 0 00-1.751-1.466 7.293 7.293 0 00-2.938-.516c-.644 0-1.214.007-1.71.021-.498.014-.84.035-1.027.062zM47.992 27.398a9.258 9.258 0 00-2.395-.867 12.413 12.413 0 00-2.797-.33 5.08 5.08 0 00-1.51.185 1.352 1.352 0 00-.784.516c-.131.21-.201.453-.201.702.007.241.092.474.241.66.235.283.523.514.845.682.574.317 1.166.6 1.771.846a17.366 17.366 0 013.844 1.878 5.934 5.934 0 011.972 2.126c.4.82.6 1.726.584 2.642a6.046 6.046 0 01-.966 3.406 6.385 6.385 0 01-2.797 2.291c-1.222.55-2.73.826-4.528.826a15.97 15.97 0 01-3.401-.33 10.654 10.654 0 01-2.556-.826.545.545 0 01-.282-.495V36.85a.247.247 0 01.1-.227.191.191 0 01.222.02 10.6 10.6 0 003.1 1.26c.96.247 1.947.379 2.937.392.94 0 1.63-.124 2.073-.371.2-.094.37-.246.487-.436.118-.19.18-.412.177-.638 0-.357-.2-.701-.603-1.032-.403-.33-1.221-.73-2.456-1.197a14.66 14.66 0 01-3.562-1.858 6.25 6.25 0 01-1.892-2.167 5.815 5.815 0 01-.583-2.622 6.032 6.032 0 01.845-3.096 6.193 6.193 0 012.616-2.353c1.18-.605 2.657-.907 4.428-.908a19.112 19.112 0 013.1.227 7.966 7.966 0 012.157.599.365.365 0 01.241.227c.028.1.041.205.04.31v4.169a.283.283 0 01-.12.248.382.382 0 01-.347 0z"
                ></path>
              </svg>
              <p className="text-[#878C8E]">PS</p>
            </div>

            <div>
              <svg
                className="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                fill="none"
                viewBox="0 0 62 62"
              >
                <rect
                  width="60"
                  height="60"
                  x="1"
                  y="1"
                  fill="#fff"
                  stroke="#EBEFF6"
                  strokeWidth="1.5"
                  rx="6"
                ></rect>
                <path
                  fill="#E01E5A"
                  d="M21.337 35.396a3.51 3.51 0 01-3.502 3.502 3.51 3.51 0 01-3.501-3.502 3.51 3.51 0 013.501-3.501h3.502v3.501zM23.1 35.396a3.51 3.51 0 013.502-3.501 3.51 3.51 0 013.501 3.501v8.768a3.51 3.51 0 01-3.501 3.502 3.51 3.51 0 01-3.502-3.502v-8.768z"
                ></path>
                <path
                  fill="#36C5F0"
                  d="M26.602 21.335a3.51 3.51 0 01-3.502-3.501 3.51 3.51 0 013.502-3.502 3.51 3.51 0 013.501 3.502v3.501h-3.501zM26.603 23.1a3.51 3.51 0 013.501 3.501 3.51 3.51 0 01-3.501 3.502h-8.768a3.51 3.51 0 01-3.501-3.502 3.51 3.51 0 013.501-3.501h8.768z"
                ></path>
                <path
                  fill="#2EB67D"
                  d="M40.663 26.601a3.51 3.51 0 013.502-3.501 3.51 3.51 0 013.501 3.501 3.51 3.51 0 01-3.501 3.502h-3.502V26.6zM38.9 26.601a3.51 3.51 0 01-3.502 3.502 3.51 3.51 0 01-3.501-3.502v-8.767a3.51 3.51 0 013.501-3.502 3.51 3.51 0 013.502 3.502V26.6z"
                ></path>
                <path
                  fill="#ECB22E"
                  d="M35.398 40.662a3.51 3.51 0 013.502 3.502 3.51 3.51 0 01-3.502 3.502 3.51 3.51 0 01-3.501-3.502v-3.502h3.501zM35.398 38.898a3.51 3.51 0 01-3.501-3.502 3.51 3.51 0 013.501-3.501h8.768a3.51 3.51 0 013.501 3.501 3.51 3.51 0 01-3.501 3.502h-8.768z"
                ></path>
              </svg>
              <p className="text-[#878C8E]">Slack</p>
            </div>

            <div>
              <svg
                className="mb-3"
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="60"
                  height="60"
                  rx="6"
                  fill="white"
                  stroke="#EBEFF6"
                  strokeWidth="1.5"
                />
                <path
                  d="M45.1673 14.332H16.834C15.4533 14.332 14.334 15.4513 14.334 16.832V45.1654C14.334 46.5461 15.4533 47.6654 16.834 47.6654H45.1673C46.548 47.6654 47.6673 46.5461 47.6673 45.1654V16.832C47.6673 15.4513 46.548 14.332 45.1673 14.332Z"
                  fill="#FFD02F"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.9955 18.5H33.3362L36.3866 23.8569L29.6789 18.5H26.0197L29.3745 25.0484L22.3624 18.5H18.7031L22.3624 26.8327L18.7031 43.5H22.3624L29.3745 25.6431L26.0197 43.5H29.6789L36.3866 24.4516L33.3362 43.5H36.9955L43.7031 22.6673L36.9955 18.5Z"
                  fill="#050038"
                />
              </svg>

              <p className="text-[#878C8E]">Miro</p>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="74"
                fill="none"
                viewBox="0 0 72 74"
              >
                <rect
                  width="60"
                  height="60"
                  x="6"
                  y="1"
                  fill="#fff"
                  stroke="#EBEFF6"
                  strokeWidth="1.5"
                  rx="6"
                ></rect>
                <g filter="url(#filter0_d_0_9803)">
                  <path
                    fill="#fff"
                    d="M44.667 14.332H27.334a8 8 0 00-8 8v17.333a8 8 0 008 8h17.333a8 8 0 008-8V22.332a8 8 0 00-8-8z"
                  ></path>
                  <path
                    fill="url(#paint0_linear_0_9803)"
                    fillRule="evenodd"
                    d="M26.236 37.19l3.605-2.76c1.915 2.5 3.948 3.65 6.213 3.65 2.253 0 4.23-1.138 6.058-3.617l3.655 2.695c-2.637 3.575-5.917 5.464-9.713 5.464-3.784 0-7.095-1.876-9.818-5.431z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="url(#paint1_linear_0_9803)"
                    fillRule="evenodd"
                    d="M36.042 25.189l-6.416 5.529-2.964-3.44 9.393-8.094 9.32 8.1-2.978 3.427-6.355-5.522z"
                    clipRule="evenodd"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_d_0_9803"
                    width="71.734"
                    height="71.734"
                    x="0.134"
                    y="1.532"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="6.4"></feOffset>
                    <feGaussianBlur stdDeviation="9.6"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.117647 0 0 0 0 0.211765 0 0 0 0.1 0"></feColorMatrix>
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_0_9803"
                    ></feBlend>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_0_9803"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <linearGradient
                    id="paint0_linear_0_9803"
                    x1="26.236"
                    x2="45.767"
                    y1="40.001"
                    y2="40.001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8930FD"></stop>
                    <stop offset="1" stopColor="#49CCF9"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_9803"
                    x1="26.662"
                    x2="45.375"
                    y1="27.027"
                    y2="27.027"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF02F0"></stop>
                    <stop offset="1" stopColor="#FFC800"></stop>
                  </linearGradient>
                </defs>
              </svg>

              <p className="text-[#878C8E]">ClickUp</p>
            </div>

            <div>
              <svg
                className="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                fill="none"
                viewBox="0 0 62 62"
              >
                <rect
                  width="60"
                  height="60"
                  x="1"
                  y="1"
                  fill="#300"
                  stroke="#EBEFF6"
                  strokeWidth="1.5"
                  rx="6"
                ></rect>
                <g clipPath="url(#clip0_0_9812)">
                  <path
                    fill="#fff"
                    d="M48.532 26.87a9.963 9.963 0 00-.857-8.184 10.077 10.077 0 00-10.854-4.835 9.964 9.964 0 00-7.516-3.35 10.078 10.078 0 00-9.614 6.977 9.97 9.97 0 00-6.663 4.834 10.08 10.08 0 001.24 11.817 9.967 9.967 0 00.856 8.185 10.078 10.078 0 0010.854 4.835 9.965 9.965 0 007.516 3.35 10.078 10.078 0 009.617-6.981 9.967 9.967 0 006.664-4.834 10.079 10.079 0 00-1.243-11.813zM33.497 47.886A7.474 7.474 0 0128.7 46.15c.06-.033.167-.091.236-.134l7.965-4.6a1.294 1.294 0 00.654-1.133V29.053l3.367 1.944a.12.12 0 01.065.092v9.299a7.505 7.505 0 01-7.489 7.496zm-16.105-6.879a7.47 7.47 0 01-.895-5.023c.06.036.163.099.237.141l7.964 4.6a1.297 1.297 0 001.309 0l9.723-5.614v3.888a.12.12 0 01-.048.103l-8.051 4.649a7.504 7.504 0 01-10.24-2.744zM15.296 23.62a7.469 7.469 0 013.902-3.286c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 00.654 1.132l9.724 5.614-3.367 1.944a.12.12 0 01-.113.01l-8.052-4.652a7.504 7.504 0 01-2.744-10.237zm27.658 6.437L33.23 24.44l3.367-1.943a.121.121 0 01.113-.01l8.052 4.648a7.498 7.498 0 01-1.158 13.528v-9.476a1.293 1.293 0 00-.65-1.132zm3.35-5.043c-.058-.037-.162-.099-.236-.141l-7.964-4.6a1.298 1.298 0 00-1.308 0l-9.724 5.614v-3.888a.12.12 0 01.048-.103l8.051-4.645a7.498 7.498 0 0111.134 7.763zm-21.062 6.929l-3.367-1.944a.12.12 0 01-.066-.092v-9.299a7.497 7.497 0 0112.294-5.756c-.061.033-.167.091-.237.134l-7.964 4.6a1.294 1.294 0 00-.655 1.133l-.005 11.224zm1.828-3.943l4.331-2.501 4.33 2.5v5l-4.33 2.5-4.33-2.5V28z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_0_9812">
                    <path
                      fill="#fff"
                      d="M0 0H41V41H0z"
                      transform="translate(11 10)"
                    ></path>
                  </clipPath>
                </defs>
              </svg>

              <p className="text-[#878C8E]">ChatGPT</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-10 grid grid-cols-1 md:my-32 md:grid-cols-2 ">
        <div className="col-span-1">
          <h2 className="mb-5 max-w-full text-xl font-medium leading-normal md:max-w-sm md:pr-20 md:text-3xl">
            Strategy <br className="hidden md:block" /> User Experience Design
            Motion
          </h2>
        </div>
        <div className="col-span-1">
          <p className="text-base font-light leading-normal text-[878C8E] md:text-xl">
            In the dynamic landscape of home services, Homeloop stands as a
            beacon of innovation, redefining the way property owners and
            professionals connect and collaborate.
          </p>
        </div>
      </section>

      <section className="montain-bg relative">
        <div className="container">
          <Image
            className="w-[70%]"
            width={1090}
            height={700}
            src={homeloopScreenshot}
            alt="App Screenshots"
            data-aos="fade-right"
          />
          <Image
            className="absolute -bottom-4 right-0 w-[30%] sm:-bottom-8 xl:-bottom-24"
            width={605}
            height={629}
            src={house}
            alt="App Screenshots"
            data-aos="fade-left"
          />
        </div>
      </section>
      <section className="bg-[#17191B] py-10 md:py-40">
        <div className="container">
          <div className="mb-5 text-white md:mb-20 ">
            <h2 className="mb-5  text-xl font-semibold lg:text-7xl">
              Opportunity
            </h2>
            <p className=" text-xs font-light lg:text-xl">
              Homeloop emerges at a pivotal moment in the home services
              industry, where the convergence of technological advancements and
              evolving consumer expectations presents a unique opportunity for
              innovation. With traditional methods of sourcing home services
              proving increasingly inefficient and fragmented, Homeloop steps in
              to bridge the gap, offering a comprehensive solution that
              redefines the way property owners and professionals connect. The
              opportunity lies in creating a unified platform that not only
              streamlines the process of finding and hiring service
              professionals but also fosters a sense of community and
              collaboration among users. By leveraging technology to enhance
              transparency, efficiency, and trust in the home services
              ecosystem, Homeloop has the potential to revolutionize the way we
              engage with our homes, paving the way for a more seamless and
              satisfying experience for all stakeholders involved.
            </p>
          </div>
          <div className="mx-auto max-w-[1350px]">
            <Questions
              img1={desirability}
              img2={feasibility}
              img3={viability}
              details={[
                {
                  heading: "Question?",
                  description: "What is the primary goal of Homeloop?",
                },
                {
                  heading: "Question?",
                  description:
                    "How does Homeloop foster communication between property owners and service professionals?",
                },
                {
                  heading: "Question?",
                  description:
                    "What measures does Homeloop take to ensure the reliability of the professionals listed on the platform?",
                },
              ]}
            />
          </div>
        </div>
 
      </section>
      <section className="background-house my-10 md:my-20">
        <Image
          width={1275}
          height={1038}
          src={imgSection1}
          alt="house"
          className="ml-auto w-[65%]"
        />
      </section>
      <section className="container my-10 md:my-20">
        <div className="grid grid-cols-3 gap-5">
          <Image
            width={540}
            height={342}
            src={fleximg1}
            alt=""
            data-aos="flip-up"
          />
          <Image
            width={630}
            height={398}
            src={fleximg2}
            alt=""
            data-aos-delay={400}
            data-aos="flip-up"
          />

          <Image
            src={fleximg3}
            width={540}
            height={342}
            alt=""
            data-aos-delay={800}
            data-aos="flip-up"
          />
        </div>
      </section>
      <section className="user-persona-bg py-20">
        <div className="container">
          <div className="mb-5 flex flex-col text-white lg:mb-20 lg:flex-row">
            <h2 className="mb-5 flex-1 text-xl font-semibold lg:text-7xl">
              User Persona
            </h2>
            <p className="flex-1 text-base font-light lg:text-xl">
              The primary objective of this content brief is to provide guidance
              for creating engaging and informative content related to the
              Homeloop project. The content should highlight the features,
              benefits, and value proposition of the platform, targeting both
              property owners and professional service providers.
            </p>
          </div>
          <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-2 xl:gap-0">
            <div className="relative h-[500px] w-full md:h-[850px]">
              <Image
                fill
                src={personaImg}
                alt="persona"
                data-aos="fade-right"
              />
            </div>
            <div className="z-30 xl:-ml-20" data-aos="fade-left">
              <div className="mb-4 rounded-md bg-white px-5 py-4">
                <h3 className="mb-2 text-xl font-normal">Sarah</h3>
              </div>
              <div className="mb-4 rounded-md bg-white px-5 py-4">
                <ul className="mx-4 text-sm">
                  <li className="flex items-baseline gap-2">
                    <Image width={8} height={8} src={plus} alt="plus" />
                    Sarah is a 35-year-old homeowner living in a suburban
                    neighborhood. She works full-time and leads a busy life,
                    juggling work responsibilities with family commitments.
                    Sarah takes pride in her home and wants to ensure it is
                    well-maintained and reflects her personal style. However,
                    she often finds it challenging to manage various
                    home-related tasks due to her hectic schedule.
                  </li>
                </ul>
              </div>
              <div className="mb-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="rounded-md bg-white px-5 py-4">
                  <h3 className="mb-2 text-xl font-normal">Challenges</h3>
                  <ul className="mx-4 text-sm">
                    <li className="flex items-baseline gap-2">
                      <Image width={8} height={8} src={plus} alt="plus" />
                      Sarah&apos;s busy schedule makes it challenging for her to
                      devote time to researching and coordinating home service
                      providers.
                    </li>
                    <li className="my-2 flex items-baseline gap-2">
                      <Image width={8} height={8} src={plus} alt="plus" />
                      With so many options available, Sarah often feels
                      overwhelmed when trying to choose the right service
                      professional for her needs.
                    </li>
                    <li className="flex items-baseline gap-2">
                      <Image width={8} height={8} src={plus} alt="plus" />
                      Sarah has had negative experiences in the past with
                      service professionals who failed to deliver on their
                      promises, leading to trust issues when hiring new
                      providers.
                    </li>
                  </ul>
                </div>
                <div className="rounded-md bg-white px-5 py-4">
                  <h3 className="mb-2 text-xl font-normal">
                    How Homeloop Helps
                  </h3>
                  <ul className="mx-4 list-disc text-sm">
                    <li className="flex items-baseline gap-2">
                      <Image width={8} height={8} src={plus} alt="plus" />
                      Homeloop simplifies the process of finding and hiring
                      service professionals by providing a centralized platform
                      where Sarah can browse through verified professionals,
                      compare quotes, and book services with ease.
                    </li>
                    <li className="my-2 flex items-baseline gap-2">
                      <Image width={8} height={8} src={plus} alt="plus" />
                      Homeloop&apos;s rigorous vetting process ensures that
                      Sarah can hire service professionals with confidence,
                      knowing that they have been thoroughly screened and
                      verified by the platform.
                    </li>
                    <li className="flex items-baseline gap-2">
                      <Image width={8} height={8} src={plus} alt="plus" />
                      Homeloop provides upfront pricing information for
                      different services, allowing Sarah to make informed
                      decisions based on her budget and preferences.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-md bg-white px-5 py-4">
                <h3 className="mb-2 text-xl font-normal"> Outcome</h3>
                <ul>
                  <li className="mx-4 flex items-baseline gap-2 text-sm">
                    <Image width={8} height={8} src={plus} alt="plus" />
                    With Homeloop, Sarah can finally take the stress out of
                    managing her home by easily finding and hiring trusted
                    professionals for all her home service needs. The
                    platform&apos;s user-friendly interface, transparent
                    pricing, and reliable communication tools empower Sarah to
                    maintain her home without sacrificing precious time or peace
                    of mind.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10 lg:my-40">
        <div className="container">
          <div className="mb-5 flex flex-col text-black lg:mb-20 lg:flex-row">
            <h2 className="mb-5 flex-1 text-xl font-semibold lg:text-7xl">
              Old Design
            </h2>
            <p className="flex-1 text-base font-light lg:text-xl">
              The initial design of the Homeloop platform was crafted with a
              focus on simplicity, functionality, and user experience. The
              design aimed to create an intuitive and seamless experience for
              both property owners and professional service providers,
              facilitating efficient communication and collaboration.
            </p>
          </div>
          <div className="my-10 grid grid-cols-1 items-center gap-10 lg:my-40 lg:grid-cols-3">
            <div className="flex flex-col gap-10" data-aos="fade-down">
              <Image
                src={oldDesigns}
                width={580}
                height={336}
                alt="Old designs"
                className="w-full"
              />

              <Image
                src={oldDesigns}
                width={580}
                height={336}
                alt="Old designs"
                className="w-full"
              />

              <Image
                src={oldDesigns}
                width={580}
                height={336}
                alt="Old designs"
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-10" data-aos="fade-up">
              <Image
                src={oldDesigns}
                width={580}
                height={336}
                alt="Old designs"
                className="w-full"
              />

              <Image
                src={oldDesigns}
                width={580}
                height={336}
                alt="Old designs"
                className="w-full"
              />

              <Image
                src={oldDesigns}
                width={580}
                height={336}
                alt="Old designs"
                className="w-full"
              />

              <Image
                src={oldDesigns}
                width={580}
                height={336}
                alt="Old designs"
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-10" data-aos="fade-down">
              <Image
                src={oldDesigns}
                width={580}
                height={336}
                alt="Old designs"
                className="w-full"
              />
              <Image
                src={oldDesigns}
                width={580}
                height={336}
                alt="Old designs"
                className="w-full"
              />

              <Image
                src={oldDesigns}
                width={580}
                height={336}
                alt="Old designs"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#17191B] pt-10 md:pt-40">
        <div className="container">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 0 }}
            speed={2000}
            loop={true}
            className="border-b-solid border-b-[1px] border-b-[#ffffff33]"
          >
            <SwiperSlide className="whitespace-nowrap text-center text-5xl font-medium text-white md:text-9xl lg:text-[200px]">
              NEW UI DESIGN
            </SwiperSlide>
            <SwiperSlide className="whitespace-nowrap text-center text-5xl font-medium text-white md:text-9xl lg:text-[200px]"></SwiperSlide>
            <SwiperSlide className="whitespace-nowrap text-center text-5xl font-medium text-white md:text-9xl lg:text-[200px]">
              NEW UI DESIGN
            </SwiperSlide>
            <SwiperSlide className="whitespace-nowrap text-center text-5xl font-medium text-white md:text-9xl lg:text-[200px]"></SwiperSlide>
          </Swiper>
        </div>
        <div data-aos="fade-down-right" className="w-full overflow-hidden">
          <div className="mt-10 grid -rotate-[15deg] grid-cols-1 gap-5 md:mt-40 md:grid-cols-3">
            <div className="w-full md:mt-32">
              <Image
                src={rotateImg2}
                width={1339.91}
                height={859.14}
                alt="Rotate image"
                objectPosition="right"
                className="mb-5 w-full"
              />
              <Image
                src={rotateImg2}
                width={1339.91}
                height={859.14}
                alt="Rotate image"
                objectPosition="right"
                className="w-full"
              />
            </div>
            <div className="w-full">
              <Image
                src={rotateImg1}
                alt="Rotate image"
                width={1339.91}
                height={859.14}
                className="mb-5 w-full"
              />
              <Image
                src={rotateImg3}
                width={1339.91}
                height={859.14}
                alt="Rotate image"
                objectPosition="right"
                className="mb-5 w-full"
              />
              <Image
                src={rotateImg2}
                width={1339.91}
                height={859.14}
                alt="Rotate image"
                objectPosition="right"
                className="w-full"
              />
            </div>
            <div className="w-full md:mt-32">
              <Image
                src={rotateImg4}
                width={1339.91}
                height={859.14}
                alt="Rotate image"
                objectPosition="right"
                className="mb-5 w-full"
              />
              <Image
                src={rotateImg3}
                width={1339.91}
                height={859.14}
                alt="Rotate image"
                objectPosition="right"
                className="mb-5 w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="z-10 bg-[#F3F7FF] py-32">
        <div className="container">
          <h2 className="mb-10 text-3xl font-medium md:text-7xl">
            Recent Work
          </h2>
          <div className="grid-col-1 grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-12 lg:gap-16 lg:gap-x-20">
            {portfolio.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="portfolio-item group group duration-300 ease-in-out lg:odd:mt-24"
                scroll={!item.comingSoon}
              >
                <div className="img-wrap relative mb-4 overflow-hidden rounded-lg transition-all duration-200">
                  <Image
                    src={item.image}
                    width={812}
                    height={880}
                    alt="Portfolio Image"
                    className="transition-all duration-300 group-hover:scale-110"
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
                        <span
                          className={`ml-4 hidden h-[5px] w-[5px] rounded-full bg-[#323639] align-middle  md:${index < 2 ? "inline-block" : "hidden"}`}
                        ></span>
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
