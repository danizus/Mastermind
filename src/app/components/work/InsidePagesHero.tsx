import React from "react";
import TypewriterText from "@/app/components/TypewriterText";

type props = {
  label: string;
};

export default function WorkHero({ label }: props) {
  return (
    <section className="hero-section relative z-10 overflow-hidden">
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
        <div className="mr-auto max-w-screen-lg pt-32 pb-10 pr-0 md:pr-10 sm:py-36 md:py-40 lg:py-48 xl:py-60 2xl:py-72">
          <h1 className="text-left text-2xl font-bold !leading-tight md:text-4xl lg:text-5xl xl:text-7xl">
            <TypewriterText>
              {label}
            </TypewriterText>
          </h1>
        </div>
      </div>
    </section>
  );
}
