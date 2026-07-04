"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Search, Monitor, Moon, Sun, Languages, ArrowRight, CornerDownLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface AICommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AICommandPalette({ isOpen, onClose }: AICommandPaletteProps) {
  const { t, setLanguage } = useLanguage();
  const { toggleTheme } = useTheme();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // wait, handled outside
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setSearch("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAction = (action: () => void) => {
    action();
    onClose();
  };

  interface CommandItem {
    label: string;
    action: () => void;
    icon?: React.ReactNode;
  }

  const commands: { category: string; items: CommandItem[] }[] = [
    {
      category: "Navigation",
      items: [
        { label: "Go to Home", action: () => (window.location.hash = "#home") },
        { label: "Go to About Me", action: () => (window.location.hash = "#about") },
        { label: "Go to Skills", action: () => (window.location.hash = "#skills") },
        { label: "Go to Services", action: () => (window.location.hash = "#services") },
        { label: "Go to Projects", action: () => (window.location.hash = "#projects") },
        { label: "Go to Blog", action: () => (window.location.hash = "#blog") },
        { label: "Go to Contact", action: () => (window.location.hash = "#contact") },
        { label: "Go to Admin Panel", action: () => router.push("/admin") },
      ],
    },
    {
      category: "Preferences",
      items: [
        { label: "Toggle Dark / Light Mode", icon: <Sun className="w-4 h-4" />, action: toggleTheme },
        { label: "Switch to English", icon: <Languages className="w-4 h-4" />, action: () => setLanguage("en") },
        { label: "Switch to Hindi (हिन्दी)", icon: <Languages className="w-4 h-4" />, action: () => setLanguage("hi") },
        { label: "Switch to Gujarati (ગુજરાતી)", icon: <Languages className="w-4 h-4" />, action: () => setLanguage("gu") },
      ],
    },
  ];

  // Filter commands by search
  const filteredCommands = commands
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      {/* Palette Container */}
      <div className="relative w-full max-w-2xl glassmorphism border border-border rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
        {/* Search Input */}
        <div className="flex items-center border-b border-border px-4 py-4">
          <Search className="w-5 h-5 text-muted mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search sections..."
            className="w-full bg-transparent border-0 outline-none text-foreground placeholder:text-muted text-base"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 bg-foreground/5 text-muted border border-border rounded-lg"
          >
            ESC
          </button>
        </div>

        {/* Command list */}
        <div className="max-h-[350px] overflow-y-auto p-4 space-y-4">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cat, catIdx) => (
              <div key={catIdx} className="space-y-1">
                <span className="text-[10px] font-bold tracking-wider text-muted uppercase px-3">
                  {cat.category}
                </span>
                {cat.items.map((item, itemIdx) => (
                  <button
                    key={itemIdx}
                    onClick={() => handleAction(item.action)}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-primary/10 text-foreground/80 hover:text-foreground text-sm flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center space-x-2">
                      {item.icon || <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />}
                      <span>{item.label}</span>
                    </div>
                    <CornerDownLeft className="w-4 h-4 opacity-0 group-hover:opacity-60 text-muted transition-opacity" />
                  </button>
                ))}
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-muted text-sm">
              No commands found for "{search}"
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="border-t border-border px-4 py-3 bg-foreground/5 text-xs text-muted flex justify-between items-center">
          <span>Use arrows to navigate, enter to select</span>
          <span>⌘K to toggle</span>
        </div>
      </div>
    </div>
  );
}
