import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import "./style.css";

export default function Hero() {
  return (
    <div
      id="home"
      className="px-3  mt-36 lg:mt-16 lg:flex lg:items-center justify-between container mx-auto lg:gap-12"
    >
      <div className=" lg:mt-32 mb-0 lg:max-w-3xl">
        <h1 className="text-[2.5rem] leading-[3.3rem] lg:leading-[6rem] lg:text-[5.1rem] lg:fontbold font-extrabold">
          <span className="text-black headline">I build products</span> that
          solves user's problems.
        </h1>
        <p className="my-6 lg:text-xl mb-10">
          Hi! I'm Ade, a full stack developer based in nigeria. I create
          user-friendly interfaces for fast growing and established companies
        </p>
        <div className="flex gap-2 ">
          <button className="bg-black shadow gap-1 flex items-center rounded text-white lg:p-4  lg:px-10 p-4 px-10">
            <a href="mailto:addegbenga@gmail.com">Book a call</a>
          </button>
          <button className="border gap-2 shadow flex items-center rounded lg:p-4 lg:px-10 text-black p-2 px-6">
            <span>
              <a href="#project">explore</a>
            </span>
            <MdArrowRightAlt />
          </button>
        </div>
      </div>
      <div className="flex  lg:hidden my-14 justify-center">
        <img className="w-2/3" src="/assets/dope9.webp" alt="png" />
      </div>
      <div className="flex hidden lg:block mb-20   lg:my-14 justify-center">
        <img className="w-1/2 lg:w-full " src="/assets/hero.png" alt="png" />
      </div>
    </div>
  );
}
