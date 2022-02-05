import React from "react";

export default function Footer() {
  return (
    <div className="bg-black pt-20 px-3 ">
      <div className="container mx-auto">
        <div className="mb-20">
          <h1 className="text-white text-3xl lg:text-6xl font-bold ">
            Ready to make something kickass?
          </h1>
          <h2 className="text-pink-500 my-2 lg:text-5xl text-2xl font-semibold">
            Let's get on a call.
          </h2>
        </div>
        <div className=" lg:flex justify-between ">
          <div>
            <h1 className="text-white text-2xl ">adeyem.dev</h1>
            <p className="text-white text-opacity-50 my-2">
              4354 Delewrae Avenue. San Francisco,USA
            </p>
            <span className="text-white text-opacity-50">hi@thefolio.com</span>
          </div>
          <div className="text-white text-opacity-80 flex gap-10 my-32 lg:my-0">
            <ul className="flex flex-col gap-8">
              <li>About</li>
              <li>Contact</li> <li>Dribble</li>
            </ul>
            <ul className="flex gap-8 flex-col">
              <li>Services</li>
              <li>Blog</li> <li>Instagram</li>
            </ul>
            <ul className="flex gap-8 flex-col">
              <li>Experience</li>
              <li>Projects</li> <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="pt-10 text-center lg:text-left py-4 ">
          <span className="text-white text-sm  text-opacity-60">
            © All rights reserved. 2020
          </span>
        </div>
      </div>
    </div>
  );
}
