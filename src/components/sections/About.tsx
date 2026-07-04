"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, Award, BookOpen, Star } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: "3+", label: "Years Learning" },
    { value: "10+", label: "Projects Built" },
    { value: "8+", label: "Technologies" },
  ];

  const milestones = [
    {
      year: "2024 - Present",
      role: "M.Sc. IT & Full Stack Development",
      company: "Silver Oak University",
      description: "Focusing on modern web development, Python, HTML, CSS, JavaScript, and MySQL."
    },
    {
      year: "2021 - 2024",
      role: "Bachelor of Arts & IT Foundation",
      company: "HNGU",
      description: "Pursued degree while simultaneously building a strong foundation in computer networking, OS, and programming basics."
    },
    {
      year: "2022",
      role: "Computer Operator & Programming Assistant",
      company: "Govt. ITI, Vadali",
      description: "Gained practical knowledge in operating systems, networking, and programming basics."
    }
  ];

  const education = [
    {
      degree: "M.Sc. Information Technology",
      institution: "Silver Oak University (CGPA: 6.92)",
      period: "May 2026 - Present"
    },
    {
      degree: "Bachelor of Arts (English)",
      institution: "HNGU",
      period: "2021 - 2024"
    },
    {
      degree: "ITI - COPA",
      institution: "Govt. ITI, Vadali",
      period: "Aug 2022"
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "GSEB",
      period: "2021"
    }
  ];

  return (
    <section id="about" className="py-24 relative px-6 z-10 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient mb-4">
            {t("aboutTitle")}
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            {t("aboutIntro")}
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Stats & Brief Intro (Left 5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glassmorphism rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-foreground">Who I Am</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                I am a passionate IT graduate and quick learner, actively pursuing my M.Sc. in Information Technology. I specialize in the intersection of problem-solving and modern frontend design using Python, JavaScript, HTML, CSS, and MySQL.
              </p>
              <p className="text-sm text-muted">
                My goals are focused on deploying high-quality web applications, growing my technical skills, and solving real-world problems in a team-oriented environment.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="glassmorphism rounded-xl p-4 text-center">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold text-muted uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline & Education (Right 7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Timeline */}
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-8 flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{t("aboutEducation")}</span>
              </h3>

              <div className="space-y-8 relative before:absolute before:top-1 before:bottom-1 before:left-[11px] before:w-0.5 before:bg-border/60">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    {/* Glowing timeline node */}
                    <div className="absolute left-[5px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-300" />
                    
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-secondary font-semibold">
                        {milestone.year}
                      </span>
                      <h4 className="text-base font-bold text-foreground leading-tight">
                        {milestone.role}
                      </h4>
                      <p className="text-xs text-muted font-medium">
                        {milestone.company}
                      </p>
                      <p className="text-xs text-foreground/70 leading-relaxed mt-2">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education and Credentials */}
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-secondary" />
                <span>Degrees & Training</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="border border-border/40 rounded-xl p-4 bg-background/30 hover:border-primary/45 transition-colors">
                    <span className="text-xs text-muted block mb-1">{edu.period}</span>
                    <h4 className="text-sm font-bold text-foreground mb-1 leading-snug">{edu.degree}</h4>
                    <p className="text-xs text-muted">{edu.institution}</p>
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
