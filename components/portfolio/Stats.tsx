import React from "react";
import { FolderGit2, Code2, Clock, CheckCircle2 } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Stats() {
  if (!PROFILE.stats) return null;

  const statItems: { label: string; value: string; icon: React.ReactNode }[] = [];

  if (PROFILE.stats.projectsBuilt) {
    statItems.push({
      label: "Portfolio Projects",
      value: PROFILE.stats.projectsBuilt,
      icon: <FolderGit2 size={18} className="text-cyan-400" />,
    });
  }

  if (PROFILE.stats.technologies) {
    statItems.push({
      label: "Core Tech Stack",
      value: PROFILE.stats.technologies,
      icon: <Code2 size={18} className="text-emerald-400" />,
    });
  }

  if (PROFILE.stats.yearsExperience) {
    statItems.push({
      label: "Experience",
      value: PROFILE.stats.yearsExperience,
      icon: <Clock size={18} className="text-violet-400" />,
    });
  }

  if (PROFILE.stats.currentRole) {
    statItems.push({
      label: "Current Status",
      value: PROFILE.stats.currentRole,
      icon: <CheckCircle2 size={18} className="text-amber-400" />,
    });
  }

  if (statItems.length === 0) return null;

  return (
    <section className="relative z-10 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Key Statistics">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl shadow-2xl">
        {statItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800/50 hover:border-slate-700 transition-colors"
          >
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
              {item.icon}
            </div>
            <div className="min-w-0">
              <div className="font-bold text-white text-sm sm:text-base tracking-tight truncate">
                {item.value}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium truncate">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
