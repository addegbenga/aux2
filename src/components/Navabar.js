import React from "react";
import { FaBars } from "react-icons/fa";
export default function Navabar() {
  return (
    <nav className="w-full">
      <div className="flex px-3 py-6  border-b   w-full left-0 bg-white fixed z-10   top-0">
        <div className="flex justify-between items-center  s w-full container  mx-auto">
          <h1 className="font-bold text-xl lg:text-2xl  headline font-black">
            adeyemi<span className="headline">.</span>
          </h1>
          <div className="hidden lg:block ">
            <ul className="lg:flex font-bold gap-20">
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Blog</li>
            </ul>
          </div>
          <span className="lg:hidden">
            <FaBars size={22} />
          </span>
        </div>
      </div>
    </nav>
  );
}
