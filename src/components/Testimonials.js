import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Testimonials() {
  return (
    <div className="container px-3 mx-auto mb-44">
      <div>
        <h1 className="text-2xl font-semibold headline lg:text-3xl">
          TESTIMONIALS
        </h1>
        <h1 className="my-3 text-3xl font-bold lg:text-5xl">
          Word on the street
        </h1>
        <div className="gap-20 mt-20 lg:flex">
          <img
            className="lg:w-[25rem]"
            src="/assets/testify1.jpeg"
            alt="testify"
          />
          <div className="justify-between lg:flex lg:flex-col">
            <div className="my-10">
              <svg
                width="49"
                height="42"
                viewBox="0 0 49 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.11084 41.9398V21.3683C0.11084 10.0246 9.33851 0.796875 20.6823 0.796875V7.65407C13.1204 7.65407 6.96803 13.8064 6.96803 21.3683H20.6823V41.9398H0.11084ZM48.1109 0.796875V7.65407C40.549 7.65407 34.3966 13.8064 34.3966 21.3683H48.1109V41.9398H27.5394V21.3683C27.5394 10.0246 36.7671 0.796875 48.1109 0.796875Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-9.1641"
                    y1="41.9398"
                    x2="50.5706"
                    y2="11.0026"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.197917" stop-color="#B16CEA" />
                    <stop offset="0.557292" stop-color="#FF5E69" />
                    <stop offset="0.828125" stop-color="#FF8A56" />
                    <stop offset="1" stop-color="#FFA84B" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-2xl my-6 font-bold lg:leading-[3rem] lg:text-[2.7rem]">
                Jade helped us build a software so intuitive that it didn't need
                a walkthrough. He solved complex problems with the best tools.
              </p>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold lg:text-xl">John franklin</h1>
                <p className="lg:text-xl">Founder</p>
              </div>
              <div className="flex justify-end">
                <button className="p-3 bg-black">
                  <MdKeyboardArrowLeft color="white" size={24} />
                </button>
                <button className="p-3 bg-black">
                  <MdKeyboardArrowRight color="white" size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
