import React from "react";
import { FaBars } from "react-icons/fa";
export default function Navabar() {
  return (
    <nav className=" border-b bg-white fixed top-0 w-full">
      <div className="flex px-3 py-6  justify-between items-center ">
        <h1 className="font-bold text-xl headline font-black">
          adeyemi<span className="headline">.</span>
        </h1>
        <div className="hidden">
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
        <span>
          <FaBars size={22} />
        </span>
      </div>
    </nav>
  );
}
