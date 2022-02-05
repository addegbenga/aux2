import React from "react";
import "../components/style.css";
import Hero from "../components/Hero";
import Navbar from "../components/Navabar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import TrustedBy from "../components/TrustedBy";
import Blogs from "../components/Blogs";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className=" ">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Projects />
      <Blogs />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}
