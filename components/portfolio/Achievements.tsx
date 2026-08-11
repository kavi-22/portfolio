import React from "react";
import { Award, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/achievements";

export default function Achievements() {
  if (!ACHIEVEMENTS || ACHIEVEMENTS.length === 0) return null;

  return (
    <section id="achievements" className="py-20 relative bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-xs font-mono text-amber-300 mb-3">
            <Award size={13} />
            <span>HONORS &amp; RECOGNITION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Awards &amp; Milestones
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-amber-400 flex items-center gap-1">
                    <Calendar size={12} />
                    {item.date}
                  </span>
                  {item.issuer && (
                    <span className="text-xs font-mono text-slate-400">
                      {item.issuer}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>

              {item.credentialUrl && (
                <div className="pt-4 mt-4 border-t border-slate-800/60 flex justify-end">
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Credential / Repo</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
