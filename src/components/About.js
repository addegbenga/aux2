import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
export default function About() {
  return (
    <div id="about" className="container px-3 py-20 mx-auto bg-white lg:my-10">
      <div className="items-end justify-between lg:flex lg:mb-20">
        <div>
          <h1 className="text-2xl font-semibold headline lg:text-3xl">
            FRONˇTEND DEVELOPER
          </h1>
          <h1 className="my-2 text-3xl font-bold lg:text-5xl lg:my-4">
            That's me!
          </h1>
        </div>
        <p className="my-7 lg:max-w-2xl lg:text-xl">
          Over the past 3 years, I've worked with a diverse range of clients,
          from startups to growing companies. I love crafting interfaces that
          delight users and help businesses grow.
        </p>
        <button className="p-4 px-6 text-white bg-black lg:hidden">
          Download cv
        </button>
      </div>
      <div className="grid gap-3 my-10 lg:grid-cols-3 ">
        <div className="">
          <img
            className="object-cover w-full h-72 lg:h-full"
            src="/assets/dummy1.png"
            alt="dummy pic"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-0">
          <img className="lg:h-full" src="/assets/dummy2.png" alt="dummy pic" />
          <img className="lg:h-full" src="/assets/dummy3.png" alt="dummy pic" />
        </div>

        <div>
          <img
            className="object-cover w-full h-72 lg:h-full"
            src="/assets/dummy4.png"
            alt="dummy pic"
          />
        </div>
      </div>

      {/* Experience and educations container */}
      <div className="lg:flex lg:gap-12 ">
        {/*   */}
        <div className="my-20 lg:w-1/2 ">
          <h1 className="text-2xl font-semibold lg:text-4xl">Education</h1>
          <div className="flex justify-between py-8 border-b lg:gap-6">
            <div className="flex flex-col gap-3 lg:w-full lg:justify-between lg:items-end lg:flex-row">
              <div>
                <h1 className="text-xl lg:text-2xl">Fashion school</h1>
                <p>Trainee (Fabric Designer)</p>
              </div>

              <ul className="px-4 mt-4 list-disc">
                <li>2014-2015</li>
              </ul>
            </div>
            <span>
              <RiArrowRightUpLine size={24} />
            </span>
          </div>
          <div className="flex justify-between py-8 border-b lg:gap-6">
            <div className="flex flex-col gap-3 lg:w-full lg:justify-between lg:items-end lg:flex-row">
              <div>
                <h1 className="text-xl lg:text-2xl">Federal university</h1>
                <p>Bsc (Earth Science)</p>
              </div>

              <ul className="px-4 mt-4 list-disc">
                <li>2015-2022</li>
              </ul>
            </div>
            <span>
              <RiArrowRightUpLine size={24} />
            </span>
          </div>{" "}
          <div className="flex justify-between py-8 border-b lg:gap-6">
            <div className="flex flex-col gap-3 lg:w-full lg:justify-between lg:items-end lg:flex-row">
              <div>
                <h1 className="text-xl lg:text-2xl">Federal university</h1>
                <p>Msc (Information technology)</p>
              </div>

              <ul className="px-4 mt-4 list-disc">
                <li>2022-2022</li>
              </ul>
            </div>
            <span>
              <RiArrowRightUpLine size={24} />
            </span>
          </div>
        </div>
        {/* work section */}
        <div className="my-20 lg:w-1/2">
          <h1 className="text-2xl font-semibold lg:text-4xl">
            Work Experience
          </h1>
          <div className="flex justify-between py-8 border-b lg:gap-6">
            <div className="flex flex-col gap-2 lg:w-full lg:justify-between lg:items-end lg:flex-row">
              <div className="flex gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-red-200 rounded-full">
                  M
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl lg:text-2xl">Montech studios</h1>
                  <p>Quality assurance</p>
                </div>
              </div>
              <ul className="px-4 mt-4 list-disc lg:text-right">
                <li>2022 - 2022</li>
              </ul>
            </div>
            <span>
              <RiArrowRightUpLine size={24} />
            </span>
          </div>
          <div className="flex justify-between py-8 border-b lg:gap-6">
            <div className="flex flex-col gap-2 lg:w-full lg:justify-between lg:items-end lg:flex-row">
              <div className="flex gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
                  L
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl lg:text-2xl">Lenx</h1>
                  <p>Full stack developer</p>
                </div>
              </div>
              <ul className="px-4 mt-4 list-disc lg:text-right">
                <li>2020 - 2021 </li>
              </ul>
            </div>
            <span>
              <RiArrowRightUpLine size={24} />
            </span>
          </div>{" "}
          <div className="flex justify-between py-8 border-b lg:gap-6">
            <div className="flex flex-col gap-2 lg:w-full lg:justify-between lg:items-end lg:flex-row">
              <div className="flex gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                  U
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl lg:text-2xl">Upwork Freelancer</h1>
                  <p>Frontend developer</p>
                </div>
              </div>
              <ul className="px-4 mt-4 list-disc lg:text-right">
                <li>2019 - 2021</li>
              </ul>
            </div>
            <span>
              <RiArrowRightUpLine size={24} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
