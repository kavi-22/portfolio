import React from "react";
import { GraduationCap, Calendar, MapPin, BookOpen, Star } from "lucide-react";
import { EDUCATION_LIST } from "@/data/education";

export default function Education() {
  if (EDUCATION_LIST.length === 0) return null;

  return (
    <section id="education" className="py-24 relative bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-xs font-mono text-indigo-300 mb-3">
            <GraduationCap size={13} />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Background
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Rigorous Computer Science academic training encompassing algorithms, systems, and software engineering.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl">
          {EDUCATION_LIST.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/90 backdrop-blur-md relative overflow-hidden shadow-card-subtle"
            >
              {/* Top gradient border */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-slate-400">
                    <span className="text-indigo-400 font-medium">{edu.institution}</span>
                    {edu.location && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin size={13} />
                          {edu.location}
                        </span>
                      </>
                    )}
                    {edu.grade && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-emerald-400 font-medium">{edu.grade}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300 self-start">
                  <Calendar size={13} className="text-indigo-400" />
                  <span>{edu.duration}</span>
                </div>
              </div>

              {/* Coursework */}
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mb-6 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <BookOpen size={13} className="text-cyan-400" />
                    Core Coursework &amp; Topics:
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-300 font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                    <Star size={13} className="text-amber-400" />
                    Academic Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <span className="text-indigo-400 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
