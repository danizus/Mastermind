"use client";
import petshack from "@images/petshacklogo.webp";
import hrmforce from "@images/hrmforce.webp";
import keepgive from "@images/keepgive.webp";
import homeloop from "@images/homeloop.webp";
import reisigo from "@images/reisigo.webp";
import liv from "@images/liv.webp";
import dorz from "@images/dorz.png";
import vaiu from "@images/vaiu.png";
import zestal from "@images/zestal.webp";
import wavesense from "@images/wavesense.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/autoplay";
import Image from "next/image";

export default function LogosSection() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      freeMode={true}
      autoplay={{ delay: 0 }}
      speed={3000}
      loop={true}
      // breakpoints={{
      //   320: {
      //     slidesPerView: 1.5,
      //     spaceBetween: 20,
      //   },
      //   640: {
      //     slidesPerView: 2.5,
      //     spaceBetween: 30,
      //   },
      //   768: {
      //     slidesPerView: 3.5,
      //     spaceBetween: 40,
      //   },
      //   1024: {
      //     slidesPerView: 4.5,
      //     spaceBetween: 60,
      //   },
      //   1280: {
      //     slidesPerView: 5.5,
      //     spaceBetween: 80,
      //   },
      // }}
      className="logos-carousel bg-[#F2F2F2]"
    >
      <SwiperSlide className="!flex justify-center text-2xl md:text-5xl py-6 md:py-8 lg:py-10 w-full">
        MASTERMIND 
      </SwiperSlide>
      <SwiperSlide className="!flex justify-center text-2xl md:text-5xl py-6 md:py-8 lg:py-10 w-full">
        MASTERMIND 
      </SwiperSlide>
  
    </Swiper>
  );
}
