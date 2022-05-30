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
      <nav className="w-full bg-white">
        <div className="fixed top-0 left-0 z-10 flex w-full px-3 py-6 bg-white border-b">
          <div className="container flex items-center justify-between w-full mx-auto">
            <h1 className="text-xl font-bold font-black lg:text-2xl headline">
              <a href="#home">adev</a>
              <span className="headline">.</span>
            </h1>
            <div className="hidden lg:block ">
              <ul className="gap-20 font-bold lg:flex">
                <a href="#about">About</a>

                <a href="#service">Services</a>

                <a href="#project">Projects</a>

                <a href="#blog">Blog</a>
              </ul>
            </div>
            {open ? null : (
              <button onClick={handleOpenModal} className="lg:hidden">
                <FaBars size={20} />
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
