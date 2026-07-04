"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Search, Calendar, Clock, ArrowUpRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  readTime: number;
}

export default function Blog() {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const posts: BlogPost[] = [
    {
      id: "nextjs-16",
      title: "Deep Dive into Next.js 16 Server Components Architecture",
      category: "Frontend",
      date: "June 20, 2026",
      summary: "Understand the rendering sequence of Server Components and how to leverage server-side hooks to optimize Core Web Vitals.",
      readTime: 6,
    },
    {
      id: "postgres-vectors",
      title: "Building RAG systems: PostgreSQL pgvector vs Pinecone",
      category: "Backend & DB",
      date: "May 14, 2026",
      summary: "A performance comparison of local vector query indexings inside relational databases versus specialized vector cloud databases.",
      readTime: 8,
    },
    {
      id: "canvas-performance",
      title: "Accelerating HTML5 Canvas elements with requestAnimationFrame",
      category: "Animations",
      date: "April 02, 2026",
      summary: "Best practices to bypass CPU throttling, handle delta timestamps, and deliver smooth 60 FPS graphics on mobile browsers.",
      readTime: 5,
    },
  ];

  const categories = ["all", "Frontend", "Backend & DB", "Animations"];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.summary.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="py-24 relative px-6 z-10 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient mb-4">
            {t("blogTitle")}
          </h2>
        </div>

        {/* Search and Category Control Area */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto mb-12">
          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder={t("blogSearch")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border glassmorphism bg-background/30 text-xs text-foreground placeholder:text-muted outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Category tags */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  activeCategory === cat
                    ? "bg-secondary border-secondary text-white scale-105"
                    : "border-border glassmorphism text-foreground/80 hover:bg-foreground/5"
                }`}
              >
                {cat === "all" ? "All Posts" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article
                key={post.id}
                className="glassmorphism rounded-3xl p-6 border border-border/40 hover:border-secondary/40 transition-all duration-500 transform hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center text-[10px] font-bold text-muted uppercase mb-4">
                    <span className="text-secondary">{post.category}</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime} {t("blogReadingTime")}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-3 leading-snug group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-muted leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-border/30 pt-4 mt-auto">
                  <span className="text-[10px] font-mono text-muted flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </span>
                  <button className="flex items-center space-x-1 text-xs text-secondary font-bold hover:underline">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-3 text-center py-16 text-muted text-sm">
              No articles found matching your query
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
