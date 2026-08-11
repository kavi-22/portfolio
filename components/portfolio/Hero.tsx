"use client";

import React from "react";
import { ArrowRight, Sparkles, Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";
import { PROFILE } from "@/data/profile";
import CodeWindow from "./CodeWindow";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 grid-background opacity-60 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-emerald-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status / Availability Pill */}
            {PROFILE.availability && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-md">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{PROFILE.availability}</span>
              </div>
            )}

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Hi, I&apos;m <span className="text-gradient">{PROFILE.name}</span>
              </h1>
              <div className="text-xl sm:text-2xl font-semibold text-slate-300">
                {PROFILE.role}
              </div>
            </div>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {PROFILE.bio}
            </p>

            {/* Currently Working With Pills */}
            <div className="pt-2">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {PROFILE.currentlyWorkingWith.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                type="button"
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-semibold text-sm transition-all shadow-glow-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <span>View My Work</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-medium text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Mail size={16} className="text-cyan-400" />
                <span>Contact Me</span>
              </button>

              {PROFILE.resumeUrl && (
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/40 hover:bg-slate-800/80 border border-slate-800/80 text-slate-400 hover:text-slate-200 font-medium text-sm transition-all"
                  aria-label="Download Resume"
                >
                  <FileText size={16} />
                  <span>Resume</span>
                </a>
              )}
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-3 pt-3">
              <span className="text-xs font-mono text-slate-500">Connect:</span>
              {PROFILE.social.github && (
                <a
                  href={PROFILE.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
              )}
              {PROFILE.social.linkedin && (
                <a
                  href={PROFILE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {PROFILE.social.email && (
                <a
                  href={PROFILE.social.email}
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all"
                  aria-label="Send Email"
                >
                  <Mail size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Code Window Preview */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <CodeWindow />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-12">
          <button
            type="button"
            onClick={() => handleScrollTo("about")}
            className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-colors group focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <span className="text-[11px] font-mono tracking-wider uppercase">Explore</span>
            <ChevronDown size={18} className="animate-bounce group-hover:text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
