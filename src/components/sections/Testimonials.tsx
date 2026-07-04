"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

// IMPORTANT: Do not add placeholder/fabricated testimonials here.
// Showing quotes from clients or companies that don't exist is deceptive
// and will damage trust the moment anyone tries to verify them.
// Add entries here only once you have real, permission-given client feedback.
export default function Testimonials() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  const list: Testimonial[] = [];

  if (list.length === 0) {
    return (
      <section className="py-24 relative px-6 z-10 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient mb-6">
            {t("testTitle")}
          </h2>
          <p className="text-sm text-muted max-w-md mx-auto">
            Client testimonials will appear here as projects wrap up. In the meantime, feel free to check the Projects section or reach out directly for references.
          </p>
        </div>
      </section>
    );
  }

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % list.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  const current = list[index];

  return (
    <section className="py-24 relative px-6 z-10 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient mb-16">
          {t("testTitle")}
        </h2>

        {/* Carousel Slide */}
        <div className="relative glassmorphism rounded-3xl p-8 md:p-12 border border-border/40 max-w-3xl mx-auto flex flex-col items-center">
          <Quote className="w-12 h-12 text-primary/30 mb-6" />

          <p className="text-base sm:text-lg text-foreground/90 italic leading-relaxed mb-8 max-w-2xl">
            "{current.quote}"
          </p>

          <div className="flex items-center space-x-1.5 mb-6 text-amber-500">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          <div className="space-y-0.5">
            <span className="block text-sm font-bold text-foreground">
              {current.author}
            </span>
            <span className="text-xs text-muted">
              {current.role} • <span className="text-secondary font-semibold">{current.company}</span>
            </span>
          </div>

          {/* Slider actions */}
          <div className="flex space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl border border-border glassmorphism hover:bg-foreground/5 text-foreground/80 hover:text-foreground transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center space-x-1 text-xs font-semibold text-muted">
              <span>{index + 1}</span>
              <span>/</span>
              <span>{list.length}</span>
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl border border-border glassmorphism hover:bg-foreground/5 text-foreground/80 hover:text-foreground transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
