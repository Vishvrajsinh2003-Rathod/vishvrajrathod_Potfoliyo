"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Heart, Clock } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const [visitorCount, setVisitorCount] = useState(1);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Visitor Count Increment Mock
    const savedCount = localStorage.getItem("portfolio_visitors");
    let newCount = 347; // standard starting counter for premium portfolio
    if (savedCount) {
      newCount = parseInt(savedCount) + 1;
    }
    localStorage.setItem("portfolio_visitors", newCount.toString());
    setVisitorCount(newCount);

    // Time Clock update loop
    const timer = setInterval(() => {
      const date = new Date();
      // Format to IST timezone or user local timezone
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      setCurrentTime(date.toLocaleTimeString("en-US", options));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="border-t border-border/30 bg-background/50 backdrop-blur-md py-12 px-6 relative z-10 text-xs text-muted">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left segment */}
        <div className="flex flex-col space-y-1.5 text-center md:text-left">
          <span className="font-bold text-foreground tracking-widest text-sm">PORTFOLIO.AI</span>
          <span>© {new Date().getFullYear()} Vishvrajsinh Rathod. All rights reserved.</span>
          <span className="flex items-center justify-center md:justify-start space-x-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-current" />
            <span>using Next.js App Router & Tailwind CSS.</span>
          </span>
        </div>

        {/* Center Clock & Visitor counts */}
        <div className="flex items-center space-x-6">
          {/* Visitor Counter */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-wider block text-muted">
              {t("visitorCount")}
            </span>
            <span className="font-mono text-foreground font-extrabold text-sm">
              {visitorCount.toLocaleString()}
            </span>
          </div>

          {/* Local clock */}
          <div className="flex flex-col items-center border-l border-border/40 pl-6">
            <span className="text-[10px] font-bold uppercase tracking-wider block text-muted flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>IST Time</span>
            </span>
            <span className="font-mono text-foreground font-extrabold text-sm min-w-[90px] text-center">
              {currentTime || "00:00:00 AM"}
            </span>
          </div>
        </div>

        {/* Right segment: Social Icons */}
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/Vishvrajsinh2003-Rathod"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-border glassmorphism hover:text-foreground hover:border-foreground/45 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/vishvrajsinh-rathod-858832238"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-border glassmorphism hover:text-foreground hover:border-foreground/45 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="mailto:rathodvishvrajsinh2003@gmail.com"
            className="p-2 rounded-lg border border-border glassmorphism hover:text-foreground hover:border-foreground/45 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
