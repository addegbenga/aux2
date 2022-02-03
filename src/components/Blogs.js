import React from "react";

export default function Blogs() {
  return (
    <div className="bg-black  px-3 -mt-44 py-80 ">
      <div>
        <h1 className="text-pink-600 text-2xl">My blog page</h1>
        <h1 className="text-3xl text-white my-3 font-bold">Latest Blogs</h1>
        <button className="text-white">view all</button>
        <div className="text-white my-14 border-b pb-7 border-opacity-40 border-white ">
          <p className="text-white text-opacity-70">April 16, 2021 6mins</p>
          <h1 className="text-2xl my-5 font-semibold">
            Design tips for designers, that cover evrthing you need
          </h1>
          <button>Read the article</button>
        </div>
      </div>
    </div>
  );
}
