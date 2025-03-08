"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import TypewriterText from "@/app/components/TypewriterText";

export default function Achievements() {
  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: 0.5
  });
  return (
    <section className="relative z-10 py-20 md:py-24 lg:py-32 xl:py-36 2xl:py-40 text-[#17191B]">
      <div className="container" ref={ref}>
        <div className="items-start gap-4 grid md:grid-cols-4">
          <div className="col-span-1">
            <p className="font-light text-sm md:text-base lg:text-xl">
            Our Stats
            </p>
          </div>
          <div className="col-span-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium !leading-tight">
              <TypewriterText>
                We design creative brands, websites, and product packages that
                deliver results.
              </TypewriterText>
            </h2>
          </div>
        </div>
        <div
          className="gap-24 md:gap-20 lg:gap-24 xl:gap-28 2xl:gap-48 grid md:grid-cols-3 pt-20 md:pt-24 lg:pt-32 xl:pt-36 2xl:pt-40">
          <div className="counter-wrap">
            <h4 className="font-medium text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
              <CountUp end={inView ? 500 : 0} suffix="+" />
            </h4>
            <div className="border-black my-8 md:my-12 border-b border-solid"></div>
            <p className="text-xs md:text-base lg:text-lg">
              We have successfully completed over 500 projects, delivering
              exceptional design solutions that drive business success.
            </p>
          </div>
          <div className="counter-wrap">
            <h4 className="font-medium text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
              <CountUp end={inView ? 9 : 0} />
            </h4>
            <div className="border-black my-8 md:my-12 border-b border-solid"></div>
            <p className="text-xs md:text-base lg:text-lg">
              With 9 years in the industry, our expertise spans across various
              domains, ensuring high-quality and innovative designs.
            </p>
          </div>
          <div className="counter-wrap">
            <h4 className="font-medium text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
              <CountUp end={inView ? 200 : 0} suffix="+" />
            </h4>
            <div className="border-black my-8 md:my-12 border-b border-solid"></div>
            <p className="text-xs md:text-base lg:text-lg">
              We have worked with over 200 clients, building strong partnerships
              and creating designs that meet their unique needs and goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
