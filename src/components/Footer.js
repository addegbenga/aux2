import React from "react";

export default function Footer() {
  return (
    <div className="px-3 pt-20 bg-black ">
      <div className="container mx-auto">
        <div className="mb-20">
          <h1 className="text-3xl font-bold text-white lg:text-6xl ">
            Ready to make something kickass?
          </h1>
          <h2 className="my-2 text-2xl font-semibold text-pink-500 lg:text-5xl">
            Let's get on a call.
          </h2>
        </div>
        <div className="justify-between lg:flex">
          <div>
            <h1 className="text-2xl text-white ">adeyem.dev</h1>
            <p className="my-2 text-white text-opacity-50">
              4354 Alakuko. Lagos, Nigeria
            </p>
            <span className="text-white text-opacity-50">
              addegbenga@gmail.com
            </span>
          </div>
          <div className="flex gap-10 my-32 text-white text-opacity-80 lg:my-0">
            <ul className="flex flex-col gap-8">
              <li>
                <a alt="about" href="#about">
                  About
                </a>
              </li>
              <li>
                <a alt="contact" href="#home">
                  Contact
                </a>
              </li>{" "}
              <li>Dribble</li>
            </ul>
            <ul className="flex flex-col gap-8">
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a
                  alt="blog"
                  target="_blank"
                  rel="noreferrer"
                  href="https://adeyemi.hashnode.dev/"
                >
                  {" "}
                  Blog
                </a>
              </li>{" "}
              <li>
                <a
                  target="_blank"
                  href="https://instagram.com/adde_gbenga"
                  alt="twitter"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-8">
              <li>
                <a href="#about">Experience</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>{" "}
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/AddeGbenga"
                  alt="twitter"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-4 pt-10 text-center lg:text-left ">
          <span className="text-sm text-white text-opacity-60">
            © All rights reserved. 2022
          </span>
        </div>
      </div>
    </div>
  );
}
