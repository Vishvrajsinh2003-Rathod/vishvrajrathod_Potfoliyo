"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Code, Cpu, Database, Cloud } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillItem {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "ai" | "database";
  icon?: string;
}

export default function Skills() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "backend" | "database" | "ai">("all");

  const skillsList: SkillItem[] = [
    // Frontend
    { name: "JavaScript", level: 85, category: "frontend" },
    { name: "HTML5 & CSS3", level: 90, category: "frontend" },
    { name: "React / Next.js (Learning)", level: 60, category: "frontend" },
    
    // Backend
    { name: "Python", level: 80, category: "backend" },
    { name: "C & C++", level: 75, category: "backend" },
    
    // Database
    { name: "MySQL", level: 85, category: "database" },
    
    // AI & Tooling
    { name: "Git & GitHub", level: 80, category: "ai" },
    { name: "Problem Solving & DSA", level: 75, category: "ai" },
    { name: "MS Office", level: 95, category: "ai" },
  ];

  const categories = [
    { id: "all", label: t("skillsFilterAll"), icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: "frontend", label: t("skillsFilterFrontend"), icon: <Code className="w-3.5 h-3.5" /> },
    { id: "backend", label: t("skillsFilterBackend"), icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: "database", label: "Databases", icon: <Database className="w-3.5 h-3.5" /> },
    { id: "ai", label: t("skillsFilterAI"), icon: <Cloud className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skillsList 
    : skillsList.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative px-6 z-10 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient mb-4">
            {t("skillsTitle")}
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            {t("skillsSubtitle")}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                activeCategory === cat.id
                  ? "bg-primary border-primary text-white neon-glow-primary scale-105"
                  : "border-border glassmorphism text-foreground/80 hover:bg-foreground/5"
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="glassmorphism rounded-2xl p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-bold text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-secondary font-semibold">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar container */}
                <div className="w-full h-2.5 bg-background/50 rounded-full overflow-hidden border border-border/20">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
