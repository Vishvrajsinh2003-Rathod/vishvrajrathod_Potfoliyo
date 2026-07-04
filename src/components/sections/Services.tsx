"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, Code, Brain, Database, ShieldCheck, Zap, BarChart, Settings } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Landing Pages",
      description: "High-converting, responsive landing pages designed to capture leads and drive sales.",
    },
    {
      icon: <Code className="w-6 h-6 text-secondary" />,
      title: "Portfolio Websites",
      description: "Interactive premium showcases tailored to captivate stakeholders, recruiters, and prospective clients.",
    },
    {
      icon: <BarChart className="w-6 h-6 text-accent" />,
      title: "Business Websites",
      description: "Full-scale company websites optimized for speed, SEO, and professional brand representation.",
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Frontend Development",
      description: "Translating UI/UX designs into pixel-perfect, interactive code using HTML, CSS, JavaScript, and React.",
    },
    {
      icon: <Brain className="w-6 h-6 text-secondary" />,
      title: "Python Automation",
      description: "Custom scripts, web scraping routines, and background automation logic using Python libraries.",
    },
    {
      icon: <Settings className="w-6 h-6 text-accent" />,
      title: "Website Maintenance",
      description: "Regular site updates, hosting configurations, code refactoring, and general performance improvements.",
    },
  ];

  return (
    <section id="services" className="py-24 relative px-6 z-10 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient mb-4">
            {t("servicesTitle")}
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            {t("servicesSubtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="glassmorphism rounded-2xl p-6 border border-border/40 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-foreground/5 w-fit rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  {svc.icon}
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {svc.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {svc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
