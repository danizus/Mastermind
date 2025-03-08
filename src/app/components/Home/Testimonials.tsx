"use client";
import Image from "next/image";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { CSSProperties } from "react";

export default function Testimonials() {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      direction={"vertical"}
      autoHeight={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      height={360}
      style={
        {
          "--swiper-pagination-left": "max(20px, min(5vw, 40px))",
          "--swiper-pagination-right": "auto",
          paddingLeft: "max(20px, min(5vw, 100px))",
        } as CSSProperties
      }
    >
      <SwiperSlide>
        <div className="pl-12 testimonial-item">
          <p className="mb-4 md:mb-12 font-light text-xs md:text-base lg:text-xl xl:text-2xl !leading-snug lg:!leading-normal">
            Loved working with Volkoh. Great communicator and partner, really
            honed in on my demands and requests. Awesome design work, not only
            visually but also in UI/UX. Would definitely recommend working with
            Volkoh, really lifted our project to a higher level. Will
            collaborate again in the future!
          </p>
          <div className="flex items-center gap-6 testi-footer">
            <div className="testi-avatar">
              <Image
                src={require("@images/testimonial1.webp")}
                width={120}
                height={120}
                alt="Avatar"
                className="w-12 sm:w-16 md:w-20 lg:w-28"
              />
            </div>
            <div>
              <p className="text-base md:text-lg lg:text-2xl">
                Thierry Hubar
              </p>
              <p className="font-light text-xs md:text-base">
                Flexi Clean, Netherlands
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pl-12 testimonial-item">
          <p className="mb-4 md:mb-12 font-light text-xs md:text-base lg:text-xl xl:text-2xl !leading-snug lg:!leading-normal">
            As usual, excellent communication and execution… This is the 6th
            project I did with Volkoh, and definitely, more to come 😊
          </p>
          <div className="flex items-center gap-6 testi-footer">
            <div className="testi-avatar">
              <Image
                src={require("@images/testimonial2.webp")}
                width={120}
                height={120}
                alt="Avatar"
                className="w-12 sm:w-16 md:w-20 lg:w-28"
              />
            </div>
            <div>
              <p className="text-base md:text-lg lg:text-2xl">Philipp</p>
              <p className="font-light text-xs md:text-base">
                Reisigo, Austria
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pl-12 testimonial-item">
          <p className="mb-4 md:mb-12 font-light text-xs md:text-base lg:text-xl xl:text-2xl !leading-snug lg:!leading-normal">
            Volkoh team are very dedicated to getting the best for your project.
            Great communication and understood what I was looking for in this
            instance. Highly recommended and would do more business in the
            future.
          </p>
          <div className="flex items-center gap-6 testi-footer">
            <div className="testi-avatar">
              <Image
                src={require("@images/testimonial3.webp")}
                width={120}
                height={120}
                alt="Avatar"
                className="w-12 sm:w-16 md:w-20 lg:w-28"
              />
            </div>
            <div>
              <p className="text-base md:text-lg lg:text-2xl">
                Alistair Peters
              </p>
              <p className="font-light text-xs md:text-base">
                PetShack, Australia
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pl-12 testimonial-item">
          <p className="mb-4 md:mb-12 font-light text-xs md:text-base lg:text-xl xl:text-2xl !leading-snug lg:!leading-normal">
            Very satisfied with the delivered results. Professional
            communication, open for feedback. Would definitely recommend and
            hire him again!
          </p>
          <div className="flex items-center gap-6 testi-footer">
            <div className="testi-avatar">
              <Image
                src={require("@images/testimonial4.webp")}
                width={120}
                height={120}
                alt="Avatar"
                className="w-12 sm:w-16 md:w-20 lg:w-28"
              />
            </div>
            <div>
              <p className="text-base md:text-lg lg:text-2xl">
                Floor Hendriks
              </p>
              <p className="font-light text-xs md:text-base">
                HRM, Netherlands
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pl-12 testimonial-item">
          <p className="mb-4 md:mb-12 font-light text-xs md:text-base lg:text-xl xl:text-2xl !leading-snug lg:!leading-normal">
            Volkoh continues to deliver over and over again! I’ve been working
            with him for several months now and always come through with great
            looking and consistent designs.
          </p>
          <div className="flex items-center gap-6 testi-footer">
            <div className="testi-avatar">
              <Image
                src={require("@images/testimonial5.webp")}
                width={120}
                height={120}
                alt="Avatar"
                className="w-12 sm:w-16 md:w-20 lg:w-28"
              />
            </div>
            <div>
              <p className="text-base md:text-lg lg:text-2xl">
                Jesus Perez
              </p>
              <p className="font-light text-xs md:text-base">
                Homeloop, USA
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
