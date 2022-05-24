import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";
export default function Navmodal({ isOpen, handleCloseModal }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20 overflow-y-auto"
        onClose={handleCloseModal}
      >
        <div className="relative min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0  scale-75 transform "
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="  scale-75  transform"
          >
            <button
              onClick={handleCloseModal}
              className="absolute z-20 z-50 flex items-center justify-center w-10 h-10 duration-100 ease-out delay-200 transform bg-white rounded-full right-3 top-4"
            >
              <FaTimes />
            </button>
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0  -translate-x-44 transform"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="  -translate-x-44 transform"
          >
            <div className="absolute top-0 w-10/12 h-screen p-6 overflow-hidden text-left transition-all transform bg-white shadow-xl ">
              <div className="flex flex-col gap-5 mt-10 text-black">
                <h1 onClick={handleCloseModal} className="text-3xl">
                  <a href="#home">Home</a>
                </h1>
                <h1 onClick={handleCloseModal} className="text-3xl">
                  <a href="#about">About</a>
                </h1>
                <h1 onClick={handleCloseModal} className="text-3xl">
                  <a href="#service">Services</a>
                </h1>
                <h1 onClick={handleCloseModal} className="text-3xl">
                  Projects
                  <a href="#project">Projects</a>
                </h1>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-10 py-4 text-sm font-medium text-white bg-black border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={handleCloseModal}
                >
                  Contact me
                </button>
              </div>
            </div>
            {/* </div> */}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
