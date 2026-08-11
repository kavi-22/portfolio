import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Stats from "@/components/portfolio/Stats";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Achievements from "@/components/portfolio/Achievements";
import CurrentlyLearning from "@/components/portfolio/CurrentlyLearning";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="relative flex-1">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <CurrentlyLearning />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
