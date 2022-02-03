import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import "./style.css";

export default function Hero() {
  return (
    <div className="px-3">
      <div className="my-36 mb-0">
        <h1 className="text-4xl font-extrabold">
          <span className="text-pink-400 headline">I design products</span> that
          delight and inspire people.{" "}
        </h1>
        <p className="my-6 mb-10">
          Hi! I'm jake, a frontend developer based in nigeria. Icreate
          user-frindly interfaces for fast growing and established companies
        </p>
        <button className="bg-black shadow gap-2 flex items-center rounded text-white p-5 px-10">
          <FiPhoneCall />
          <span>Book a call</span>
        </button>
      </div>
      <div className="flex my-14 justify-center">
        <img className="w-2/3" src="/assets/dope9.webp" alt="png" />
      </div>
    </div>
  );
}
