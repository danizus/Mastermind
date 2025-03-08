import CaseStudiesHeader from "../components/caseStudies/CaseStudiesHeader";
import Image from "next/image";
import Footer from "../partials/Footer";
import girlWithBucket from "@images/girl-bucket.webp";
import dashboardScreen from "@images/dashboard-screen.webp";
import commas from "@images/commas.webp";
import projectOverview from "@images/project-overview.webp";
import statement1 from "@images/statements (1).webp";
import statement2 from "@images/statements (3).webp";
import statement3 from "@images/statements (2).webp";
import statement4 from "@images/statements (4).webp";
import designProcess from "@images/design-process-sec.webp";
import caseStudySm from "@images/case-studies/flexi-clean.webp";
import App1 from "@images/app (14).webp";
import App2 from "@images/app (13).webp";
import App3 from "@images/app (12).webp";
import App4 from "@images/app (11).webp";
import App5 from "@images/app (10).webp";
import App6 from "@images/app (9).webp";
import App7 from "@images/app (8).webp";
import App8 from "@images/app (7).webp";
import App9 from "@images/app (6).webp";
import App10 from "@images/app (5).webp";
import App11 from "@images/app (4).webp";
import App12 from "@images/app (3).webp";
import App13 from "@images/app (2).webp";
import App14 from "@images/app (1).webp";
import web1 from "@images/web (8).webp";
import web2 from "@images/web (7).webp";
import web3 from "@images/web (6).webp";
import web4 from "@images/web (5).webp";
import web5 from "@images/web (4).webp";
import web6 from "@images/web (3).webp";
import web7 from "@images/web (2).webp";
import web8 from "@images/web (1).webp";
import uiApp1 from "@images/ui-App (8).webp";
import uiApp2 from "@images/ui-App (7).webp";
import uiApp3 from "@images/ui-App (6).webp";
import uiApp4 from "@images/ui-App (5).webp";
import uiApp5 from "@images/ui-App (4).webp";
import uiApp6 from "@images/ui-App (3).webp";
import uiApp7 from "@images/ui-App (2).webp";
import uiApp8 from "@images/ui-App (1).webp";
import uiDashboard1 from "@images/uiDashboard (2).webp";
import uiDashboard2 from "@images/uiDashboard (1).webp";
import uiDashboard3 from "@images/uiDashboard (6).webp";
import uiDashboard4 from "@images/uiDashboard (5).webp";
import uiDashboard5 from "@images/uiDashboard (4).webp";
import uiDashboard6 from "@images/uiDashboard (3).webp";
import uiDashboard7 from "@images/uiDashboard (9).webp";
import uiDashboard8 from "@images/uiDashboard (8).webp";
import uiDashboard9 from "@images/uiDashboard (7).webp";
import discovery from "@images/discovery.png";
import design from "@images/design.png";
import planning from "@images/planning.png";
import portfolio1 from "@images/Rectangle 40615portfolio.webp";
import portfolio2 from "@images/Rectangle 40615portfolio-1.webp";
import AosComponent from "../components/caseStudies/AosComponent";
import "aos/dist/aos.css";
import cleaningLady from "@images/cleaning-lady.webp";
import Link from "next/link";
import {
  FigmaIcon,
  UserflowIcon,
  AIIcon,
  PSIcon,
  SlackIcon,
  MiroIcon,
  ClickupIcon,
  ChatGPTIcon,
} from "@/components/icons/icons";
import React from "react";

export default function page() {
  const portfolio = [
    {
      title: "Homeloop",
      description:
        "A dynamic platform for property managers to streamline their ope...",
      tags: ["Real Estate", "Property Management", "User Experience"],
      image: portfolio1,
      link: "/homeloop",
    },
    {
      title: "Pet shack",
      description:
        "An engaging app that connects pet owners with local pet services...",
      tags: ["Pet Care", "Mobile App", "User Engagement"],
      image: portfolio2,
      link: "/petshack-case-study",
      comingSoon: false,
    },
  ];

  const discoveryPhase = [
    {
      heading: "Define Goals:",
      description:
        "Identify the overarching goals and objectives of the design project. What problem are we solving, and what outcomes are we aiming to achieve?",
    },
    {
      heading: "Research:",
      description:
        "Conduct thorough research to gain insights into user needs, market trends, and competitors. This may involve user interviews, surveys, market analysis, and competitive benchmarking.",
    },
    {
      heading: "Establish Requirements:",
      description:
        "Define the functional and non-functional requirements of the project based on user research and stakeholder input.",
    },
  ];
  const designPhase = [
    {
      heading: "Define Scope:",
      description:
        "Clearly outline the scope of the project, including deliverables, timelines, and resource allocation.",
    },
    {
      heading: "Create User Personas:",
      description:
        " Develop detailed user personas representing different segments of the target audience, including their goals, pain points, and behaviors.",
    },
    {
      heading: "Information Architecture:",
      description:
        "Define the structure and organization of content and features within the design, ensuring intuitive navigation and user flow.",
    },
  ];
  const planningPhase = [
    {
      heading: "Sketching and Wireframing:",
      description:
        " Generate rough sketches and low-fidelity wireframes to visualize layout, structure, and content placement",
    },
    {
      heading: "Prototyping:",
      description:
        "Create interactive prototypes to simulate user interactions and test usability. Iterate on designs based on feedback and insights gathered from prototype testing.",
    },
    {
      heading: "Visual Design:",
      description:
        "Develop high-fidelity visual designs that incorporate branding elements, color schemes, typography, and imagery to create a cohesive and visually appealing interface.",
    },
    {
      heading: "UI Components:",
      description:
        " Design UI components such as buttons, forms, menus, and icons, ensuring consistency and usability across the interface.",
    },
  ];

  return (
    <>
      <AosComponent />
      <CaseStudiesHeader />
      <section className="flexi-clean-hero lg:pt-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="py-10 lg:py-20">
              <Image
                src={girlWithBucket}
                width={415}
                height={258}
                data-aos="zoom-out-right"
                data-aos-delay="1000"
                alt="Flexi clean"
                className="w-full lg:-mb-4 lg:w-auto"
              />
              <h1 className="mb-10 text-3xl font-semibold text-white md:text-7xl">
                Flexi Clean
              </h1>
              <p className="text-base font-light text-white md:text-xl">
                Adaptable, Efficient, and Client-Centric Solutions.
              </p>
            </div>
            <Image
              data-aos="zoom-in-up"
              data-aos-duration="800"
              data-aos-delay="200"
              src={dashboardScreen}
              width={1022}
              height={900}
              alt="Dashboard"
              className="w-full lg:-mb-16"
            />
          </div>
        </div>
      </section>

      <section className="container grid grid-cols-1 gap-10 py-10 lg:grid-cols-12 lg:gap-32 lg:py-40">
        <div className="lg:col-span-4" data-aos="fade-up">
          <h4 className="mb-10 text-3xl font-light md:text-4xl">
            Project <span className="font-medium">Duration</span>
          </h4>
          <div className="mb-4 grid w-full grid-cols-2 text-2xl font-medium text-[#562082] md:text-5xl">
            <p>08</p>
            <p>60+</p>
          </div>
          <div className="mb-4 grid grid-cols-2 text-sm font-light text-[#878C8E] md:text-base">
            <p>Weeks</p>
            <p>Screens</p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <h4
            className="mb-10 text-3xl font-light md:text-4xl"
            data-aos="fade-up"
          >
            <span className="font-medium">Tools </span>Used
          </h4>
          <div className="grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-8">
            <div>
              <div className="mb-3" data-aos="flip-right" data-aos-delay="100">
                <FigmaIcon />
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-[#878C8E]"
              >
                Figma
              </p>
            </div>

            <div>
              <div className="mb-3" data-aos="flip-right" data-aos-delay="200">
                <UserflowIcon />
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-[#878C8E]"
              >
                Userflow
              </p>
            </div>

            <div>
              <div className="mb-3" data-aos="flip-right" data-aos-delay="300">
                <AIIcon />
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-[#878C8E]"
              >
                AI
              </p>
            </div>

            <div>
              <div className="mb-3" data-aos="flip-right" data-aos-delay="400">
                <PSIcon />
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-[#878C8E]"
              >
                PS
              </p>
            </div>

            <div>
              <div className="mb-3" data-aos="flip-right" data-aos-delay="500">
                <SlackIcon />
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="500"
                className="text-[#878C8E]"
              >
                Slack
              </p>
            </div>

            <div>
              <div className="mb-3" data-aos="flip-right" data-aos-delay="600">
                <MiroIcon />
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="600"
                className="text-[#878C8E]"
              >
                Miro
              </p>
            </div>

            <div>
              <div className="mb-3" data-aos="flip-right" data-aos-delay="700">
                <ClickupIcon />
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="700"
                className="text-[#878C8E]"
              >
                ClickUp
              </p>
            </div>

            <div>
              <div className="mb-3" data-aos="flip-right" data-aos-delay="800">
                <ChatGPTIcon />
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="800"
                className="text-[#878C8E]"
              >
                ChatGPT
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h2
              className="mb-10 text-2xl font-light md:text-7xl"
              data-aos="fade-up"
            >
              Project <br className="hidden lg:block" />
              <span className="font-medium">Overview</span>
            </h2>
            <Image
              className="m-20"
              width={812}
              height={1132}
              src={projectOverview}
              alt="Project Overview"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="200"
            />
          </div>
          <div>
            <div data-aos="fade-up" data-aos-duration="500">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="16"
                  fill="none"
                  viewBox="0 0 10 16"
                >
                  <path
                    fill="#17191B"
                    d="M9.174 8.743L1.67 15.498c-.644.58-1.669.122-1.669-.743V1.245C0 .38 1.025-.077 1.669.502l7.505 6.755a1 1 0 010 1.486z"
                  ></path>
                </svg>
                <h3 className="text-2xl font-medium md:text-2xl">
                  Market Analysis
                </h3>
              </div>
              <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                <Image
                  src={commas}
                  alt="puntuation"
                  width={136}
                  height={83}
                  className="mt-10 md:mr-auto lg:mr-0 lg:mt-0"
                />
                <p className="my-5 text-base font-light text-[#878C8E] md:text-xl">
                  The cleaning industry in the Netherlands has traditionally
                  operated under rigid contracts and lacked modern technological
                  integration.
                </p>
              </div>
              <p className="my-5 text-base font-light text-[#878C8E] md:text-xl">
                However, the onset of the COVID-19 pandemic has highlighted the
                need for more flexible and adaptive cleaning solutions. There is
                a growing demand for cleaning services that can swiftly adjust
                to changing occupancy levels and evolving client requirements.
                Flexi Clean recognizes this market shift and aims to capitalize
                on it by introducing a tech-enhanced cleaning service platform.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="500">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="16"
                  fill="none"
                  viewBox="0 0 10 16"
                >
                  <path
                    fill="#17191B"
                    d="M9.174 8.743L1.67 15.498c-.644.58-1.669.122-1.669-.743V1.245C0 .38 1.025-.077 1.669.502l7.505 6.755a1 1 0 010 1.486z"
                  ></path>
                </svg>
                <h3 className="text-2xl font-medium md:text-2xl">
                  Technological Innovation
                </h3>
              </div>
              <p className="my-5 text-base font-light text-[#878C8E] md:text-xl">
                However, the onset of the COVID-19 pandemic has highlighted the
                need for more flexible and adaptive cleaning solutions. There is
                a growing demand for cleaning services that can swiftly adjust
                to changing occupancy levels and evolving client requirements.
                Flexi Clean recognizes this market shift and aims to capitalize
                on it by introducing a tech-enhanced cleaning service platform.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="500">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="16"
                  fill="none"
                  viewBox="0 0 10 16"
                >
                  <path
                    fill="#17191B"
                    d="M9.174 8.743L1.67 15.498c-.644.58-1.669.122-1.669-.743V1.245C0 .38 1.025-.077 1.669.502l7.505 6.755a1 1 0 010 1.486z"
                  ></path>
                </svg>
                <h3 className="text-lg font-medium md:text-2xl">
                  Client-Centric Approach
                </h3>
              </div>
              <p className="my-5 text-base font-light text-[#878C8E] md:text-xl">
                At the core of Flexi Clean&apos;s project is a client-centric
                approach aimed at enhancing user experience and satisfaction.
                The platform&apos;s intuitive user interfaces enable clients to
                easily communicate their changing needs and view service
                schedules. Moreover, interactive tools for customization empower
                businesses to tailor cleaning plans precisely to their
                requirements. By prioritizing clarity of information and ease of
                use, Flexi Clean ensures that clients can make informed
                decisions and swiftly book cleaning services as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-statement-bg py-10 lg:py-40">
        <div className="container">
          <h2
            className="mb-5 text-2xl font-medium md:text-5xl"
            data-aos="fade-up"
          >
            Project Statement
          </h2>
          <p
            className="text-[#878C8E]text-base  mb-5 font-light text-[#878C8E] md:text-xl"
            data-aos="fade-up"
          >
            The project entails the design and development of a cutting-edge
            cleaning service platform that utilizes real-time occupancy data and
            smart scheduling algorithms to optimize resource allocation and
            provide adaptive cleaning schedules. Through intuitive user
            interfaces and scalable features, the platform aims to revolutionize
            the way cleaning services are delivered, enhancing efficiency,
            adaptability, and client satisfaction.
          </p>
          <div className="my-20 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5">
            <div>
              <Image
                src={statement1}
                width={992.17}
                height={491.27}
                alt="Project Statement"
                className="mb-10"
                data-aos="fade-right"
              />
              <Image
                src={statement2}
                width={675.8}
                height={387.46}
                alt="Project Statement"
                data-aos="fade-right"
              />
            </div>
            <div>
              <Image
                src={statement3}
                width={632}
                height={245}
                alt="Project Statement"
                className="mb-10"
                data-aos="fade-left"
              />
              <Image
                src={statement4}
                width={702}
                height={778}
                alt="Project Statement"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="goals-bg my-5 lg:my-10">
        <div className="container grid grid-cols-1 items-center gap-10 xl:grid-cols-2 xl:gap-20">
          <div data-aos="fade-right">
            <h2 className="text-2xl font-medium md:text-6xl">Goals</h2>
            <ol className="list-decimal p-5 text-base font-light leading-normal text-[#878C8E] md:text-xl md:leading-relaxed">
              <li className="mb-5">
                Design a visually coherent and user-friendly platform
                encompassing a desktop landing page, client app/web app, and an
                employee app.
              </li>
              <li className="mb-5">
                Implement intuitive user interfaces that enable clients to
                easily communicate changing needs and view service schedules.
              </li>
              <li className="mb-5">
                Develop scalable features capable of accommodating various
                client sizes and demands.
              </li>
              <li className="mb-5">
                Incorporate a client-centric approach focusing on user
                experience, ease of use, and clarity of information.
              </li>
              <li className="mb-5">
                Create interactive tools for customization, allowing businesses
                to tailor cleaning plans precisely to their requirements.
              </li>
              <li className="mb-5">
                Provide realistic visualizations of the proposed tech-enhanced
                cleaning service platform for investor presentations.
              </li>
              <li className="mb-5">
                Align the platform with market demands, enhancing service
                levels, and client satisfaction.
              </li>
              <li className="mb-5">
                Deliver a comprehensive visual concept for the platform in Dutch
                language to attract further investment and demonstrate its
                potential impact on the cleaning industry.
              </li>
            </ol>
          </div>
          <div data-aos="fade-left">
            <Image src={cleaningLady} width={615} height={696} alt="Goals" />
          </div>
        </div>
      </section>

      <section className="design-process py-16 md:py-26">
        <div className="container mx-auto max-w-[1350px]">
          <div className="grid grid-cols-1 items-center justify-between md:grid-cols-2 ">
            <div className="mx-auto md:mx-0 ">
              <Image src={discovery} width={412} height={480} alt="Questions" />
            </div>
            <div className="md:ml-auto ">
              {discoveryPhase.map((item) => (
                <p>
                  <span className="text-lg font-medium text-[#FFFFFF] lg:text-2xl">
                    {item.heading}
                  </span>
                  <span className="text-base font-light text-[#878C8E] lg:text-2xl">
                    {item.description}
                  </span>
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 items-center justify-between md:grid-cols-2 ">
            <div className="md:mr-auto ">
              {designPhase.map((item) => (
                <p>
                  <span className="text-lg font-medium text-[#FFFFFF] lg:text-2xl">
                    {item.heading}
                  </span>
                  <span className="text-base font-light text-[#878C8E] lg:text-2xl">
                    {item.description}
                  </span>
                </p>
              ))}
            </div>
            <div className="-order-1 mx-auto md:order-none md:mx-0 md:ml-auto">
              <Image src={design} width={412} height={480} alt="Questions" />
            </div>
          </div>

          <div className="grid grid-cols-1 items-center justify-between md:grid-cols-2 ">
            <div className="mx-auto md:mx-0 ">
              <Image src={planning} width={412} height={480} alt="Questions" />
            </div>
            <div className="md:ml-auto">
              {planningPhase.map((item) => (
                <p>
                  <span className="text-lg font-medium text-[#FFFFFF] lg:text-2xl">
                    {item.heading}
                  </span>
                  <span className="text-base font-light text-[#878C8E] lg:text-2xl">
                    {item.description}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10 md:my-20">
        <h2 className="text-3xl font-medium md:text-6xl" data-aos="fade-up">
          Hi-Fi Wireframe
        </h2>
        <div className="my-10 rounded-md bg-[#F3F7FF] p-10">
          <h3 className="text-2xl font-medium" data-aos="fade-up">
            App
          </h3>
          <div className="my-10 grid grid-cols-2 gap-2 md:grid-cols-7">
            <Image
              src={App1}
              width={228}
              height={469.68}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="50"
            />
            <Image
              src={App2}
              width={228}
              height={469.68}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="100"
            />
            <Image
              src={App3}
              width={228}
              height={469.68}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="150"
            />
            <Image
              src={App4}
              width={228}
              height={469.68}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            />
            <Image
              src={App5}
              width={228}
              height={469.68}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="250"
            />
            <Image
              src={App6}
              width={228}
              height={469.68}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="300"
            />
            <Image
              src={App7}
              width={228}
              height={469.68}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="350"
            />
            <Image
              src={App8}
              width={228}
              height={469.68}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="400"
            />
            <Image
              src={App9}
              width={228}
              height={469.68}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="450"
            />
            <Image
              src={App10}
              width={228}
              height={469.68}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="500"
            />
            <Image
              src={App11}
              width={228}
              height={469.68}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="550"
            />
            <Image
              src={App12}
              width={228}
              height={469.68}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="600"
            />
            <Image
              src={App13}
              width={228}
              height={469.68}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="650"
            />
            <Image
              src={App14}
              width={228}
              height={469.68}
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="700"
            />
          </div>
        </div>

        <div className="rounded-md bg-[#F3F7FF] p-10">
          <h3 className="mb-10 text-2xl font-medium" data-aos="fade-up">
            Web
          </h3>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
            <Image
              src={web1}
              width={407.29}
              height={276}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="50"
            />
            <Image
              src={web2}
              width={407.29}
              height={276}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="100"
            />
            <Image
              src={web3}
              width={407.29}
              height={276}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="150"
            />
            <Image
              src={web4}
              width={407.29}
              height={276}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            />
            <Image
              src={web5}
              width={407.29}
              height={276}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="250"
            />
            <Image
              src={web6}
              width={407.29}
              height={276}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="300"
            />
            <Image
              src={web7}
              width={407.29}
              height={276}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="350"
            />
            <Image
              src={web8}
              width={407.29}
              height={276}
              data-aos-duration="500"
              alt="App"
              className="mb-5"
              data-aos="zoom-in-up"
              data-aos-delay="400"
            />
          </div>
        </div>
      </section>

      <section className="ui-app-bg py-10 md:py-32">
        <div className="container">
          <h2 className="text-3xl font-medium text-white md:text-6xl">
            UI App
          </h2>
          <div className="mt-32 grid grid-cols-1 gap-5 md:grid-cols-4">
            <Image
              data-aos="fade-down"
              src={uiApp1}
              width={420}
              height={846}
              alt="App"
              className="mb-5 md:odd:mt-32"
            />
            <Image
              data-aos="fade-up"
              src={uiApp2}
              width={420}
              height={846}
              alt="App"
              className="mb-5 md:odd:mt-32"
            />
            <Image
              data-aos="fade-down"
              src={uiApp3}
              width={420}
              height={846}
              alt="App"
              className="mb-5 md:odd:mt-32"
            />
            <Image
              data-aos="fade-down"
              src={uiApp4}
              width={420}
              height={846}
              alt="App"
              className="mb-5 md:odd:mt-32"
            />
            <Image
              data-aos="fade-up"
              src={uiApp5}
              width={420}
              height={846}
              alt="App"
              className="mb-5 md:odd:mt-32"
            />
            <Image
              data-aos="fade-down"
              src={uiApp6}
              width={420}
              height={846}
              alt="App"
              className="mb-5 md:odd:mt-32"
            />
            <Image
              data-aos="fade-up"
              src={uiApp7}
              width={420}
              height={846}
              alt="App"
              className="mb-5 md:odd:mt-32"
            />
            <Image
              data-aos="fade-down"
              src={uiApp8}
              width={420}
              height={846}
              alt="App"
              className="mb-5 md:odd:mt-32"
            />
          </div>
        </div>
      </section>

      <section className="ui-dashboard pt-10 md:pt-40">
        <div className="container">
          <h1 className="text-3xl font-medium md:text-6xl">Ui Dashboard</h1>
          <div data-aos="fade-down-right">
            <div className="mt-10 grid -rotate-[15deg] grid-cols-3 gap-10">
              <div className="md:mt-32">
                <Image
                  src={uiDashboard1}
                  width={1112}
                  height={718.17}
                  alt="Ui Dashboard"
                  className="mb-10"
                />
                <Image
                  src={uiDashboard2}
                  width={1112}
                  height={718.17}
                  alt="Ui Dashboard"
                />
              </div>
              <div>
                <Image
                  src={uiDashboard3}
                  width={1112}
                  height={718.17}
                  alt="Ui Dashboard"
                  className="mb-10"
                />
                <Image
                  src={uiDashboard4}
                  width={1112}
                  height={718.17}
                  alt="Ui Dashboard"
                  className="mb-10"
                />
                <Image
                  src={uiDashboard5}
                  width={1112}
                  height={718.17}
                  alt="Ui Dashboard"
                  className="mb-10"
                />
                <Image
                  src={uiDashboard6}
                  width={1112}
                  height={718.17}
                  alt="Ui Dashboard"
                />
              </div>
              <div className="md:mt-32">
                <Image
                  src={uiDashboard7}
                  width={1112}
                  height={1202}
                  alt="Ui Dashboard"
                  className="mb-10"
                />
                <Image
                  src={uiDashboard8}
                  width={1112}
                  height={718.17}
                  alt="Ui Dashboard"
                  className="mb-10"
                />
                <Image
                  src={uiDashboard9}
                  width={1112}
                  height={718.17}
                  alt="Ui Dashboard"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#F3F7FF] py-32">
        <div className="container">
          <h2 className="mb-10 text-3xl font-medium md:text-7xl">
            Recent Work
          </h2>
          <div className="grid-col-1 grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-12 lg:gap-16 lg:gap-x-20">
            {portfolio.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="portfolio-item group group duration-300 ease-in-out lg:odd:mt-24"
                scroll={!item.comingSoon}
              >
                <div className="img-wrap relative mb-4 overflow-hidden rounded-lg transition-all duration-200">
                  <Image
                    src={item.image}
                    width={812}
                    height={880}
                    alt="Portfolio Image"
                    className="transition-all duration-300 group-hover:scale-110"
                  />
                  {!item.comingSoon && (
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
                  )}
                  {item.comingSoon && (
                    <div className="absolute bottom-4 right-4 z-10 flex translate-y-full items-center justify-center rounded-full bg-primary px-6 py-3 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:bottom-8 md:right-8 xl:bottom-12 xl:right-12">
                      Coming Soon
                    </div>
                  )}
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
                        <span
                          className={`ml-4 hidden h-[5px] w-[5px] rounded-full bg-[#323639] align-middle  md:${index < 2 ? "inline-block" : "hidden"}`}
                        ></span>
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
    </>
  );
}
