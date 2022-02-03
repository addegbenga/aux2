import React from "react";
import "../components/style.css";
import Hero from "../components/Hero";
import Navbar from "../components/Navabar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import TrustedBy from "../components/TrustedBy";
import Blogs from "../components/Blogs";
import About from "../components/About";

export default function Landing() {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Projects />
      <Blogs />
      <About />
    </div>
  );
}
