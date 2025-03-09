import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { CustomButton } from "@/app/components/theme";
import TextContent from "./components/Home/TextContent";
import Achievements from "./components/Home/Achievements";
import ProcessDesign from "./components/Home/ProcessDesign";
import AnimatedTitleOnScroll from "./components/Home/AnimatedTitleOnScroll";
import Portfolio from "./components/Home/Portfolio";
import AosComponent from "./components/caseStudies/AosComponent";
import "aos/dist/aos.css";
import LogosSection from "./components/Home/LogosSection";
import FeaturedVideo from "@/app/components/Home/FeaturedVideo";
import TypewriterText from "@/app/components/TypewriterText";
import AchievementsBgAnimation from "@/app/components/Home/AchievementsBgAnimation";
import Testimonials2 from "./components/Home/Testimonials2";
import ourNumberSpeaks from "@images/our numbers speaks.svg";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import designProcess from "@images/Design sourcing optimized.svg";
import logo from "@images/sliderImage.png";
import logo2 from "@images/logo2.png";
import us from "@images/US.jpg"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Hero from "./components/Home/Hero";
import DesignSteps from "./components/Home/DesignSteps";
import TestimonialBgAnimation from "./components/Home/TestimonialBgAnimation";
import StepsAnimation from "./components/Home/StepsAnimation";

export default function Home() {
  const faqs = [
    {
      heading: "What is the objective of this game?",
      paragraphy:
        "The goal is to guess the secret code consisting of 4 unique numbers between 1 and 6.",
    },
    {
      heading: "What do black and white pegs mean?",
      paragraphy:
        "A black peg indicates a correct color and position, while a white peg means the correct color but wrong position.",
    },
    {
      heading: "How is the secret code generated?",
      paragraphy:
        " The secret code is randomly generated with 4 unique numbers chosen from 1 to 6.",
    },
    {
      heading: "What happens if I enter invalid input?",
      paragraphy:
        "If the input is invalid (e.g., duplicate numbers or numbers outside the 1-6 range), an error message will be displayed.",
    },
    {
      heading: "How does the game handle multiple guesses?",
      paragraphy:
        "The game keeps track of your guesses and displays the feedback for each guess, helping you improve your next attempt.",
    },
    {
      heading: "How is the 'black' peg count calculated?",
      paragraphy:" A black peg is given for each peg in your guess that matches both the color and position of the secret code."    },
    {
      heading: "How is the 'white' peg count calculated?",
      paragraphy:"A white peg is given for each correct color in your guess, but placed in the wrong position."    },
    {
      heading: "Can I use the same number more than once in a guess?",
      paragraphy:"No, each guess must have 4 distinct numbers between 1 and 6."
    },
    {
      heading: "What happens if I guess the correct code with 4 black pegs?",
      paragraphy:"The game congratulates you for cracking the code and displays the number of attempts you needed."    },
  ];

  return (
    <div className="website-wrapper">
      <AosComponent />
      <Header />
      <main>
        <Hero />
        <FeaturedVideo />
        <TextContent />
        <ProcessDesign />
        <LogosSection />
        {/* <Portfolio /> */}
        <section className="testimonials-section relative  bg-[#3239FF] py-12 text-white lg:py-20 xl:py-24 2xl:py-32">
          <div className="container">
            <div className="mb-8 grid items-start gap-4 md:mb-12 md:grid-cols-4 lg:mb-16 xl:mb-20 2xl:mb-28">
              <div className="col-span-1">
                <p className="text-sm font-light !leading-9 md:text-base lg:text-xl">
                  Who We Are
                </p>
              </div>
              <div className="col-span-2 hidden md:block">
                <AnimatedTitleOnScroll leftText="OUR" rightText="TEAM" />
              </div>
              <div className="col-span-2  md:hidden">
                <p className="text-xl font-bold">OUR TEAM</p>
              </div>
            </div>
            <Testimonials2 />
            <TestimonialBgAnimation />
          </div>
        </section>

        <section className="relative bg-[#17191B] pb-40 pt-6 md:pt-20 xl:py-24 2xl:pb-96 2xl:pt-32">
          <StepsAnimation />
          <Marquee>
            <div className="flex items-center gap-20">
              <div className="relative mx-5 h-[40px] w-[1798px] lg:mx-10 lg:h-[50px] 2xl:mx-20 2xl:h-[96px]">
                <Image src={designProcess} alt="OUR NUMBERS SPEAK" fill />
              </div>
              <div className="relative h-[40px] w-[50px] lg:h-[50px] lg:w-[60px] 2xl:h-[96px] 2xl:w-[111px]">
                <Image src={logo} alt="logo" fill />
              </div>
            </div>
          </Marquee>
          <div className="container mt-10 lg:mt-20 2xl:mt-32">
            <div className="grid items-center gap-4 text-white md:grid-cols-4">
              <div className="col-span-1">
                <p className="text-sm font-light md:text-base lg:text-xl">
                  Working Ethic
                </p>
              </div>
              <div className="col-span-3">
                <h2 className="mb-5 text-3xl font-medium !leading-tight sm:text-2xl lg:text-4xl xl:text-5xl">
                  <TypewriterText>Our Experience</TypewriterText>
                </h2>
              </div>
            </div>
            <DesignSteps />
          </div>
        </section>

        {/* <section className="relative md:my-20 bg-[#FFFFFF]">
          <Achievements />
        </section> */}

        <section className="bg-[#3239FF] py-20 xl:py-24 2xl:py-32">
          <div className="container">
            <div className="grid items-center gap-4 text-white md:grid-cols-4">
              <div className="col-span-1">
                <p className="text-sm font-light md:text-base lg:text-xl">
                  FAQs
                </p>
              </div>
              <div className="col-span-3">
                <h2 className="text-xl font-medium !leading-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  <TypewriterText>Frequently Asked Questions</TypewriterText>
                </h2>
              </div>
            </div>
            <div className="mt-6 columns-1 gap-6 md:mt-20 md:columns-2">
              {faqs.map((faq, index: any) => (
                <Accordion
                  type="multiple"
                  className="break-inside-avoid"
                  key={faq.heading}
                >
                  <AccordionItem
                    value={`item-${index + 1}`}
                    className="mb-2 rounded-[8px]  border-[1px] border-[#FFFFFF66] bg-[#4249FF] px-6 md:mb-6 md:py-4"
                  >
                    <AccordionTrigger className="text-left text-sm font-medium text-white hover:no-underline md:text-center md:text-base xl:text-xl ">
                      {faq.heading}
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 11h20M11 1v20"
                        ></path>
                      </svg> */}
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 124 124"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="plus flex-none transition-transform duration-200"
                      >
                        <path d="M62 0V124" stroke="white" strokeWidth="10" />
                        <path
                          d="M124 62L0 62"
                          stroke="white"
                          strokeWidth="10"
                          className="transition-all duration-500 ease-in-out group-data-[state=open]:opacity-0 "
                        />
                      </svg>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs font-normal text-white md:text-sm xl:text-lg">
                      {faq.paragraphy}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-6 md:py-24 lg:py-28 xl:py-32 2xl:py-36">
          <Marquee className="mb-10 md:mb-24 lg:mb-28 xl:mb-32 2xl:mb-36">
            <div className="flex items-center gap-20">
              <div className="relative mx-5 h-[40px] w-[1798px] lg:mx-10 lg:h-[50px] 2xl:mx-20 2xl:h-[96px]">
                <Image
                  src={ourNumberSpeaks}
                  alt="OUR NUMBERS SPEAK"
                  fill
                  className="ml-20"
                />
              </div>
              <div className="relative h-[40px] w-[50px] lg:h-[50px] lg:w-[60px] 2xl:h-[96px] 2xl:w-[111px]">
                <Image src={logo2} alt="logo" fill />
              </div>
            </div>
          </Marquee>
          <div className="container ">
            <div className="mx-auto max-w-5xl text-center ">
             
               <div className="relative w-[100%] h-[300px] md:h-[600px] mb-10">
               <Image fill  src={us} alt="US"/>
               </div>
          
              <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-20">
                <CustomButton
                  href="https://glistening-bubblegum-8791bf.netlify.app/"
                  bgClassNames="group-hover:bg-[#3239FF]"
                  textClassNames="group-hover:text-white"
                >
                  Play The Game
                </CustomButton>
                <CustomButton
                  href="/"
                  bgClassNames="group-hover:bg-[#3239FF]"
                  textClassNames="group-hover:text-white"
                >
                  Contact Us
                </CustomButton>
              </div>
            </div>
          </div>
        </section>
        {/* CTA SECTION */}
      </main>
      <Footer />
    </div>
  );
}
