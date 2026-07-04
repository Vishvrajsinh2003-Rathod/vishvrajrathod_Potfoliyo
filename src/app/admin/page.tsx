"use client";

import React, { useState, useEffect } from "react";
import { Lock, Eye, Trash2, Mail, Users, Settings, LogOut, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";
import Link from "next/link";

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [messages, setMessages] = useState<Message[]>([]);
  const [visitorCount, setVisitorCount] = useState(347);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  // SEO fields
  const [seoTitle, setSeoTitle] = useState("Premium AI Developer Portfolio");
  const [seoDescription, setSeoDescription] = useState("World-class developer portfolio website.");
  const [seoSuccess, setSeoSuccess] = useState(false);

  useEffect(() => {
    // Check if session exists (mock)
    const session = sessionStorage.getItem("admin_session");
    if (session === "active") {
      setIsAuthenticated(true);
    }

    // Load messages from localStorage
    const savedMessages = localStorage.getItem("admin_messages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // Seed initial mock messages if empty
      const seeds = [
        {
          id: "1",
          name: "Emily Roberts",
          email: "emily@vercel.com",
          phone: "+1 (555) 234-5678",
          subject: "Contract proposal: Next.js frontend rebuild",
          message: "Hi, I checked your skills page and portfolio. We have a contract opportunity for a senior architect to migrate our dashboards. Let me know if you are open for a quick video call.",
          date: "6/29/2026, 04:12 PM",
          status: "unread"
        },
        {
          id: "2",
          name: "Devin Miller",
          email: "devin@startup.io",
          phone: "N/A",
          subject: "Inquiry: AI agent integration",
          message: "We need to plug DeepSeek and Claude models into our customer ticket flow. Do you have experience setting up async FastAPI workers for background inferences?",
          date: "6/28/2026, 11:34 AM",
          status: "read"
        }
      ];
      localStorage.setItem("admin_messages", JSON.stringify(seeds));
      setMessages(seeds);
    }

    // Load visitor count
    const savedCount = localStorage.getItem("portfolio_visitors");
    if (savedCount) {
      setVisitorCount(parseInt(savedCount));
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock credential check: admin / admin
    if (username === "admin" && password === "admin") {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_session", "active");
      setLoginError("");
    } else {
      setLoginError("Invalid username or password. (Hint: admin / admin)");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_session");
  };

  const handleMarkAsRead = (id: string) => {
    const updated = messages.map((m) => (m.id === id ? { ...m, status: "read" } : m));
    setMessages(updated);
    localStorage.setItem("admin_messages", JSON.stringify(updated));
  };

  const handleDeleteMessage = (id: string) => {
    const updated = messages.filter((m) => m.id !== id);
    setMessages(updated);
    localStorage.setItem("admin_messages", JSON.stringify(updated));
    if (selectedMessage?.id === id) {
      setSelectedMessage(null);
    }
  };

  const handleSaveSeo = (e: React.FormEvent) => {
    e.preventDefault();
    setSeoSuccess(true);
    setTimeout(() => setSeoSuccess(false), 3000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/10 blur-[80px]" />

        <div className="w-full max-w-md glassmorphism border border-border/80 rounded-3xl p-8 relative z-10 shadow-2xl animate-scale-in">
          <div className="text-center mb-8">
            <div className="p-3 bg-primary/10 rounded-2xl w-fit mx-auto mb-4 text-primary neon-glow-primary">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Admin Console Access</h1>
            <p className="text-xs text-muted mt-1.5">Please sign in with administrator credentials.</p>
          </div>

          {loginError && (
            <div className="mb-4 p-3 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 text-xs font-semibold text-center animate-pulse">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-muted uppercase tracking-wider block">Username</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-border glassmorphism text-xs text-foreground placeholder:text-muted outline-none focus:border-primary transition-colors bg-background/30"
                placeholder="Enter admin username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-muted uppercase tracking-wider block">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-border glassmorphism text-xs text-foreground placeholder:text-muted outline-none focus:border-primary transition-colors bg-background/30"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold shadow-lg hover:shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
            >
              <span>Authenticate Console</span>
              <Lock className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Back button */}
          <div className="mt-6 text-center">
            <Link href="/" className="text-xs text-muted hover:text-primary transition-colors font-medium flex items-center justify-center space-x-1">
              <span>Back to Portfolio</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col relative z-10 px-6 py-8">
      {/* Upper Navigation Row */}
      <header className="max-w-6xl w-full mx-auto flex justify-between items-center mb-8 border-b border-border/30 pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-secondary/10 rounded-xl text-secondary">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">Admin Workspace</h1>
            <span className="text-[10px] text-muted block">System Control Panel</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xs font-semibold text-muted hover:text-foreground transition-colors">
            Exit Console
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold hover:bg-red-500/25 transition-colors"
          >
            <span>Log Out</span>
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Dashboard Deck */}
      <main className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
        
        {/* Left Side: Messages, Inbox, Stats (Left 8 columns) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glassmorphism rounded-2xl p-5 border border-border/40 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-muted uppercase tracking-wider block">Live Visitors</span>
                <span className="text-xl font-extrabold text-foreground mt-1 block">{visitorCount}</span>
              </div>
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Users className="w-5 h-5" />
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-5 border border-border/40 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-muted uppercase tracking-wider block">Inbox Messages</span>
                <span className="text-xl font-extrabold text-foreground mt-1 block">{messages.length}</span>
              </div>
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <Mail className="w-5 h-5" />
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-5 border border-border/40 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-muted uppercase tracking-wider block">API Core Status</span>
                <span className="text-xs font-bold text-emerald-400 mt-1 block flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1" />
                  <span>99.9% Online</span>
                </span>
              </div>
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Settings className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Inbox Grid */}
          <div className="glassmorphism rounded-3xl p-6 border border-border/40">
            <h2 className="text-base font-bold text-foreground mb-4 flex items-center space-x-2">
              <Mail className="w-5 h-5 text-secondary" />
              <span>Visitor Message Inbox</span>
            </h2>

            {messages.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border/30 text-muted font-semibold">
                      <th className="pb-3 pr-2">Date</th>
                      <th className="pb-3 pr-2">Name</th>
                      <th className="pb-3 pr-2">Subject</th>
                      <th className="pb-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.map((msg) => (
                      <tr
                        key={msg.id}
                        className={`border-b border-border/10 hover:bg-foreground/5 transition-colors ${
                          msg.status === "unread" ? "font-bold text-foreground" : "text-muted"
                        }`}
                      >
                        <td className="py-3 pr-2 whitespace-nowrap">{msg.date.split(",")[0]}</td>
                        <td className="py-3 pr-2">{msg.name}</td>
                        <td className="py-3 pr-2 truncate max-w-[150px]">{msg.subject}</td>
                        <td className="py-3 text-right space-x-2">
                          <button
                            onClick={() => {
                              setSelectedMessage(msg);
                              handleMarkAsRead(msg.id);
                            }}
                            className="p-1 rounded-lg border border-border hover:bg-primary/20 hover:text-primary transition-colors inline-flex items-center"
                            title="Inspect Message"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteMessage(msg.id)}
                            className="p-1 rounded-lg border border-border hover:bg-red-500/20 hover:text-red-400 transition-colors inline-flex items-center"
                            title="Delete Message"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 text-muted text-xs">
                Inbox is completely empty.
              </div>
            )}
          </div>

          {/* Inspect Message Overlay panel */}
          {selectedMessage && (
            <div className="glassmorphism rounded-3xl p-6 border border-border/50 animate-scale-in">
              <div className="flex justify-between items-start border-b border-border/30 pb-4 mb-4">
                <div>
                  <span className="text-[9px] font-mono text-secondary block font-bold">{selectedMessage.date}</span>
                  <h3 className="text-base font-bold text-foreground">{selectedMessage.subject}</h3>
                </div>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="text-xs px-2.5 py-1 rounded-lg border border-border hover:bg-foreground/5 text-muted transition-colors"
                >
                  Close Detail
                </button>
              </div>

              <div className="space-y-3 text-xs leading-relaxed text-foreground/80">
                <p>
                  <strong className="text-foreground">From:</strong> {selectedMessage.name} ({selectedMessage.email})
                </p>
                {selectedMessage.phone !== "N/A" && (
                  <p>
                    <strong className="text-foreground">Phone:</strong> {selectedMessage.phone}
                  </p>
                )}
                <div className="p-4 bg-background/50 border border-border/30 rounded-xl text-foreground font-medium mt-4 whitespace-pre-wrap">
                  {selectedMessage.message}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: SEO & Config (Right 4 columns) */}
        <div className="lg:col-span-4 space-y-6">
          {/* SEO Metadata Form */}
          <div className="glassmorphism rounded-3xl p-6 border border-border/40">
            <h2 className="text-base font-bold text-foreground mb-4 flex items-center space-x-2">
              <Settings className="w-5 h-5 text-primary" />
              <span>SEO Manager</span>
            </h2>

            {seoSuccess && (
              <div className="mb-4 p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-semibold flex items-center space-x-1 animate-fade-in">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>SEO configurations synced!</span>
              </div>
            )}

            <form onSubmit={handleSaveSeo} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-muted uppercase tracking-wider block">Meta Title</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-border glassmorphism text-xs text-foreground placeholder:text-muted outline-none focus:border-primary transition-colors bg-background/30"
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-bold text-muted uppercase tracking-wider block">Meta Description</label>
                <textarea
                  rows={3}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-border glassmorphism text-xs text-foreground placeholder:text-muted outline-none focus:border-primary transition-colors bg-background/30 resize-none"
                  value={seoDescription}
                  onChange={(e) => setSeoDescription(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/80 transition-all shadow-md shadow-primary/10"
              >
                Sync Meta Configuration
              </button>
            </form>
          </div>

          {/* Quick Analytics Visual representation */}
          <div className="glassmorphism rounded-3xl p-6 border border-border/40">
            <h2 className="text-base font-bold text-foreground mb-4">Traffic Heatmap</h2>
            {/* simple SVG visualization of traffic chart */}
            <svg viewBox="0 0 100 40" className="w-full h-auto overflow-visible">
              <defs>
                <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,35 Q15,10 30,22 T60,5 T90,28 L100,30 L100,40 L0,40 Z"
                fill="url(#chart-glow)"
              />
              <path
                d="M0,35 Q15,10 30,22 T60,5 T90,28 L100,30"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* circles */}
              <circle cx="30" cy="22" r="1.5" fill="var(--accent)" />
              <circle cx="60" cy="5" r="1.5" fill="var(--accent)" />
              <circle cx="90" cy="28" r="1.5" fill="var(--accent)" />
            </svg>
            <div className="flex justify-between text-[8px] font-bold text-muted uppercase mt-3">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
              <span>Sun</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
