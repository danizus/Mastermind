import React from "react";
import Header from "../partials/Header";
import InsidePagesHero from "../components/work/InsidePagesHero";
import Footer from "../partials/Footer";
import Image from "next/image";
import Sufyan from "@images/team/Sufyan.png";
import Shayan from "@images/team/Shayan.png";
import Ovais from "@images/team/Ovais.png";
import Osama from "@images/team/Osama.png";
import AosComponent from "../components/caseStudies/AosComponent";
import "aos/dist/aos.css";
import TypewriterText from "@/app/components/TypewriterText";

export default function page() {
  return (
    <div>
      <AosComponent />
      <Header />
      <InsidePagesHero label="A passionate team, rooted in digital." />

      <section className="py-10 md:pt-40 md:pb-20 culture-background">
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 text-white container">
          <div className="flex justify-center items-center">
            <h2 className="font-semibold text-2xl md:text-7xl">
              <TypewriterText>Our culture, values and beliefs.</TypewriterText>
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h3 className="mb-4 font-medium text-2xl">Connect with us</h3>
              <p className="font-light text-sm md:text-base">
                We pride ourselves on pushing the boundaries of digital design
                and development. We combine relevant trends and best practices
                to build platforms with longevity.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-medium text-2xl">Constant Growth</h3>
              <p className="font-light text-sm md:text-base">
                Our team is composed of ambitious creatives and strategists;
                each member is dedicated to perfecting their craft and taking
                brands to the next level.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-medium text-2xl">
                Well-Deserved Benefits
              </h3>
              <p className="font-light text-sm md:text-base">
                Medical, dental, and vision coverage. Paid vacation, sick days,
                and a 401(k) plan. Sweeping views in the heart of Downtown San
                Jose. Dim sum and boba runs. Our team deserves it all.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-medium text-2xl">Detail-Oriented</h3>
              <p className="font-light text-sm md:text-base">
                We sweat the small stuff, because we believe that the details
                make the design. A time-tested and true platform values quality
                over quantity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 md:pt-20">
        <div className="container">
          <div className="mb-10 py-10 max-w-full md:max-w-[50%]">
            <h2 className="mb-4 font-semibold text-2xl md:text-7xl">
              <TypewriterText>
                We are Volkoh, a Rockin&apos; Team
              </TypewriterText>
            </h2>
            <p className="font-light text-[#878C8E] text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="gap-20 md:gap-0 grid grid-cols-1 md:grid-cols-2">
            <div
              data-aos="fade-right"
              className="gap-10 md:gap-0 grid grid-cols-1 md:grid-cols-2 md:border-b-[1px] md:border-b-[#DEE1E4]"
            >
              <div className="flex flex-col flex-1 justify-center gap-2 p-2 md:p-5 md:border-r-solid md:border-r-[1px] md:border-r-[#DEE1E4]">
                <svg
                  className="mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="none"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#3239FF"
                    d="M62.818 32.049L3.606.31C2.01-.544.03.461 0 2.124l.157 59.752c0 1.614 1.916 2.641 3.458 1.853l59.109-27.986c1.68-.778 1.69-2.839.094-3.694zm-18.754 2.604L11.143 50.264c-.522.237-1.16-.105-1.17-.627L9.947 38.58c0-.323-.203-.56-.5-.655L2.765 35.7c-.702-.247-.713-1.092 0-1.291l6.648-2.249c.287-.104.531-.36.5-.636l-.058-15.206c-.011-.522.659-.874 1.19-.588l33.038 17.707c.564.238.533.931-.02 1.216z"
                  ></path>
                </svg>
                <h3 className="font-medium text-[#17191B] text-2xl">
                  Sufyan Qureshi
                </h3>
                <p className="pb-4 font-light text-[#17191B] text-base">
                  Founder
                </p>
                <p className="font-light text-[#878C8E] text-sm">
                  Leading our vision and driving innovation at Volkoh.
                </p>
              </div>
              <div className="order-first md:order-none md:border-r-solid md:border-r-[1px] md:border-r-[#DEE1E4] filter grayscale">
                <Image src={Sufyan} width={413} height={488} alt="wd" />
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="gap-10 md:gap-0 grid grid-cols-1 md:grid-cols-2 md:border-b-[1px] md:border-b-[#DEE1E4]"
            >
              <div className="flex flex-col flex-1 justify-center gap-2 p-2 md:p-5 md:border-r-solid md:border-r-[1px] md:border-r-[#DEE1E4]">
                <svg
                  className="mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="none"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#3239FF"
                    d="M62.818 32.049L3.606.31C2.01-.544.03.461 0 2.124l.157 59.752c0 1.614 1.916 2.641 3.458 1.853l59.109-27.986c1.68-.778 1.69-2.839.094-3.694zm-18.754 2.604L11.143 50.264c-.522.237-1.16-.105-1.17-.627L9.947 38.58c0-.323-.203-.56-.5-.655L2.765 35.7c-.702-.247-.713-1.092 0-1.291l6.648-2.249c.287-.104.531-.36.5-.636l-.058-15.206c-.011-.522.659-.874 1.19-.588l33.038 17.707c.564.238.533.931-.02 1.216z"
                  ></path>
                </svg>
                <h3 className="font-medium text-[#17191B] text-2xl">
                  Osama Farrukh
                </h3>
                <p className="pb-4 font-light text-[#17191B] text-base">
                  Lead UI/UX - Product Designer
                </p>
                <p className="font-light text-[#878C8E] text-sm">
                  Crafting intuitive and engaging user experiences.
                </p>
              </div>
              <div className="order-first md:order-none filter grayscale">
                <Image src={Osama} width={413} height={488} alt="wd" />
              </div>
            </div>

            <div
              data-aos="fade-right"
              className="gap-10 md:gap-0 grid grid-cols-1 md:grid-cols-2 md:border-b-[1px] md:border-b-[#DEE1E4]"
            >
              <div className="flex flex-col flex-1 justify-center gap-2 p-2 md:p-5 md:border-r-solid md:border-r-[1px] md:border-r-[#DEE1E4]">
                <svg
                  className="mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="none"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#3239FF"
                    d="M62.818 32.049L3.606.31C2.01-.544.03.461 0 2.124l.157 59.752c0 1.614 1.916 2.641 3.458 1.853l59.109-27.986c1.68-.778 1.69-2.839.094-3.694zm-18.754 2.604L11.143 50.264c-.522.237-1.16-.105-1.17-.627L9.947 38.58c0-.323-.203-.56-.5-.655L2.765 35.7c-.702-.247-.713-1.092 0-1.291l6.648-2.249c.287-.104.531-.36.5-.636l-.058-15.206c-.011-.522.659-.874 1.19-.588l33.038 17.707c.564.238.533.931-.02 1.216z"
                  ></path>
                </svg>
                <h3 className="font-medium text-[#17191B] text-2xl">
                  Shayan Fahim
                </h3>
                <p className="pb-4 font-light text-[#17191B] text-base">
                  Senior UI/UX Designer
                </p>
                <p className="font-light text-[#878C8E] text-sm">
                  Bringing design expertise to create impactful digital
                  solutions.
                </p>
              </div>
              <div className="order-first md:order-none md:border-r-solid md:border-r-[1px] md:border-r-[#DEE1E4] filter grayscale">
                <Image src={Shayan} width={413} height={488} alt="wd" />
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="gap-10 md:gap-0 grid grid-cols-1 md:grid-cols-2 md:border-b-[1px] md:border-b-[#DEE1E4]"
            >
              <div className="flex flex-col flex-1 justify-center gap-2 p-2 md:p-5 md:border-r-solid md:border-r-[1px] md:border-r-[#DEE1E4]">
                <svg
                  className="mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="none"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#3239FF"
                    d="M62.818 32.049L3.606.31C2.01-.544.03.461 0 2.124l.157 59.752c0 1.614 1.916 2.641 3.458 1.853l59.109-27.986c1.68-.778 1.69-2.839.094-3.694zm-18.754 2.604L11.143 50.264c-.522.237-1.16-.105-1.17-.627L9.947 38.58c0-.323-.203-.56-.5-.655L2.765 35.7c-.702-.247-.713-1.092 0-1.291l6.648-2.249c.287-.104.531-.36.5-.636l-.058-15.206c-.011-.522.659-.874 1.19-.588l33.038 17.707c.564.238.533.931-.02 1.216z"
                  ></path>
                </svg>
                <h3 className="font-medium text-[#17191B] text-2xl">
                  Ovais Bilal
                </h3>
                <p className="pb-4 font-light text-[#17191B] text-base">
                  Senior UI/UX - Product Designer
                </p>
                <p className="font-light text-[#878C8E] text-sm">
                  Designing user-centric interfaces with creativity and
                  precision.
                </p>
              </div>
              <div className="order-first md:order-none filter grayscale">
                <Image src={Ovais} width={413} height={488} alt="wd" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const workers = [
  {
    name: "Sufyan Qureshi",
    designation: "Project Manager",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    name: "Osama Farrukh",
    designation: "Project Manager",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    name: "Shayan Fahim",
    designation: "Project Manager",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    name: "Ovais Bilal",
    designation: "Project Manager",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];
