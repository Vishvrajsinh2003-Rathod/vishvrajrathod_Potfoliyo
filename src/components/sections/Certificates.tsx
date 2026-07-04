"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Award, ChevronLeft, ChevronRight, CheckCircle, ExternalLink } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  verificationId: string;
  verificationLink: string;
}

export default function Certificates() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates: Certificate[] = [
    {
      title: "Generative AI Developer Specialization",
      issuer: "DeepLearning.AI & Google Cloud",
      date: "September 2024",
      verificationId: "DL-GENAI-9842F",
      verificationLink: "https://example.com/verify/dl-genai"
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "March 2023",
      verificationId: "AWS-ASA-84291B",
      verificationLink: "https://example.com/verify/aws"
    },
    {
      title: "Professional Cloud Developer",
      issuer: "Google Cloud Platform (GCP)",
      date: "December 2023",
      verificationId: "GCP-PCD-729410",
      verificationLink: "https://example.com/verify/gcp"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const currentCert = certificates[currentIndex];

  return (
    <section className="py-24 relative px-6 z-10 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient mb-4">
            {t("certTitle")}
          </h2>
        </div>

        {/* Certificate Display Slider */}
        <div className="relative glassmorphism rounded-3xl p-8 border border-border/40 max-w-2xl mx-auto flex flex-col items-center text-center">
          <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-6 text-primary neon-glow-primary">
            <Award className="w-8 h-8" />
          </div>

          <span className="text-xs font-semibold text-secondary uppercase tracking-widest block mb-2">
            {currentCert.issuer}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 leading-snug">
            {currentCert.title}
          </h3>
          <span className="text-xs text-muted block mb-6">{currentCert.date}</span>

          {/* Verification Code Box */}
          <div className="w-full max-w-sm rounded-xl border border-border/60 bg-background/50 p-4 mb-8 flex flex-col items-center">
            <span className="text-[10px] font-bold text-muted uppercase tracking-wider mb-2">
              Credential Verification ID
            </span>
            <span className="font-mono text-xs text-foreground font-semibold flex items-center space-x-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>{currentCert.verificationId}</span>
            </span>
          </div>

          {/* Action Link */}
          <a
            href={currentCert.verificationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-xs text-primary font-bold hover:underline mb-2"
          >
            <span>{t("certBtnVerify")}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Navigation Controls */}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl border border-border glassmorphism hover:bg-foreground/5 text-foreground/80 hover:text-foreground transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center space-x-1.5 text-xs font-semibold text-muted">
              <span>{currentIndex + 1}</span>
              <span>/</span>
              <span>{certificates.length}</span>
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
