import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Navmodal from "../utils/Navmodal";
export default function Navabar() {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <Navmodal isOpen={open} handleCloseModal={handleCloseModal} />
      <nav className="w-full">
        <div className="flex px-3 py-6  border-b   w-full left-0 bg-white fixed z-10   top-0">
          <div className="flex justify-between items-center  w-full container  mx-auto">
            <h1 className="font-bold text-xl lg:text-2xl  headline font-black">
              <a href="#home">adev</a>
              <span className="headline">.</span>
            </h1>
            <div className="hidden lg:block ">
              <ul className="lg:flex font-bold gap-20">
                <a href="#about">About</a>

                <a href="#service">Services</a>

                <a href="#project">Projects</a>

                <a href="#blog">Blog</a>
              </ul>
            </div>
            <button onClick={handleOpenModal} className="lg:hidden">
              <FaBars size={22} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
