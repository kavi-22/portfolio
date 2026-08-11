import React from "react";
import { Mail, Github, Linkedin, MapPin, MessageSquare, Clock, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/profile";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <MessageSquare size={13} />
            <span>LET&apos;S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch &amp; Start a Conversation
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Interested in hiring for a role, discussing a freelance build, or exploring technical collaboration? Send a direct message below.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              {/* Email Card */}
              {PROFILE.email && (
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all shadow-card-subtle"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Direct Email
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {PROFILE.email}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Fastest response for recruitment &amp; opportunities
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-500 group-hover:text-cyan-300 transition-colors shrink-0" />
                </a>
              )}

              {/* GitHub Card */}
              {PROFILE.social.github && (
                <a
                  href={PROFILE.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all shadow-card-subtle"
                >
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 shrink-0 group-hover:scale-105 transition-transform">
                    <Github size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      GitHub Repositories
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {PROFILE.social.github.replace("https://", "")}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Explore full source code &amp; open contributions
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-500 group-hover:text-cyan-300 transition-colors shrink-0" />
                </a>
              )}

              {/* LinkedIn Card */}
              {PROFILE.social.linkedin && (
                <a
                  href={PROFILE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all shadow-card-subtle"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Linkedin size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      LinkedIn Network
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                      Professional Profile
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Career background, recommendations &amp; networking
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-500 group-hover:text-cyan-300 transition-colors shrink-0" />
                </a>
              )}
            </div>

            {/* Info badge: Response time */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
              <Clock size={16} className="text-cyan-400 shrink-0" />
              <span>Typical response time is within <strong>24 business hours</strong>.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
