"use client";

import React, { useState } from "react";
import { Layers, Sparkles, Code, Server, Wrench, Binary } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/skills";
import { SkillCategory, SkillItem } from "@/types/portfolio";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Technologies", icon: Layers },
    { id: "Frontend Engineering", label: "Frontend", icon: Code },
    { id: "Backend & Data Handling", label: "Backend & Data", icon: Server },
    { id: "Core Programming Languages", label: "Languages", icon: Binary },
    { id: "Developer Tools & Workflow", label: "Tools & DevOps", icon: Wrench },
  ];

  const filteredCategories: SkillCategory[] = selectedCategory === "all"
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((cat) => cat.title.toLowerCase().includes(selectedCategory.toLowerCase()) || cat.title === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-slate-950/60 border-y border-slate-800/60">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-3">
              <Sparkles size={13} />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills, Stack &amp; Core Tooling
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Structured categorization of technologies and toolsets applied across production web applications.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 self-start md:self-auto">
            {categories.map((tab) => {
              const Icon = tab.icon;
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-slate-800 text-cyan-300 border border-cyan-500/30 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  <Icon size={13} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {category.title}
                </h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
                <span className="text-xs font-mono text-slate-500">
                  {category.skills.length} skills
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                {category.skills.map((skill: SkillItem) => (
                  <div
                    key={skill.name}
                    className={`group p-4 rounded-xl bg-slate-900/50 border transition-all duration-300 relative ${
                      skill.highlight
                        ? "border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 hover:shadow-card-subtle"
                        : "border-slate-800/70 hover:border-slate-700 hover:bg-slate-900/70"
                    }`}
                  >
                    {skill.highlight && (
                      <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-cyan-400/80 ring-2 ring-cyan-400/20" title="Primary core skill" />
                    )}
                    <div className="flex items-start justify-between mb-1.5">
                      <h4 className="font-semibold text-sm text-slate-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </h4>
                    </div>
                    {skill.description && (
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
