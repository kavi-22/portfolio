import React from "react";
import { BookOpen, Sparkles, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function CurrentlyLearning() {
  if (!PROFILE.currentlyLearning || PROFILE.currentlyLearning.length === 0) return null;

  return (
    <section className="py-16 relative border-t border-slate-800/60 bg-[#080d1a]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <BookOpen size={14} />
              <span>Continuous Growth</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Currently Expanding Engineering Frontiers
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Actively exploring new paradigms, systems architecture, and modern full-stack workflows to solve complex software problems.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 max-w-lg">
            {PROFILE.currentlyLearning.map((topic) => (
              <div
                key={topic}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-medium text-slate-200 hover:border-emerald-500/40 transition-colors"
              >
                <Sparkles size={12} className="text-emerald-400 shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
