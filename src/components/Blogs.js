import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
export default function Blogs() {
  return (
    <div id="blog" className="bg-black   px-3 -mt-60 pt-96 lg:pt-72 ">
      <div className="container lg:flex justify-between mx-auto">
        <div>
          <h1 className="text-pink-600 text-2xl lg:text-3xl">BLOGS</h1>
          <h1 className="text-3xl text-white my-3 font-bold lg:text-5xl">
            Latest Blogs
          </h1>
          <button className="flex lg:text-lg text-white items-center gap-2">
            View all
            <HiArrowSmRight color="white" />
          </button>
        </div>
        <div>
          <div className="text-white my-14 border-b pb-7 lg:max-w-2xl border-opacity-40 border-white ">
            <p className="text-white text-opacity-70">April 16, 2021 6mins</p>
            <h1 className="text-2xl my-5 font-semibold lg:text-3xl">
              Design tips for designers, that cover everything you need
            </h1>
            <button className="flex lg:text-lg text-white items-center gap-2">
              Read the article
              <HiArrowSmRight color="white" />
            </button>
          </div>
          <div className="text-white my-14 border-b pb-7 lg:max-w-2xl border-opacity-40 border-white ">
            <p className="text-white text-opacity-70">April 16, 2021 6mins</p>
            <h1 className="text-2xl my-5 font-semibold lg:text-3xl">
              Introduction to web3 development
            </h1>
            <button className="flex lg:text-lg text-white items-center gap-2">
              Read the article
              <HiArrowSmRight color="white" />
            </button>
          </div>
          <div className="text-white my-14 border-b pb-7 lg:max-w-2xl border-opacity-40 border-white ">
            <p className="text-white text-opacity-70">April 16, 2021 6mins</p>
            <h1 className="text-2xl my-5 font-semibold lg:text-3xl">
              Starting your journey as a web developer
            </h1>
            <button className="flex lg:text-lg text-white items-center gap-2">
              Read the article
              <HiArrowSmRight color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
