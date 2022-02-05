import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
export default function About() {
  return (
    <div id="about" className="bg-white lg:my-10 container mx-auto py-20 px-3">
      <div className="lg:flex lg:mb-20 justify-between items-end">
        <div>
          <h1 className="text-2xl font-semibold headline  lg:text-3xl">
            FRONˇTEND DEVELOPER
          </h1>
          <h1 className="text-3xl lg:text-5xl font-bold my-2 lg:my-4">
            That's me!
          </h1>
        </div>
        <p className="my-7 lg:max-w-2xl lg:text-xl">
          Over the past 12 years, I've worked with a diverse range of clients,
          from startups to Fortune 500 companies. I love crafting interfaces
          that delight users and help businesses grow.
        </p>
        <button className="bg-black lg:hidden text-white p-4 px-6">
          Download cv
        </button>
      </div>
      <div className="grid gap-3 lg:grid-cols-3 my-10 ">
        <div className="">
          <img
            className="h-72 lg:h-full w-full object-cover"
            src="/assets/dummy1.png"
            alt="dummy pic"
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-0">
          <img className="lg:h-full" src="/assets/dummy2.png" alt="dummy pic" />
          <img className="lg:h-full" src="/assets/dummy3.png" alt="dummy pic" />
        </div>

        <div>
          <img
            className="h-72 lg:h-full w-full object-cover"
            src="/assets/dummy4.png"
            alt="dummy pic"
          />
        </div>
      </div>

      {/* Experience and educations container */}
      <div className="lg:flex lg:gap-12   ">
        {/* educations section */}
        <div className="my-20 lg:w-1/2 ">
          <h1 className="text-2xl lg:text-4xl font-semibold">Education</h1>
          <div className="flex lg:gap-6   justify-between border-b py-8">
            <div className="flex lg:w-full lg:justify-between lg:items-end lg:flex-row  flex-col lg:flex-row gap-3">
              <div>
                <h1 className="text-xl lg:text-2xl">Stanford university</h1>
                <p>Msc (Human Computer interaction)</p>
              </div>

              <ul className="list-disc px-4 mt-4">
                <li>2013-2015</li>
              </ul>
            </div>
            <span>
              <RiArrowRightUpLine size={24} />
            </span>
          </div>
          <div className="flex lg:gap-6   justify-between border-b py-8">
            <div className="flex lg:w-full lg:justify-between lg:items-end lg:flex-row  flex-col lg:flex-row gap-3">
              <div>
                <h1 className="text-xl lg:text-2xl">Stanford university</h1>
                <p>Msc (Human Computer interaction)</p>
              </div>

              <ul className="list-disc px-4 mt-4">
                <li>2013-2015</li>
              </ul>
            </div>
            <span>
              <RiArrowRightUpLine size={24} />
            </span>
          </div>{" "}
          <div className="flex lg:gap-6   justify-between border-b py-8">
            <div className="flex lg:w-full lg:justify-between lg:items-end lg:flex-row  flex-col lg:flex-row gap-3">
              <div>
                <h1 className="text-xl lg:text-2xl">Stanford university</h1>
                <p>Msc (Human Computer interaction)</p>
              </div>

              <ul className="list-disc px-4 mt-4">
                <li>2013-2015</li>
              </ul>
            </div>
            <span>
              <RiArrowRightUpLine size={24} />
            </span>
          </div>
        </div>
        {/* work section */}
        <div className="my-20 lg:w-1/2">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            Work Experience
          </h1>
          <div className="flex lg:gap-6    justify-between  border-b py-8">
            <div className="flex  flex-col lg:w-full lg:justify-between lg:items-end lg:flex-row gap-2">
              <div className="flex gap-3">
                <div className="h-10 w-10 flex items-center justify-center bg-red-200 rounded-full">
                  M
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl lg:text-2xl">Montech studios</h1>
                  <p>Quality assurance</p>
                </div>
              </div>
              <ul className="list-disc text-right px-4 mt-4">
                <li>2013-2015 - current</li>
              </ul>
            </div>
            <span>
              <RiArrowRightUpLine size={24} />
            </span>
          </div>
          <div className="flex lg:gap-6    justify-between  border-b py-8">
            <div className="flex  flex-col lg:w-full lg:justify-between lg:items-end lg:flex-row gap-2">
              <div className="flex gap-3">
                <div className="h-10 w-10 flex items-center justify-center bg-red-200 rounded-full">
                  M
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl lg:text-2xl">Lenx</h1>
                  <p>Full stack developer</p>
                </div>
              </div>
              <ul className="list-disc text-right px-4 mt-4">
                <li>2013-2015 - current</li>
              </ul>
            </div>
            <span>
              <RiArrowRightUpLine size={24} />
            </span>
          </div>{" "}
          <div className="flex lg:gap-6    justify-between  border-b py-8">
            <div className="flex  flex-col lg:w-full lg:justify-between lg:items-end lg:flex-row gap-2">
              <div className="flex gap-3">
                <div className="h-10 w-10 flex items-center justify-center bg-red-200 rounded-full">
                  M
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl lg:text-2xl">Upwork Freelancer</h1>
                  <p>Frontend developer</p>
                </div>
              </div>
              <ul className="list-disc text-right px-4 mt-4">
                <li>2013-2015 - current</li>
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
