"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import testimonial1 from "@images/ME.jpg";
import testimonial2 from "@images/jurri2.jpg";
import testimonial3 from "@images/manal2.jpg";
import testimonial4 from "@images/haniya.jpg";
import testimonial5 from "@images/areesha.jpg";
import testimonial7 from "@images/hammad.jpg";
import testimonial6 from "@images/aiman.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(useGSAP);

export default function Testimonials2() {
  const firstTestimonial = useRef(null);
  const secondTestimonial = useRef(null);
  const thirdTestimonial = useRef(null);
  const fourthTestimonial = useRef(null);
  const fifthTestimonial = useRef(null);
  const sixthTestimonial = useRef(null);
  const seventhTestimonial = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: any) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // smooth: true,
    });

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1450px)", () => {
      gsap.to(firstTestimonial.current, {
        duration: 8,
        scrollTrigger: {
          trigger: firstTestimonial.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -300,
        ease: "power1.inOut",
      });

      gsap.to(secondTestimonial.current, {
        scrollTrigger: {
          trigger: secondTestimonial.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          duration: 5,
        },
        y: -200,

        ease: "power1.inOut",
      });

      gsap.to(thirdTestimonial.current, {
        scrollTrigger: {
          trigger: thirdTestimonial.current,
          start: "top bottom",
          end: "bottom 20%",
          scrub: true,
          duration: 10,
        },
        y: -150,

        ease: "power1.inOut",
      });

      gsap.to(fourthTestimonial.current, {
        scrollTrigger: {
          trigger: fourthTestimonial.current,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          duration: 8,
        },
        y: -400,
        ease: "power1.inOut",
      });

      gsap.to(fifthTestimonial.current, {
        scrollTrigger: {
          trigger: fifthTestimonial.current,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          duration: 5,
        },
        y: -250,

        ease: "power1.inOut",
      });
      gsap.to(seventhTestimonial.current, {
        scrollTrigger: {
          trigger: seventhTestimonial.current,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          duration: 5,
        },
        y: -100,

        ease: "power1.inOut",
      });
      gsap.to(sixthTestimonial.current, {
        scrollTrigger: {
          trigger: sixthTestimonial.current,
          start: "top 80%",
          end: "bottom center",
          scrub: true,
          duration: 10,
        },
        y: -360,
        ease: "power1.inOut",
      });
    });
  });

  return (
    <div>
      <div className="h-0 md:h-[10vh]"></div>
      <div className="hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 xl:gap-10 2xl:grid-cols-3">
        {/* testimonial 1  */}
        <div
          ref={firstTestimonial}
          className=" self-center rounded-[8px] border-[1px] border-solid  border-[#FFFFFF66] bg-[#4248FE] p-7 2xl:mt-16 2xl:min-h-[400px]"
        >
          <p className="mb-8 font-light text-[#FFFFFF] md:text-sm lg:text-base xl:text-xl ">
            Team lead, a React.js developer with 1.5 years of experience, led
            the Mastermind game project with strong leadership skills, believing
            that "With great power comes great responsibility".
          </p>
          <div className="flex items-center gap-4">
            <div>
              <Image
                src={testimonial1}
                width={80}
                height={50}
                alt="Avatar"
                className="rounder-[50%] w-12 sm:w-16 md:w-20"
              />
            </div>
            <div>
              <h3 className="text-base font-medium text-[#FFFFFF] md:text-lg  xl:text-2xl">
                Daniyal Ahmed Ansari
              </h3>
              <p className="text-sm font-light text-[#FFFFFF] lg:text-base ">
                Team Lead
              </p>
            </div>
          </div>
        </div>
        {/* testimonial 2 */}
        <div
          ref={secondTestimonial}
          className=" self-start rounded-[8px] border-[1px] border-solid border-[#FFFFFF66] bg-transparent p-7 2xl:mt-10 2xl:translate-y-[350px]"
        >
          <p className="mb-8 text-base font-light text-[#FFFFFF] md:text-sm lg:text-base xl:text-xl ">
            Security Engineer – implements, and maintains security solution to
            protect organization's infrastructure from cyber threats.
          </p>
          <div className="flex items-center gap-4">
            <div>
              <Image
                src={testimonial2}
                width={80}
                height={80}
                alt="Avatar"
                className="w-12 sm:w-16 md:w-20 "
              />
            </div>
            <div>
              <h3 className="text-base font-medium text-[#FFFFFF] md:text-lg  xl:text-2xl">
                Syed Jurry Abbas
              </h3>
              <p className="text-sm font-light text-[] lg:text-base">
                Security Engineer
              </p>
            </div>
          </div>
        </div>
        {/* testimonial 3 */}
        <div
          ref={thirdTestimonial}
          className="mt-5 self-center rounded-[8px] border-[1px] border-solid border-[#FFFFFF66] bg-[#4248FE] p-7 2xl:min-h-[400px]"
        >
          <p className="mb-12 text-base font-light text-[#FFFFFF] md:text-sm lg:text-base xl:text-xl ">
            I’m a frontend developer with a passion for building engaging
            digital experiences. With hands-on experience in web development and
            a game development internship where I worked with Unity and C++, I
            love bringing ideas to life—whether it’s an interactive website or
            an exciting game.
          </p>
          <div className="flex items-center gap-4">
            <div>
              <Image
                src={testimonial3}
                width={80}
                height={80}
                alt="Avatar"
                className="w-12 sm:w-16 md:w-20 "
              />
            </div>
            <div>
              <h3 className="text-base font-medium text-[#FFFFFF] md:text-lg  xl:text-2xl">
                Manal Amin
              </h3>
              <p className="text-sm font-light text-[#FFFFFF] lg:text-base ">
                Frontend developer
              </p>
            </div>
          </div>
        </div>

        {/* testimonial 4 */}
        <div
          ref={fourthTestimonial}
          className="mt-5 self-start rounded-[8px] border-[1px] border-solid border-[#FFFFFF66] bg-transparent p-7 2xl:mt-[5vh] 2xl:self-end"
        >
          <p className="mb-12 text-base font-light text-[#FFFFFF] md:text-sm lg:text-base xl:text-xl ">
            I’m a game developer passionate about creating immersive
            experiences. With hands-on experience in Unity and a game
            development internship, I’ve worked on various projects that bring
            ideas to life through engaging gameplay. I’ve also contributed to a
            website project, combining my skills in game and web development.
          </p>
          <div className="flex items-center gap-4">
            <div>
              <Image
                src={testimonial4}
                width={80}
                height={80}
                alt="Avatar"
                className="w-12 sm:w-16 md:w-20 "
              />
            </div>
            <div>
              <h3 className="text-base font-medium text-[#FFFFFF] md:text-lg  xl:text-2xl">
                Haniya Hussain
              </h3>
              <p className="text-sm font-light text-[#FFFFFF] lg:text-base ">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>
        {/* testimonial 5 */}
        <div
          ref={seventhTestimonial}
          className="mt-5  self-center rounded-[8px] border-[1px] border-solid border-[#FFFFFF66] bg-[#4248FE] p-7 2xl:mt-[5vh] 2xl:min-h-[400px] 2xl:translate-y-[250px]"
        >
          <p className="mb-12 text-base font-light text-[#FFFFFF] md:text-sm lg:text-base xl:text-xl ">
            Junior Web Developer with hands-on experience in building dynamic
            web applications using Node.js and Angular. Passionate about
            creating interactive user experiences and refining full-stack
            development skills.
          </p>
          <div className="flex items-center gap-4">
            <div>
              <Image
                src={testimonial5}
                width={80}
                height={80}
                alt="Avatar"
                className="w-12 sm:w-16 md:w-20 "
              />
            </div>
            <div>
              <h3 className="text-base font-medium text-[#FFFFFF] md:text-lg  xl:text-2xl">
                Areesha Abdullah
              </h3>
              <p className="text-sm font-light text-[#FFFFFF] lg:text-base ">
                Fullstack developer
              </p>
            </div>
          </div>
        </div>
        {/* testimonial 6*/}
        <div
          ref={fifthTestimonial}
          className="mt-5  self-center rounded-[8px] border-[1px] border-solid border-[#FFFFFF66] bg-[#4248FE] p-7 2xl:mt-[5vh] 2xl:min-h-[400px] 2xl:translate-y-[250px]"
        >
          <p className="mb-12 text-base font-light text-[#FFFFFF] md:text-sm lg:text-base xl:text-xl ">
            A Full Stack MERN Developer with 1.5 years of experience, playing a
            key role in the team by building scalable and dynamic web
            applications.
          </p>
          <div className="flex items-center gap-4">
            <div>
              <Image
                src={testimonial7}
                width={80}
                height={80}
                alt="Avatar"
                className="w-12 sm:w-16 md:w-20 "
              />
            </div>
            <div>
              <h3 className="text-base font-medium text-[#FFFFFF] md:text-lg  xl:text-2xl">
                Muhammad Hammad kamal
              </h3>
              <p className="text-sm font-light text-[#FFFFFF] lg:text-base ">
                Fullstack developer
              </p>
            </div>
          </div>
        </div>
        {/* testimonial 7*/}
        <div
          ref={sixthTestimonial}
          className="mt-5 self-start rounded-[8px] border-[1px]  border-solid border-[#FFFFFF66] bg-transparent p-7 2xl:mt-[5vh] 2xl:self-end "
        >
          <p className="mb-12 text-base font-light text-[#FFFFFF] md:text-sm lg:text-base xl:text-xl ">
            As a UI/UX Developer, I designed a clean and interactive interface
            for the Mastermind game using CSS. I focused on spacing, button
            responsiveness, and readability to enhance user experience. My goal
            was to create a visually appealing and easy-to-use game layout.
          </p>
          <div className="flex items-center gap-4">
            <div>
              <Image
                src={testimonial6}
                width={80}
                height={80}
                alt="Avatar"
                className="w-12 sm:w-16 md:w-20 "
              />
            </div>
            <div>
              <h3 className="text-base font-medium text-[#FFFFFF] md:text-lg  xl:text-2xl">
                Aiman Ali
              </h3>
              <p className="text-sm font-light text-[#FFFFFF] lg:text-base ">
                UI/UX Developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <Swiper
          autoplay={{ delay: 3000 }}
          spaceBetween={16} // Adjust spacing between slides
          slidesPerView={1.2}
          grabCursor={true}
          breakpoints={{
            768: { slidesPerView: 2 }, // Adjust for larger screens
          }}
        >
          <SwiperSlide>
            <div className="flex h-[250px] flex-col  justify-around rounded-[8px] border-[1px] border-solid border-[#FFFFFF66] bg-[#4248FE] p-4 ">
              <p className="text-xs font-light text-[#FFFFFF] ">
                Team lead, a React.js developer with 1.5 years of experience,
                led the Mastermind game project with strong leadership skills,
                believing that "With great power comes great responsibility.
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src={testimonial1}
                    width={80}
                    height={80}
                    alt="Avatar"
                    className="w-12 sm:w-16 md:w-20 "
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#FFFFFF]">
                    Daniyal Ahmed Ansari
                  </h3>
                  <p className="text-xs font-light text-[#FFFFFF] ">
                    Team Lead
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-[250px] flex-col justify-around rounded-[8px] border-[1px] border-solid border-[#FFFFFF66] bg-[#4248FE] p-4">
              <p className=" text-xs font-light text-[#FFFFFF]">
                Security Engineer – implements, and maintains security solution
                to protect organization's infrastructure from cyber threats.
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src={testimonial2}
                    width={80}
                    height={80}
                    alt="Avatar"
                    className="w-12 sm:w-16 md:w-20 "
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#FFFFFF]">
                    Syed Jurry Abbas
                  </h3>
                  <p className="text-xs font-light">Security Engineer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-[250px] flex-col justify-around rounded-[8px] border-[1px] border-solid border-[#FFFFFF66] bg-[#4248FE] p-4">
              <p className="mb-12 text-xs font-light text-[#FFFFFF]">
                I’m a frontend developer with a passion for building engaging
                digital experiences. With hands-on experience in web development
                and a game development internship where I worked with Unity and
                C++, I love bringing ideas to life—whether it’s an interactive
                website or an exciting game.
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src={testimonial3}
                    width={80}
                    height={80}
                    alt="Avatar"
                    className="w-12 sm:w-16 md:w-20 "
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#FFFFFF]">
                    Manal Amin
                  </h3>
                  <p className="text-xs font-light text-[#FFFFFF]">
                    Frontend developer
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-[250px] flex-col justify-around rounded-[8px] border-[1px] border-solid border-[#FFFFFF66] bg-[#4248FE] p-4">
              <p className="mb-12 text-sm font-light text-[#FFFFFF]">
                I’m a game developer passionate about creating immersive
                experiences. With hands-on experience in Unity and a game
                development internship, I’ve worked on various projects that
                bring ideas to life through engaging gameplay. I’ve also
                contributed to a website project, combining my skills in game
                and web development.
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src={testimonial4}
                    width={80}
                    height={80}
                    alt="Avatar"
                    className="w-12 sm:w-16 md:w-20 "
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#FFFFFF]">
                    Haniya Hussain
                  </h3>
                  <p className="text-xs font-light text-[#FFFFFF]">
                    Frontend Developer
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-[250px] flex-col justify-around rounded-[8px] border-[1px] border-solid border-[#FFFFFF66] bg-[#4248FE] p-4">
              <p className="mb-12 text-xs font-light text-[#FFFFFF]">
                A Full Stack MERN Developer with 1.5 years of experience,
                playing a key role in the team by building scalable and dynamic
                web applications.
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src={testimonial5}
                    width={80}
                    height={80}
                    alt="Avatar"
                    className="w-12 sm:w-16 md:w-20 "
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#FFFFFF]">
                    Muhammad Hammad kamal
                  </h3>
                  <p className="text-xs font-light text-[#FFFFFF]">
                    Fullstack developer
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-[250px] flex-col justify-around rounded-[8px] border-[1px] border-solid border-[#FFFFFF66] bg-[#4248FE] p-4">
              <p className="mb-12 text-xs font-light text-[#FFFFFF]">
                As a UI/UX Developer, I designed a clean and interactive
                interface for the Mastermind game using CSS. I focused on
                spacing, button responsiveness, and readability to enhance user
                experience. My goal was to create a visually appealing and
                easy-to-use game layout.
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src={testimonial6}
                    width={80}
                    height={80}
                    alt="Avatar"
                    className="w-12 sm:w-16 md:w-20 "
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#FFFFFF]">
                    Aiman Ali
                  </h3>
                  <p className="text-xs font-light text-[#FFFFFF]">
                    UI/UX Developer
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-[250px] flex-col justify-around rounded-[8px] border-[1px] border-solid border-[#FFFFFF66] bg-[#4248FE] p-4">
              <p className="mb-12 text-xs font-light text-[#FFFFFF]">
                A Full Stack MERN Developer with 1.5 years of experience,
                playing a key role in the team by building scalable and dynamic
                web applications.
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src={testimonial7}
                    width={80}
                    height={80}
                    alt="Avatar"
                    className="w-12 sm:w-16 md:w-20 "
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#FFFFFF]">
                    Muhammad Hammad kamal
                  </h3>
                  <p className="text-xs font-light text-[#FFFFFF]">
                    Fullstack developer
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="h-0 md:h-[10vh]"></div>
    </div>
  );
}
