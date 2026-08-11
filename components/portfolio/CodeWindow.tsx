"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function CodeWindow() {
  const [copied, setCopied] = useState(false);

  const snippet = PROFILE.codeSnippet || {
    filename: "developer.config.ts",
    language: "typescript",
    code: `export const developer = {
  name: "${PROFILE.name}",
  role: "${PROFILE.role}",
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  status: "Open for Opportunities",
};`,
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code snippet", err);
    }
  };

  // Safe line highlighter: tokenizes text rather than doing cascading string regex replacements
  const renderLineTokens = (line: string) => {
    // Check if line is a comment
    if (line.trim().startsWith("//")) {
      return <span className="text-slate-500 italic">{line}</span>;
    }

    // Tokenize strings, keywords, types, punctuation
    const tokens: React.ReactNode[] = [];
    // Regex splits by strings, words, and symbols while keeping delimiters
    const parts = line.split(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`|\b(?:export|const|let|var|return|function|import|from|type|interface)\b|\b(?:true|false|null|undefined)\b|\b[A-Z][a-zA-Z0-9_]*\b)/g);

    parts.forEach((part, i) => {
      if (!part) return;

      if (/^["'`].*["'`]$/.test(part)) {
        // String literal
        tokens.push(<span key={i} className="text-emerald-300">{part}</span>);
      } else if (/^(?:export|const|let|var|return|function|import|from|type|interface)$/.test(part)) {
        // Keyword
        tokens.push(<span key={i} className="text-violet-400 font-medium">{part}</span>);
      } else if (/^(?:true|false|null|undefined)$/.test(part)) {
        // Boolean / Null
        tokens.push(<span key={i} className="text-amber-400">{part}</span>);
      } else if (/^[A-Z][a-zA-Z0-9_]*$/.test(part)) {
        // Type / Class
        tokens.push(<span key={i} className="text-cyan-300">{part}</span>);
      } else if (part.includes(":") && !part.includes("://")) {
        // Property key helper
        tokens.push(<span key={i} className="text-slate-200">{part}</span>);
      } else {
        tokens.push(<span key={i} className="text-slate-300">{part}</span>);
      }
    });

    return tokens;
  };

  const lines = snippet.code.split("\n");

  return (
    <div className="w-full rounded-2xl bg-[#0b1120] border border-slate-800 shadow-2xl overflow-hidden relative group/window">
      {/* Top subtle glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/90 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="ml-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300">
            <Terminal size={12} className="text-cyan-400" />
            <span>{snippet.filename}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-slate-800 text-slate-400">
            {snippet.language}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white transition-all text-xs font-mono focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
            aria-label="Copy code to clipboard"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-400" />
                <span className="text-emerald-400 text-[11px]">Copied</span>
              </>
            ) : (
              <>
                <Copy size={13} className="text-slate-400" />
                <span className="text-[11px]">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code body */}
      <div className="p-4 sm:p-5 overflow-x-auto bg-[#080d1a]/95">
        <div className="table w-full">
          {lines.map((line, lineIdx) => (
            <div key={lineIdx} className="table-row group/line hover:bg-slate-800/40">
              <span className="table-cell select-none pr-4 text-right text-[11px] font-mono text-slate-600 group-hover/line:text-slate-400 w-8">
                {lineIdx + 1}
              </span>
              <span className="table-cell whitespace-pre font-mono text-[13px]">
                {renderLineTokens(line)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer status bar */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-slate-950/80 border-t border-slate-800/60 font-mono text-[10px] text-slate-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            TypeScript 5.7
          </span>
          <span className="hidden sm:inline">UTF-8</span>
        </div>
        <div>
          <span>Next.js 15 App Router</span>
        </div>
      </div>
    </div>
  );
}
