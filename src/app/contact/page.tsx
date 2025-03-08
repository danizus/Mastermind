import React from "react";
import InsidePagesHero from "../components/work/InsidePagesHero";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Button } from "@/components/ui/button";

export default function page () {
  return (
    <>
      <Header />
      <InsidePagesHero
        label="A passionate team,
rooted in digital."
      />
      <main className="container mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h1 className="mb-12 mt-5 text-2xl md:text-5xl font-medium">Connect with us</h1>
        
          </div>
          <form>
            <div className="mb-14">
              <label className="mb-3 block text-xl md:text-2xl font-medium" htmlFor="name">
                What’s your name?
              </label>
              <input
                className="border-b-solid w-full border-b-2 border-b-[#DEE1E4] py-2 outline-none placeholder:text-lg placeholder:font-light"
                placeholder="Full name"
                type="text"
                name="name"
              />
            </div>
            <div className="mb-14">
              <label htmlFor="email" className=" text-xl md:text-2xl font-medium">
        What’s your email address?
              </label>
              <input
                className="border-b-solid w-full border-b-2 border-b-[#DEE1E4] py-2 outline-none placeholder:text-lg placeholder:font-light"
                placeholder="Email address"
                type="email"
                name="email"
              />
            </div>
            <div className="mb-14">
              <label htmlFor="message" className="text-xl md:text-2xl font-medium">
   
                Tell us about your project
              </label>
              <textarea
                className="border-b-solid w-full border-b-2 border-b-[#DEE1E4] py-2 outline-none placeholder:text-lg placeholder:font-light"
                name="message"
                id="message"
                placeholder="Message"
              ></textarea>
            </div>
            <Button type="submit" className="rounded-full text-sm font-light py-6 px-8 hover:bg-[#2c30a0]">
                Send Inquiry +
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
