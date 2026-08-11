"use client";

import React from "react";
import { ExternalLink, Github, ArrowRight, Sparkles, Code, Layers } from "lucide-react";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const isFeatured = project.featured;

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md hover:border-cyan-500/40 hover:shadow-card-subtle transition-all duration-300 overflow-hidden ${
        isFeatured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      {/* Top accent bar */}
      <div
        className={`h-1.5 w-full bg-gradient-to-r ${
          isFeatured
            ? "from-cyan-500 via-teal-400 to-emerald-500"
            : "from-slate-700 via-slate-600 to-slate-800 group-hover:from-cyan-500 group-hover:to-emerald-500"
        } transition-all duration-500`}
      />

      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Top meta strip */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
              {project.categoryLabel}
            </span>

            {isFeatured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-medium text-amber-300">
                <Sparkles size={11} />
                Featured Project
              </span>
            )}
          </div>

          {/* Project Title & Tagline */}
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight mb-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-medium mb-3">
            {project.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, isFeatured ? 6 : 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-slate-950/70 border border-slate-800 text-[11px] font-mono text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (isFeatured ? 6 : 4) && (
              <span className="px-2 py-1 rounded-md bg-slate-950/50 text-[10px] font-mono text-slate-500">
                +{project.technologies.length - (isFeatured ? 6 : 4)} more
              </span>
            )}
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded-md py-1"
          >
            <span>Read Case Study</span>
            <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            {project.v1GithubUrl && (
              <a
                href={project.v1GithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-amber-200 text-[11px] font-mono transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
                title={`Original v1 Repo: ${project.v1Title || "Legacy Version"}`}
                aria-label={`Original v1 repo for ${project.title}`}
              >
                v1
              </a>
            )}

            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all text-xs focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                aria-label={`Source code for ${project.title}`}
                title="View Source Code"
              >
                <Github size={15} />
              </a>
            )}

            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-cyan-200 text-xs font-medium transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                aria-label={`Live demo for ${project.title}`}
              >
                <span>Live Demo</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
