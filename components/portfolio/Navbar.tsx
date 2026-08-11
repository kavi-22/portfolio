"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Sparkles, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { NAV_LINKS } from "@/data/social";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_LINKS.map(link => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090d16]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          aria-label={`${PROFILE.name} - Home`}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-500 p-[1.5px] shadow-sm group-hover:shadow-glow-cyan transition-all duration-300">
            <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center font-mono font-bold text-white text-sm">
              {PROFILE.name.charAt(0)}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors text-base">
              {PROFILE.name}
              <span className="text-cyan-400">.</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 -mt-1 hidden sm:inline-block">
              {PROFILE.role}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Area */}
        <div className="hidden md:flex items-center gap-3">
          {PROFILE.availability && (
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PROFILE.availability}</span>
            </div>
          )}

          {PROFILE.resumeUrl && (
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-medium text-slate-200 hover:text-white transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Download or view resume"
            >
              <FileText size={13} className="text-cyan-400" />
              <span>Resume</span>
              <ArrowUpRight size={12} className="text-slate-400" />
            </a>
          )}

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-semibold text-xs transition-all shadow-sm hover:shadow-glow-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <span>Let&apos;s Talk</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          {PROFILE.availability && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[10px] font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="truncate max-w-[100px]">Available</span>
            </div>
          )}

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[60px] z-40 bg-[#090d16]/95 backdrop-blur-xl border-t border-slate-800/80 p-6 flex flex-col justify-between md:hidden animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-2 py-4">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-slate-800/80 text-cyan-300 border border-cyan-500/30"
                      : "text-slate-300 hover:bg-slate-900/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-800/80 space-y-3 pb-8">
            {PROFILE.resumeUrl && (
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-medium text-sm"
              >
                <FileText size={16} className="text-cyan-400" />
                <span>View Resume</span>
                <ArrowUpRight size={14} className="text-slate-400" />
              </a>
            )}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold text-sm shadow-glow-cyan"
            >
              <Sparkles size={16} />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
