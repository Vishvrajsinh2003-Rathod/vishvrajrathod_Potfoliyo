"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Download, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState("");
  const phrases = [
    "Next.js Applications",
    "AI-Powered Interfaces",
    "High-Performance APIs",
    "Premium Digital Experiences"
  ];
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [greeting, setGreeting] = useState("Welcome");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIdx];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, charIdx - 1));
        setCharIdx((prev) => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, charIdx + 1));
        setCharIdx((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, phraseIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glassmorphism border border-primary/30 text-xs font-semibold text-primary mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span>Available for Contract & Freelance</span>
        </motion.div>

        {/* Time-based Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
        >
          {greeting}! I am Vishvrajsinh
        </motion.div>

        {/* Huge Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-4 leading-none max-w-5xl text-foreground uppercase"
        >
          HIRE. <span className="text-primary">BUILD.</span> LAUNCH.
        </motion.h1>

        {/* Dynamic Typewriter text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/80 mb-6 h-12"
        >
          <span>Designing & Engineering </span>
          <span className="text-secondary font-mono border-r-2 border-secondary animate-pulse pr-1">
            {typedText}
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base sm:text-lg text-muted max-w-2xl mb-12"
        >
          {t("heroSubtitle")}
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all text-sm"
          >
            <span>{t("heroBtnHire")}</span>
            <MessageSquare className="w-4 h-4" />
          </a>

          <a
            href="#projects"
            className="flex items-center space-x-2 px-6 py-3.5 rounded-xl border border-border glassmorphism hover:bg-foreground/5 text-foreground font-medium transition-all text-sm hover:scale-105"
          >
            <span>{t("heroBtnProjects")}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#resume"
            className="flex items-center space-x-2 px-6 py-3.5 rounded-xl border border-border glassmorphism hover:bg-foreground/5 text-foreground/80 font-medium transition-all text-sm hover:scale-105"
          >
            <span>{t("heroBtnResume")}</span>
            <Download className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Social Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex space-x-4"
        >
          <a
            href="https://github.com/Vishvrajsinh2003-Rathod"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-border glassmorphism text-foreground/75 hover:text-primary hover:border-primary/50 transition-colors hover:scale-110"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/vishvrajsinh-rathod-858832238"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-border glassmorphism text-foreground/75 hover:text-primary hover:border-primary/50 transition-colors hover:scale-110"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
