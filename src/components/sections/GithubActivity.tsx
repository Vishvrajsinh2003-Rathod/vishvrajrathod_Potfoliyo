"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { GitPullRequest, GitCommit, Star, Users, FolderKanban } from "lucide-react";

export default function GithubActivity() {
  const { t } = useLanguage();

  // Generate grid points simulating contribution commits
  const contributionGrid = Array.from({ length: 154 }, (_, i) => {
    // Deterministic pseudo-random value for hydration safety
    const randVal = Math.abs(Math.sin(i * 9999)) % 1;
    if (randVal < 0.35) return 0; // zero commits
    if (randVal < 0.6) return 1;  // light green
    if (randVal < 0.8) return 2;  // medium green
    if (randVal < 0.95) return 3; // green
    return 4; // deep green
  });

  const getShadingColor = (val: number) => {
    switch (val) {
      case 0:
        return "bg-foreground/5";
      case 1:
        return "bg-emerald-950/40";
      case 2:
        return "bg-emerald-800/50";
      case 3:
        return "bg-emerald-600/70";
      case 4:
        return "bg-emerald-400";
      default:
        return "bg-foreground/5";
    }
  };

  const githubStats = [
    { label: "Repositories", value: "37", icon: <FolderKanban className="w-4 h-4 text-primary" /> },
    { label: t("githubStars"), value: "128", icon: <Star className="w-4 h-4 text-accent" /> },
    { label: "Followers", value: "82", icon: <Users className="w-4 h-4 text-secondary" /> },
  ];

  const recentCommits = [
    { repo: "career-rec-system", desc: "feat: Integrate Gemini API embeddings vector search", date: "2 hours ago" },
    { repo: "premium-portfolio", desc: "refactor: optimize rendering loop for canvas background", date: "1 day ago" },
    { repo: "fastapi-core", desc: "fix: resolve db connection pool memory leak issue", date: "3 days ago" },
  ];

  return (
    <section className="py-24 relative px-6 z-10 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient mb-4">
            {t("githubTitle")}
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            {t("githubSubtitle")}
          </p>
        </div>

        {/* Outer Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Heatmap block (Left 8 columns) */}
          <div className="lg:col-span-8 glassmorphism rounded-3xl p-6 space-y-6">
            <div className="flex justify-between items-center border-b border-border/30 pb-4">
              <span className="text-sm font-bold text-foreground">GitHub Contribution Matrix</span>
              <span className="text-xs text-muted">@github/Vishvrajsinh2003-Rathod</span>
            </div>

            {/* Grid display */}
            <div className="overflow-x-auto">
              <div className="min-w-[480px] grid grid-flow-col grid-rows-7 gap-1.5 p-1">
                {contributionGrid.map((val, idx) => (
                  <div
                    key={idx}
                    className={`w-3.5 h-3.5 rounded-[3px] transition-all hover:scale-125 hover:neon-glow-primary ${getShadingColor(
                      val
                    )}`}
                    title={`${val * 2} commits`}
                  />
                ))}
              </div>
            </div>

            {/* Scale legend */}
            <div className="flex items-center space-x-2 text-xs text-muted pt-2">
              <span>Less</span>
              <div className="w-3 h-3 rounded-[3px] bg-foreground/5" />
              <div className="w-3 h-3 rounded-[3px] bg-emerald-950/40" />
              <div className="w-3 h-3 rounded-[3px] bg-emerald-800/50" />
              <div className="w-3 h-3 rounded-[3px] bg-emerald-600/70" />
              <div className="w-3 h-3 rounded-[3px] bg-emerald-400" />
              <span>More</span>
            </div>
          </div>

          {/* Stats and activity (Right 4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick stats cards */}
            <div className="grid grid-cols-3 gap-3">
              {githubStats.map((stat, idx) => (
                <div key={idx} className="glassmorphism rounded-2xl p-4 text-center">
                  <div className="p-2 bg-foreground/5 rounded-xl w-fit mx-auto mb-2">
                    {stat.icon}
                  </div>
                  <span className="block text-lg font-bold text-foreground mb-0.5">
                    {stat.value}
                  </span>
                  <span className="text-[9px] font-bold text-muted uppercase tracking-wider block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Recent commits log */}
            <div className="glassmorphism rounded-2xl p-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-4 flex items-center space-x-2">
                <GitCommit className="w-4 h-4 text-secondary" />
                <span>Recent Commit Logs</span>
              </h4>

              <div className="space-y-4">
                {recentCommits.map((cmt, idx) => (
                  <div key={idx} className="space-y-1 text-xs border-l border-border/40 pl-3">
                    <span className="font-mono text-[10px] text-secondary block font-bold">
                      {cmt.repo}
                    </span>
                    <p className="text-foreground/80 leading-relaxed font-medium">
                      {cmt.desc}
                    </p>
                    <span className="text-[10px] text-muted block">
                      {cmt.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
