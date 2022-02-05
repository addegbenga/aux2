import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiFirebase } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { DiJavascript1 } from "react-icons/di";

export default function TrustedBy() {
  return (
    <div className="mb-24 lg:my-44 container mx-auto">
      <h1 className="text-center font-bold text-black text-opacity-70">
        MY TECHNOLOGIES
      </h1>
      <div className="grid grid-cols-3  my-10">
        <div className=" p-4 text-center flex-col border flex items-center gap-2">
          <FaReact size={30} />
          <span>REACT</span>
        </div>
        <div className=" p-4 text-center flex-col border flex items-center gap-2">
          <SiTypescript size={30} />
          <span>TYPESCRIPT</span>
        </div>{" "}
        <div className=" p-4 text-center flex-col border flex items-center gap-2">
          <DiJavascript1 size={30} />
          <span>JAVASCRIPT</span>
        </div>
        <div className=" p-4 text-center flex-col border flex items-center gap-2">
          <SiFirebase size={30} />
          <span>FIREBASE</span>
        </div>
        <div className=" p-4 text-center flex-col border flex items-center gap-2">
          <FaReact size={30} />
          <span>TAILWIND</span>
        </div>
        <div className=" p-4 text-center flex-col border flex items-center gap-2">
          <IoLogoNodejs size={30} />
          <span>NODEJS</span>
        </div>
      </div>
    </div>
  );
}
