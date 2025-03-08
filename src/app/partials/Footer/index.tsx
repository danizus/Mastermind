"use client";
import FooterLogoAnimation from "./FooterLogoAnimation";
import ClutchWidget from "../../components/Home/ClutchWidget";
export default function Footer() {
  return (
    <footer className="site-footer relative z-10 overflow-hidden bg-[#17191B] pt-20 text-white md:pt-24 lg:pt-28 xl:pt-32 2xl:pt-36">
      <FooterLogoAnimation />
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-7">
            <h2 className="mb-8 text-base sm:text-lg md:mb-12 md:text-xl lg:mb-16 lg:text-2xl xl:text-3xl 2xl:text-4xl">
              Don&apos;t let your idea stay a dream.
            </h2>
            <div className="mb-8 flex flex-wrap items-center gap-6 border-b border-solid border-[#323639] pb-8 md:mb-12 md:pb-12 lg:mb-16 lg:pb-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#3239FF"
                  d="M62.818 32.049L3.606.31C2.01-.544.03.461 0 2.124l.157 59.752c0 1.614 1.916 2.641 3.458 1.853l59.109-27.986c1.68-.778 1.69-2.839.094-3.694zm-18.754 2.604L11.143 50.264c-.522.237-1.16-.105-1.17-.627L9.947 38.58c0-.323-.203-.56-.5-.655L2.765 35.7c-.702-.247-.713-1.092 0-1.291l6.648-2.249c.287-.104.531-.36.5-.636l-.058-15.206c-.011-.522.659-.874 1.19-.588l33.038 17.707c.564.238.533.931-.02 1.216z"
                ></path>
              </svg>

              <a
                href="/"
                className="border-b border-solid border-white py-4 text-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="item-center flex flex-col  justify-between gap-10 pb-8 md:pb-12 lg:flex-row lg:items-center lg:pb-16">
          <ul className=" flex items-center gap-x-8 text-sm md:gap-x-10 lg:gap-x-12 lg:text-base xl:gap-x-16">
            <li>
              <a
                href="/"
                className="transition-all duration-200 hover:text-primary"
              >
                Contact Us
              </a>
            </li>
            <li></li>
          </ul>
          {/* <div className="w-[200px] rounded-sm bg-white px-4 py-2 pl-4">
            <ClutchWidget />
          </div> */}
          <div className="mb-4 hidden text-[#878C8E] md:block">
            © Copyright 2024 IAD GROUP 7
          </div>
        </div>
      </div>
    </footer>
  );
}
