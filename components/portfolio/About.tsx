import React from "react";
import {
  User,
  GraduationCap,
  MapPin,
  Sparkles,
  Github,
  FileText,
  Compass,
  ArrowRight,
  Code2,
  Cpu
} from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <User size={13} />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background, Specialization &amp; Engineering Philosophy
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Visual Profile Card & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md relative overflow-hidden shadow-card-subtle">
              {/* Subtle top border gradient */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-cyan-500 via-emerald-500 to-transparent" />

              {/* Developer Avatar Representation */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center text-2xl shadow-inner">
                  👨‍💻
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{PROFILE.name}</h3>
                  <p className="text-xs font-mono text-cyan-400">{PROFILE.role}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{PROFILE.location}</p>
                </div>
              </div>

              {/* Quick Info Items */}
              <div className="space-y-3 border-t border-slate-800/80 pt-4 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-slate-800/40">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <GraduationCap size={14} className="text-emerald-400" />
                    Education
                  </span>
                  <span className="text-slate-200 font-medium text-right">B.Sc. CS · Annamalai Univ.</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/40">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <MapPin size={14} className="text-cyan-400" />
                    Location
                  </span>
                  <span className="text-slate-200 font-medium">India (Open to Remote)</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-amber-400" />
                    Status
                  </span>
                  <span className="text-emerald-300 font-medium">{PROFILE.availability || "Open"}</span>
                </div>
              </div>

              {/* Action Buttons inside Card */}
              <div className="pt-6 flex items-center gap-3">
                {PROFILE.resumeUrl && (
                  <a
                    href={PROFILE.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-white transition-all"
                  >
                    <FileText size={14} className="text-cyan-400" />
                    <span>Download CV</span>
                  </a>
                )}
                {PROFILE.social.github && (
                  <a
                    href={PROFILE.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all"
                    aria-label="GitHub Profile"
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>
            </div>

            {/* Target Opportunities Box */}
            <div className="p-5 rounded-2xl bg-[#0b1120] border border-slate-800/90 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Compass size={14} className="text-cyan-400" />
                <span>Target Opportunities</span>
              </div>
              <div className="space-y-2">
                {PROFILE.lookingFor.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Technical Focus */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-5">
              <h3 className="text-xl font-bold text-white">
                Building purposeful digital solutions with clean architecture
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {PROFILE.summary}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-sm text-cyan-300">
                    <Code2 size={16} />
                    <span>Frontend Engineering</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Crafting responsive, accessible UIs using Next.js App Router, React 19, TypeScript, and modern CSS frameworks.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-sm text-emerald-300">
                    <Cpu size={16} />
                    <span>Systems &amp; APIs</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Integrating RESTful endpoints, state orchestration, serverless route handlers, and data structures.
                  </p>
                </div>
              </div>

              {/* What I'm Learning Pill strip */}
              {PROFILE.currentlyLearning.length > 0 && (
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Currently Expanding Knowledge In:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PROFILE.currentlyLearning.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md bg-emerald-950/30 border border-emerald-500/20 text-xs font-mono text-emerald-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
