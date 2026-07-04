"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Send, Phone, MessageSquare, Calendar, MapPin, SendHorizontal, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    // Simulate sending message + store in localStorage for Admin Panel Message Inbox
    const existingMessages = JSON.parse(localStorage.getItem("admin_messages") || "[]");
    const newMessage = {
      id: Date.now().toString(),
      name: form.name,
      email: form.email,
      phone: form.phone || "N/A",
      subject: form.subject || "No Subject",
      message: form.message,
      date: new Date().toLocaleString(),
      status: "unread",
    };

    localStorage.setItem("admin_messages", JSON.stringify([newMessage, ...existingMessages]));

    setSuccess(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative px-6 z-10 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient mb-4">
            {t("contactTitle")}
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            {t("contactSubtitle")}
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form container (Left 7 columns) */}
          <div className="lg:col-span-7 glassmorphism rounded-3xl p-6 md:p-8 border border-border/40">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2">
              <Send className="w-5 h-5 text-primary" />
              <span>Send a Message</span>
            </h3>

            {success && (
              <div className="mb-6 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-semibold flex items-center space-x-2 animate-fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Message recorded successfully! It will show up in the Admin Panel inbox.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted uppercase tracking-wider block">
                    {t("contactName")} *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border glassmorphism text-xs text-foreground placeholder:text-muted outline-none focus:border-primary transition-colors bg-background/30"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted uppercase tracking-wider block">
                    {t("contactEmail")} *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border glassmorphism text-xs text-foreground placeholder:text-muted outline-none focus:border-primary transition-colors bg-background/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted uppercase tracking-wider block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border glassmorphism text-xs text-foreground placeholder:text-muted outline-none focus:border-primary transition-colors bg-background/30"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted uppercase tracking-wider block">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border glassmorphism text-xs text-foreground placeholder:text-muted outline-none focus:border-primary transition-colors bg-background/30"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted uppercase tracking-wider block">
                  {t("contactMessage")} *
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-border glassmorphism text-xs text-foreground placeholder:text-muted outline-none focus:border-primary transition-colors bg-background/30 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold shadow-lg hover:shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
              >
                <span>{t("contactSend")}</span>
                <SendHorizontal className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Social Hooks & Booking (Right 5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Calendly Booking Card */}
            <div className="glassmorphism rounded-3xl p-6 border border-border/40 text-center">
              <Calendar className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h4 className="text-base font-bold text-foreground mb-1">
                {t("contactBooking")}
              </h4>
              <p className="text-xs text-muted mb-4">
                Schedule a 15-minute introductory video call to review technical details of your project.
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 rounded-xl border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all text-xs font-bold"
              >
                Open Schedule
              </a>
            </div>

            {/* Quick social links */}
            <div className="glassmorphism rounded-3xl p-6 border border-border/40 space-y-4">
              <h4 className="text-sm font-bold text-foreground mb-4">Quick Direct Channels</h4>
              
              <a
                href="https://wa.me/919925306722"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-border/50 bg-background/30 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold text-foreground/80 group-hover:text-foreground">WhatsApp: +91 9925306722</span>
                </div>
                <SendHorizontal className="w-4 h-4 text-muted group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://t.me/telegram_username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-border/50 bg-background/30 hover:border-sky-500/40 hover:bg-sky-500/5 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-4 h-4 text-sky-500" />
                  <span className="text-xs font-bold text-foreground/80 group-hover:text-foreground">Telegram Channel</span>
                </div>
                <SendHorizontal className="w-4 h-4 text-muted group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Google Map Mock */}
            <div className="glassmorphism rounded-3xl p-6 border border-border/40 flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-muted uppercase tracking-wider block">Location</span>
                <span className="text-xs font-bold text-foreground/80">Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
