"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/lib/icons";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function CaseStudiesHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`transition-all duration-300 ease-in-out ${isScrolled ? "site-header py-5" : "py-5"} `}>
      <div className="container flex justify-between">
        <div className="grid grid-cols-12 items-center gap-x-6">
          <div className="col-span-6 md:col-span-2">
            <Link href="/" className="site-logo">
              <Logo width="200" height="40" />
            </Link>
          </div>
          <div className="col-span-6 md:col-span-7">
            <nav>
              <ul className="hidden gap-x-8 md:gap-x-10 lg:flex lg:gap-x-12 xl:gap-x-16">
                <li className="group  relative">
                  <Link
                    href="/work"
                    className="transition-all duration-200 hover:text-primary"
                  >
                    Our Work
                  </Link>
                  <span className="duration-250 absolute bottom-0 left-0 mt-5 h-0.5 w-0 bg-primary transition-all group-hover:w-full "></span>
                </li>

                <li className="group  relative">
                  <Link
                    href="/about"
                    className="transition-all duration-200 hover:text-primary"
                  >
                    About Us
                  </Link>
                  <span className="duration-250 absolute bottom-0 left-0 mt-5 h-0.5 w-0 bg-primary transition-all group-hover:w-full "></span>
                </li>
                <li className="group  relative">
                  <Link
                    href="/contact"
                    className="transition-all duration-200 hover:text-primary"
                  >
                    Contact Us
                  </Link>
                  <span className="duration-250 absolute bottom-0 left-0 mt-5 h-0.5 w-0 bg-primary transition-all group-hover:w-full "></span>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-span-3 flex justify-end">
            <ul className="hidden gap-x-8 font-light md:gap-x-10 lg:flex lg:gap-x-12 xl:gap-x-16">
              <li className="group  relative">
                <a
                  href="#"
                  className="transition-all duration-200 hover:text-primary"
                >
                  Instagram
                </a>
                <span className="duration-250 absolute bottom-0 left-0 mt-5 h-0.5 w-0 bg-primary transition-all group-hover:w-full "></span>
              </li>
              <li className="group  relative">
                <a
                  href="#"
                  className="transition-all duration-200 hover:text-primary"
                >
                  Dribbble
                </a>
                <span className="duration-250 absolute bottom-0 left-0 mt-5 h-0.5 w-0 bg-primary transition-all group-hover:w-full "></span>
              </li>
              <li className="group  relative">
                <a
                  href="https://www.linkedin.com/company/volkoh/"
                  className="transition-all duration-200 hover:text-primary"
                >
                  LinkedIn
                </a>
                <span className="duration-250 absolute bottom-0 left-0 mt-5 h-0.5 w-0 bg-primary transition-all group-hover:w-full "></span>
              </li>
            </ul>
          </div>
        </div>
        <Sheet>
          <SheetTrigger className="ml-auto block lg:hidden">
            <GiHamburgerMenu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className=" h-full">
              <SheetDescription className="flex h-full flex-col gap-10 pt-20 ">
                <nav className="flex h-full flex-col justify-between">
                  <ul className="item-center flex flex-col gap-5">
                    <li>
                      <Link
                        href="/work"
                        className="text-xl transition-all duration-200 hover:text-primary"
                      >
                        Our Work
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/about"
                        className="text-xl transition-all duration-200  hover:text-primary"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="text-xl transition-all duration-200  hover:text-primary"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/volkoh.design"
                        className="text-xl transition-all duration-200  hover:text-primary"
                      >
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://dribbble.com/Volkohdesign"
                        className="text-xl transition-all duration-200  hover:text-primary"
                      >
                        Dribbble
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/company/volkoh/"
                        className="text-xl transition-all duration-200  hover:text-primary"
                      >
                        LinkedIn
                      </Link>
                    </li>
                  </ul>
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
