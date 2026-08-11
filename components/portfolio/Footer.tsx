"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, FileText, Heart } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { NAV_LINKS, SOCIAL_LINKS } from "@/data/social";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060a12] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Top gradient glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          {/* Brand and Summary */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-500 p-[1px]">
                <div className="w-full h-full bg-[#090d16] rounded-[7px] flex items-center justify-center font-mono font-bold text-white text-xs">
                  {PROFILE.name.charAt(0)}
                </div>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                {PROFILE.name}
                <span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {PROFILE.secondaryRole || PROFILE.role} — focused on building high-performance, responsive web applications and reliable interfaces.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-300 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Resume */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block">
              Connect
            </span>
            <div className="flex items-center gap-2.5">
              {PROFILE.social.github && (
                <a
                  href={PROFILE.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
              )}
              {PROFILE.social.linkedin && (
                <a
                  href={PROFILE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              )}
              {PROFILE.social.email && (
                <a
                  href={PROFILE.social.email}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              )}
            </div>

            {PROFILE.resumeUrl && (
              <div className="pt-2">
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <FileText size={13} className="text-cyan-400" />
                  <span>Download Curriculum Vitae</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-1">
            <span>&copy; {currentYear} {PROFILE.name}. Built with Next.js 15 &amp; Tailwind CSS.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
