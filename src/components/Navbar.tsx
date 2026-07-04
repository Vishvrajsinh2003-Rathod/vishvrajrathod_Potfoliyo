"use client";

import React, { useState, useEffect } from "react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, Sun, Moon, Languages, Terminal } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("navHome"), href: "#home" },
    { name: t("navAbout"), href: "#about" },
    { name: t("navSkills"), href: "#skills" },
    { name: t("navServices"), href: "#services" },
    { name: t("navProjects"), href: "#projects" },
    { name: t("navBlog"), href: "#blog" },
    { name: t("navContact"), href: "#contact" },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setShowLangMenu(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold tracking-wider text-gradient">
          <Terminal className="w-5 h-5 text-primary" />
          <span>PORTFOLIO.AI</span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors text-foreground/80"
            >
              {item.name}
            </a>
          ))}
          <Link
            href="/admin"
            className="text-sm font-medium hover:text-secondary transition-colors text-foreground/80"
          >
            {t("navAdmin")}
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Cmd+K trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-foreground/5 text-xs text-muted transition-all"
            title="Open Command Palette (Cmd+K)"
          >
            <span>⌘K</span>
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="p-2 rounded-lg hover:bg-foreground/5 text-foreground/80 transition-colors flex items-center space-x-1"
              title="Change Language"
            >
              <Languages className="w-4 h-4" />
              <span className="text-xs uppercase">{language}</span>
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-32 rounded-xl glassmorphism border border-border py-1 shadow-lg animate-fade-in z-50">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`w-full text-left px-4 py-2 text-xs hover:bg-primary/20 transition-colors ${
                    language === "en" ? "text-primary font-bold" : "text-foreground"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange("hi")}
                  className={`w-full text-left px-4 py-2 text-xs hover:bg-primary/20 transition-colors ${
                    language === "hi" ? "text-primary font-bold" : "text-foreground"
                  }`}
                >
                  हिन्दी (Hindi)
                </button>
                <button
                  onClick={() => handleLanguageChange("gu")}
                  className={`w-full text-left px-4 py-2 text-xs hover:bg-primary/20 transition-colors ${
                    language === "gu" ? "text-primary font-bold" : "text-foreground"
                  }`}
                >
                  ગુજરાતી (Gujarati)
                </button>
              </div>
            )}
          </div>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-foreground/5 text-foreground/80 transition-colors"
            title="Toggle Light/Dark Theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Quick Cmd+K trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-lg border border-border bg-card text-muted transition-all"
          >
            <span className="text-xs">⌘K</span>
          </button>

          {/* Mobile language button */}
          <button
            onClick={() => setLanguage(language === "en" ? "hi" : language === "hi" ? "gu" : "en")}
            className="p-2 rounded-lg border border-border bg-card text-xs uppercase"
          >
            {language}
          </button>

          {/* Mobile Theme switcher */}
          <button onClick={toggleTheme} className="p-2 rounded-lg border border-border bg-card text-muted">
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-foreground/5 text-foreground/80 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glassmorphism border-b border-border shadow-xl animate-slide-in-down z-30">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-foreground/80 hover:text-secondary transition-colors"
            >
              {t("navAdmin")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
