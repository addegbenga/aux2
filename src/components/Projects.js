import React from "react";

export default function Projects() {
  return (
    <div className="px-3">
      <div>
        <h2 className="text-xl font-semibold headline my-3">PROJECTS</h2>
        <h1 className="text-3xl font-bold">I Bring Results.</h1>
        <h1 className="text-3xl font-bold">My clients are the proof.</h1>
        <button className="bg-black text-white p-5 px-6 my-6 mb-10">
          View all projects
        </button>
        <div className="relative bg-white">
          <div className=" border">
            <img className="h-80" src="/assets/banner.png" alt="banner" />
            <div className="my-10 mt-7 px-4">
              <h1>WEB DESIGN</h1>
              <h1 className="my-4">joggr Website Design</h1>
              <button>View project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
