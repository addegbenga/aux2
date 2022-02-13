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
        <div className="min-h-screen relative text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed bg-black bg-opacity-80 inset-0" />
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
              className=" z-20 transform ease-out duration-100 delay-200  absolute bg-white flex items-center justify-center rounded-full z-50 right-3 h-10 w-10  top-4"
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
            <div className="w-10/12 absolute top-0  h-screen  p-6  overflow-hidden text-left transition-all transform bg-white  shadow-xl ">
              <div className="mt-10 flex flex-col gap-5 text-black">
                <h1 className="text-3xl">Home</h1>
                <h1 className="text-3xl">About</h1>
                <h1 className="text-3xl">Services</h1>
                <h1 className="text-3xl">Projects</h1>
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
