import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
export default function Blogs() {
  return (
    <div id="blog" className="px-3 bg-black -mt-60 pt-96 lg:pt-72 ">
      <div className="container justify-between mx-auto lg:flex">
        <div>
          <h1 className="text-2xl text-pink-600 lg:text-3xl">BLOGS</h1>
          <h1 className="my-3 text-3xl font-bold text-white lg:text-5xl">
            Latest Blogs
          </h1>
          <button className="flex items-center gap-2 text-white lg:text-lg">
            View all
            <HiArrowSmRight color="white" />
          </button>
        </div>
        <div>
          <div className="text-white border-b border-white my-14 pb-7 lg:max-w-2xl border-opacity-40 ">
            <p className="text-white text-opacity-70">April 16, 2021 6mins</p>
            <h1 className="my-5 text-2xl font-semibold lg:text-3xl">
              Design tips for designers, that cover everything you need Curated
              list of most use Git commands for developers.
            </h1>
            <button className="flex items-center gap-2 text-white lg:text-lg">
              <a
                alt="blog_link"
                href="https://adeyemi.hashnode.dev/git-commands"
              >
                {" "}
                Read the article
              </a>
              <HiArrowSmRight color="white" />
            </button>
          </div>
          <div className="text-white border-b border-white my-14 pb-7 lg:max-w-2xl border-opacity-40 ">
            <p className="text-white text-opacity-70">April 16, 2021 6mins</p>
            <h1 className="my-5 text-2xl font-semibold lg:text-3xl">
              Deploy your first smart contract
            </h1>
            <button className="flex items-center gap-2 text-white lg:text-lg">
              <a
                href="https://adeyemi.hashnode.dev/deploy-your-first-smart-contract"
                alt="blog_link"
              >
                {" "}
                Read the article
              </a>
              <HiArrowSmRight color="white" />
            </button>
          </div>
          <div className="text-white border-b border-white my-14 pb-7 lg:max-w-2xl border-opacity-40 ">
            <p className="text-white text-opacity-70">April 16, 2021 6mins</p>
            <h1 className="my-5 text-2xl font-semibold lg:text-3xl">
              What is the difference between web2 and web3?
            </h1>
            <button className="flex items-center gap-2 text-white lg:text-lg">
              <a
                alt="blog_title"
                href="https://adeyemi.hashnode.dev/what-is-the-difference-between-web2-and-web3"
              >
                {" "}
                Read the article
              </a>
              <HiArrowSmRight color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
