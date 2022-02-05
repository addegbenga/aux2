import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiArrowSmRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div className="px-3 lg:mt-40 container mx-auto">
      <div>
        <div className="lg:flex justify-between items-center lg:my-14">
          <div>
            <h2 className="text-xl font-semibold headline lg:text-3xl my-3 lg:my-6">
              PROJECTS
            </h2>
            <h1 className="text-3xl lg:text-5xl font-bold">I Bring Results.</h1>
            <h1 className="text-3xl  lg:text-5xl font-bold">
              My clients are the proof.
            </h1>
          </div>

          <button className="bg-black text-white p-5 px-6 my-6 mb-10">
            View all projects
          </button>
        </div>

        <div className="relative flex gap-5">
          <div className=" border bg-white">
            <img className="h-80" src="/assets/banner.png" alt="banner" />
            <div className="my-10 mt-7 px-4">
              <h1 className="font-semibold headline">WEB DESIGN</h1>
              <h1 className="my-4 font-bold text-black text-opacity-60">
                joggr Website Design
              </h1>
              <button className="flex items-center gap-2">
                View project
                <HiArrowSmRight />
              </button>
            </div>
          </div>
          <div className=" border hidden lg:block bg-white">
            <img className="h-80" src="/assets/banner.png" alt="banner" />
            <div className="my-10 mt-7 px-4">
              <h1 className="font-semibold headline">WEB DESIGN</h1>
              <h1 className="my-4 font-bold text-black text-opacity-60">
                joggr Website Design
              </h1>
              <button className="flex items-center gap-2">
                View project
                <HiArrowSmRight />
              </button>
            </div>
          </div>
          <div className=" border hidden lg:block bg-white">
            <img className="h-80" src="/assets/banner.png" alt="banner" />
            <div className="my-10 mt-7 px-4">
              <h1 className="font-semibold headline">WEB DESIGN</h1>
              <h1 className="my-4 font-bold text-black text-opacity-60">
                joggr Website Design
              </h1>
              <button className="flex items-center gap-2">
                View project
                <HiArrowSmRight />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button className="bg-white p-3">
            <MdKeyboardArrowLeft size={24} />
          </button>
          <button className="bg-white p-3">
            <MdKeyboardArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
