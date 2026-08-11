"use client";

import React, { useState } from "react";
import { FolderGit2, Sparkles, Filter } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Project } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "featured", label: "Featured" },
    { id: "frontend", label: "Frontend & API" },
    { id: "tools", label: "Tools & Calculators" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "featured") return project.featured;
    return project.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
              <FolderGit2 size={13} />
              <span>FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Applications &amp; Case Studies
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Production web applications engineered with modern frontend frameworks, real-time APIs, and clean data architectures.
            </p>
          </div>

          {/* Project Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 self-start md:self-auto">
            {filters.map((tab) => {
              const isSelected = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-slate-800 text-cyan-300 border border-cyan-500/30 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
