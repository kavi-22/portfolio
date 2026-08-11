import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import { EXPERIENCES } from "@/data/experience";

export default function Experience() {
  if (EXPERIENCES.length === 0) return null;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Briefcase size={13} />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience &amp; Roles
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Practical web engineering experience delivering responsive applications and client solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-8 before:w-[2px] before:bg-gradient-to-b before:from-cyan-500/50 before:via-slate-800 before:to-transparent">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-16 group">
              {/* Timeline marker */}
              <div className="absolute left-[3px] md:left-[23px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-glow-cyan transition-all duration-300" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md hover:border-slate-700 transition-all duration-300 shadow-card-subtle">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs sm:text-sm text-slate-400">
                      <span className="text-cyan-400 font-medium">{exp.company}</span>
                      {exp.employmentType && (
                        <>
                          <span className="text-slate-600">•</span>
                          <span>{exp.employmentType}</span>
                        </>
                      )}
                      {exp.location && (
                        <>
                          <span className="text-slate-600">•</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} className="text-slate-500" />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300 self-start sm:self-auto">
                    <Calendar size={12} className="text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description if provided */}
                {exp.description && (
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {exp.description}
                  </p>
                )}

                {/* Key Responsibilities */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Key Deliverables &amp; Responsibilities:
                    </span>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievements if provided */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="space-y-2 mb-6 p-4 rounded-xl bg-slate-950/40 border border-slate-800/80">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-2">
                      <Award size={14} />
                      Key Milestones:
                    </span>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-amber-400">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies used */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-xs font-mono text-slate-500 mr-1">Stack:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/60 text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
