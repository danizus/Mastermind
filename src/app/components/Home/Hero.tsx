"use client";
import { CustomButton } from "@/app/components/theme";
import HeroLineAnimation from "./HeroLineAnimation";
import ClutchWidget from "./ClutchWidget";
import TypewriterText from "@/app/components/TypewriterText";

export default function Hero() {
  return (
    <section className="hero-section relative z-10 overflow-hidden">
      <HeroLineAnimation />
      <div className="container">
        <div
          className="qodef-m-background-grid-lines qodef-m-background-grid-lines--4"
          style={
            {
              "--qode-grid-lines-color": "rgb(239,239,239)",
            } as React.CSSProperties
          }
        >
          <div
            className="qodef-m-background-grid-line"
            style={{ left: "20%" }}
          ></div>
          <div
            className="qodef-m-background-grid-line"
            style={{ left: "35%" }}
          ></div>
          <div
            className="qodef-m-background-grid-line"
            style={{ left: "65%" }}
          ></div>
          <div
            className="qodef-m-background-grid-line"
            style={{ left: "80%" }}
          ></div>
        </div>
        <div className="mx-auto max-w-screen-xl py-32 sm:py-36 md:py-40 lg:py-48 xl:py-60 2xl:py-72">
          <h1 className="lg::min-h-[120] min-h-[75px] text-center text-3xl font-bold !leading-tight md:min-h-[90px] md:text-4xl lg:text-5xl xl:min-h-[210px] xl:text-9xl">
            <TypewriterText>Mastermind </TypewriterText>
          </h1>
          <div className="flex justify-center items-center">
            <CustomButton
              href="https://glistening-bubblegum-8791bf.netlify.app/"
              bgClassNames="group-hover:bg-[#3239FF] "
              textClassNames="group-hover:text-white"
            >
              Play The Game
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}
