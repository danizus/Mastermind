import Header from "../partials/Header";
import InsidePagesHero from "../components/work/InsidePagesHero";
import Footer from "../partials/Footer";
import portfolio1 from "@images/Rectangle 40615portfolio.webp";
import portfolio2 from "@images/Rectangle 40615portfolio-1.webp";
import portfolio3 from "@images/Rectangle 40615portfolio-3.webp";
import portfolio4 from "@images/Rectangle 40615portfolio-2.webp";
import portfolio5 from "@images/portfolio5.webp";
import portfolio7 from "@images/portfolio7.webp";
import Image from "next/image";
import Link from "next/link";
import AosComponent from "../components/caseStudies/AosComponent";
import "aos/dist/aos.css";

const portfolio = [
  {
    title: "Homeloop",
    description:
      "A dynamic platform for property managers to streamline their ope...",
    tags: ["Real Estate", "Property Management", "User Experience"],
    image: portfolio1,
    link: "/homeloop",
    Animation: "fade-up",
  },
  {
    title: "Pet shack",
    description:
      "An engaging app that connects pet owners with local pet services...",
    tags: ["Pet Care", "Mobile App", "User Engagement"],
    image: portfolio2,
    link: "/petshack-case-study",
    Animation: "fade-down",
  },
];
const portfolioAi = [
  {
    title: "The AI School",
    description:
      "An educational platform designed to make learning artificial intelligence accessible and engaging for all students.",
    tags: ["Education", "Artificial Intelligence", "WebDevelopment"],
    image: portfolio5,
    Animation: "fade-right",
  },
];
const portfolioNew = [
  {
    title: "Cerro System",
    description:
      "A comprehensive system designed to simplify and optimize logist...",
    tags: ["Logistics", "Supply Chain", "Efficiency"],
    image: portfolio3,
    link: "/",
    Animation: "fade-down",
  },
  {
    title: "Flexi Clean",
    description:
      "A revolutionary cleaning services app that simplifies booking and...",
    tags: ["Cleaning Services", "App Development", "Convenience"],
    image: portfolio4,
    link: "/flexi-clean",
    Animation: "fade-up",
  },
];
const portfolioVpn = [
  {
    title: "Keepngive",
    description:
      "A sleek and effective single product sales landing page designed to maximize conversions and customer engagement.",
    tags: ["E-Commerce", "Landing Page", "Conversion Optimization"],
    image: portfolio7,
    Animation: "fade-right",
  },
];

export default function page() {

  return (
    <div className="webiste-wrapper">
      <AosComponent />
      <Header />
      <InsidePagesHero label="We bring your boldest ideas to life" />
      <section className="py-12 lg:py-20 xl:py-24 portfolio-section">
        <div className="container">
        <div className="grid-col-1 grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-12 lg:gap-16 lg:gap-x-20">
          {portfolio.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="portfolio-item group duration-300 ease-in-out group lg:even:mt-24"
             
            >
              <div className="img-wrap relative mb-4 overflow-hidden transition-all duration-200 rounded-lg">
                <Image
                  src={item.image}
                  width={812}
                  height={880}
                  alt="Portfolio Image"
                  className="group-hover:scale-110 transition-all duration-300"
                />
             
                  <div className="absolute bottom-4 right-4 z-10 flex size-16 translate-y-full items-center justify-center rounded-full bg-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:bottom-8 md:right-8 md:size-20 xl:bottom-12 xl:right-12 xl:size-28">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="none"
                      viewBox="0 0 40 40"
                      className="size-6 md:size-8 lg:size-10"
                    >
                      <path
                        stroke="#fff"
                        strokeWidth="4"
                        d="M20 .8v38.4M39.2 20H.8"
                      ></path>
                    </svg>
                  </div>
        
              </div>
              <div className="portfolio-content md:p-6">
                <h4 className="mb-3 text-lg md:mb-6 md:text-xl lg:text-2xl xl:text-3xl">
                  {item.title}
                </h4>
                <p className="mb-4 text-xs font-light md:text-base lg:text-lg">
                  {item.description}
                </p>
                <div className="portfolio-tags hidden flex-wrap items-center gap-2 font-light md:flex md:gap-3 xl:gap-6">
                  {item.tags.map((tag, index) => (
                     <span key={index} className="group">
                     <span className="text-xs md:text-sm">{tag}</span>
                     <span className={`ml-4 hidden h-[5px] w-[5px] rounded-full bg-[#323639] align-middle  md:${index<2?"inline-block":"hidden"}`}></span>
                   </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </section>
      <section className="lg:gap-16 py-12 xl:py-24 portfolio-section">
        <div className="container">
          <div className="gap-4 sm:gap-6 md:gap-12 lg:gap-16 lg:gap-x-20 grid grid-cols-1">
            {portfolioAi.map((item, index) => (
              <Link
                href="/"
                className="md:odd:mt-24 duration-300 ease-in-out portfolio-item group"
                key={index}
                data-aos={item.Animation}
              >
                <div className="img-wrap relative mb-4 overflow-hidden transition-all duration-200 rounded-lg">
                  <Image
                    src={item.image}
                    width={1527}
                    height={880}
                    alt="Portfolio Image"
                    className="group-hover:scale-110 transition-all duration-300"
                  />

                  <div className="right-4 xl:right-32 bottom-2 xl:bottom-10 absolute bg-[#3239FF] opacity-0 px-4 xl:px-8 py-2 xl:py-4 rounded-full text-center text-white portfolio-inner">
                    Coming Soon
                  </div>
                </div>
                <div className="md:p-6 portfolio-content">
                  <h4 className="mb-3 md:mb-6 text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    {item.title}
                  </h4>
                  <p className="mb-4 font-light text-xs md:text-base lg:text-lg">
                    {item.description}
                  </p>
                  <div className="md:flex items-center gap-2 md:gap-4 lg:gap-6 hidden font-light portfolio-tags">
                    {item.tags.map((tag, index) => (
                       <span key={index} className="group">
                       <span className="text-xs md:text-sm">{tag}</span>
                       <span className={`ml-4 hidden h-[5px] w-[5px] rounded-full bg-[#323639] align-middle  md:${index<2?"inline-block":"hidden"}`}></span>
                     </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-16 xl:py-24 portfolio-section">
        <div className="container">
        <div className="grid-col-1 grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-12 lg:gap-16 lg:gap-x-20">
          {portfolioNew.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="portfolio-item group duration-300 ease-in-out group lg:odd:mt-24"
        
            >
              <div className="img-wrap relative mb-4 overflow-hidden transition-all duration-200 rounded-lg">
                <Image
                  src={item.image}
                  width={812}
                  height={880}
                  alt="Portfolio Image"
                  className="group-hover:scale-110 transition-all duration-300"
                />
            
                  <div className="absolute bottom-4 right-4 z-10 flex size-16 translate-y-full items-center justify-center rounded-full bg-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:bottom-8 md:right-8 md:size-20 xl:bottom-12 xl:right-12 xl:size-28">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="none"
                      viewBox="0 0 40 40"
                      className="size-6 md:size-8 lg:size-10"
                    >
                      <path
                        stroke="#fff"
                        strokeWidth="4"
                        d="M20 .8v38.4M39.2 20H.8"
                      ></path>
                    </svg>
                  </div>
          
           
              </div>
              <div className="portfolio-content md:p-6">
                <h4 className="mb-3 text-lg md:mb-6 md:text-xl lg:text-2xl xl:text-3xl">
                  {item.title}
                </h4>
                <p className="mb-4 text-xs font-light md:text-base lg:text-lg">
                  {item.description}
                </p>
                <div className="portfolio-tags hidden flex-wrap items-center gap-2 font-light md:flex md:gap-3 xl:gap-6">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="group">
                    <span className="text-xs md:text-sm">{tag}</span>
                    <span className={`ml-4 hidden h-[5px] w-[5px] rounded-full bg-[#323639] align-middle  md:${index<2?"inline-block":"hidden"}`}></span>
                  </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </section>
      <section className="py-12 lg:py-20 xl:py-24 portfolio-section">
        <div className="container">
          <div className="gap-4 sm:gap-6 md:gap-12 lg:gap-16 lg:gap-x-20 grid grid-cols-1">
            {portfolioVpn.map((item, index) => (
              <Link
                href="/"
                className="md:odd:mt-24 portfolio-item group"
                key={index}
                data-aos={item.Animation}
              >
                <div className="img-wrap relative mb-4 overflow-hidden transition-all duration-200 rounded-lg">
                  <Image
                    src={item.image}
                    width={1527}
                    height={880}
                    alt="Portfolio Image"
                    className="group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="right-4 xl:right-32 bottom-2 xl:bottom-10 absolute bg-[#3239FF] opacity-0 px-4 xl:px-8 py-2 xl:py-4 rounded-full text-center text-white portfolio-inner">
                    Coming Soon
                  </div>
                </div>
                <div className="md:p-6 portfolio-content">
                  <h4 className="mb-3 md:mb-6 text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    {item.title}
                  </h4>
                  <p className="mb-4 font-light text-xs md:text-base lg:text-lg">
                    {item.description}
                  </p>
                  <div className="md:flex items-center gap-2 md:gap-4 lg:gap-6 hidden font-light portfolio-tags">
                    {item.tags.map((tag, index) => (
                       <span key={index} className="group">
                       <span className="text-xs md:text-sm">{tag}</span>
                       <span className={`ml-4 hidden h-[5px] w-[5px] rounded-full bg-[#323639] align-middle  md:${index<2?"inline-block":"hidden"}`}></span>
                     </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
