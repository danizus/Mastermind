import Image from "next/image";
import React from "react";

interface Detail {
  heading: string;
  description: string;
}

type props = {
  img1: any;
  img2: any;
  img3: any;
  details: Detail[];
};

export default function Questions({ img1, img2, img3, details }: props) {
  return (
    <>
      <div className="grid grid-cols-1 items-center justify-between md:grid-cols-2 ">
        <div className="mx-auto md:mx-0 ">
          <Image src={img1} width={412} height={480} alt="Questions" />
        </div>
        <div className="text-center md:text-left md:ml-auto">
          <h3 className="text-lg font-medium text-[#FFFFFF] md:text-2xl">
            {details[0].heading}
          </h3>
          <p className="text-base font-light text-[#878C8E] md:text-2xl">
            {details[0].description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 items-center justify-between md:grid-cols-2 ">
        <div className="text-center md:text-left md:mr-auto">
          <h3 className="text-lg font-medium text-[#FFFFFF] md:text-2xl">
            {details[1].heading}
          </h3>
          <p className="text-base font-light text-[#878C8E] md:text-2xl">
            {details[1].description}
          </p>
        </div>
        <div className="-order-1 md:order-none mx-auto md:mx-0 md:ml-auto">
          <Image src={img2} width={412} height={480} alt="Questions" />
        </div>
      </div>

      <div className="grid grid-cols-1 items-center justify-between md:grid-cols-2 ">
        <div className="mx-auto md:mx-0 ">
          <Image src={img3} width={412} height={480} alt="Questions" />
        </div>
        <div className="text-center md:text-left md:ml-auto">
          <h3 className="text-lg font-medium text-[#FFFFFF] md:text-2xl">
            {details[2].heading}
          </h3>
          <p className="text-base font-light text-[#878C8E] md:text-2xl">
            {details[2].description}
          </p>
        </div>
      </div>

      <div className="text-center effect-bg py-10 mt-16">
        <h4 className="text-[#FFFFFF] font-medium text-base md:text-2xl">Effect?</h4>
        <p className="text-[#878C8E] font-light text-base md:text-2xl">Our magical SLC Product for initial Launch</p>
      </div>
    </>
  );
}
