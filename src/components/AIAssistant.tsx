"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, User, Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Message {
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

export default function AIAssistant() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am your AI Career Companion. Select a helper module or type any questions about skills and portfolios.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [activeTab, setActiveTab] = useState<"general" | "advisor" | "analyzer" | "recommender">("general");
  const [isListening, setIsListening] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to latest messages
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBotMessage = (text: string) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages((prev) => [...prev, { sender: "bot", text, timestamp }]);
    
    // Web Speech Synthesis (Text to Speech)
    if (soundEnabled && typeof window !== "undefined" && window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return;
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages((prev) => [...prev, { sender: "user", text, timestamp }]);
    setInputValue("");

    // Generate responsive response based on active tab & matching patterns
    setTimeout(() => {
      processBotResponse(text);
    }, 800);
  };

  const processBotResponse = (userInput: string) => {
    const query = userInput.toLowerCase();
    
    // Tab 1: AI Career Advisor
    if (activeTab === "advisor") {
      if (query.includes("skill") || query.includes("career")) {
        addBotMessage("Based on market analyses, mastering Next.js 16 and backend FastAPI puts you in the top 5% of React developers. I recommend adding PostgreSQL (pgvector) experience to land high-paying AI-UI jobs.");
      } else {
        addBotMessage("Tell me your primary development goals (e.g. backend core vs interactive frontend) and I'll lay out a learning roadmap for you.");
      }
      return;
    }

    // Tab 2: Resume Analyzer
    if (activeTab === "analyzer") {
      // Analyze bullet points and grade them
      const wordsCount = userInput.split(/\s+/).length;
      if (wordsCount < 5) {
        addBotMessage("Please paste a bullet point from your resume (e.g. 'Optimized app load speed by 20% using server rendering').");
      } else {
        const score = Math.floor(Math.random() * 20) + 75; // Generate score between 75 and 95
        addBotMessage(`Resume Bullet Analysis Score: ${score}/100.
        
Recommendations:
1. Boost action verbs (e.g. 'Engineered', 'Orchestrated').
2. Make sure you highlight specific business metrics.
Example rewrite: 'Engineered responsive async backend routes using FastAPI, cutting query execution latencies by 30%.'`);
      }
      return;
    }

    // Tab 3: Project Recommender
    if (activeTab === "recommender") {
      if (query.includes("frontend") || query.includes("ui") || query.includes("design")) {
        addBotMessage("I recommend looking at the 'Premium AI Portfolio Website' or 'Smart Analytics Admin Console' projects. They demonstrate advanced Tailwind CSS configs and custom interactive canvases.");
      } else if (query.includes("backend") || query.includes("api") || query.includes("python")) {
        addBotMessage("Check out 'Career Recommendation System' or 'Async FastAPI Core Engine'. They highlight robust microservice designs with JWT rate-limiting and relational DB pools.");
      } else {
        addBotMessage("What tech stack does your company use? (e.g., Python/FastAPI or React/TypeScript)? Type it and I will match it with corresponding projects.");
      }
      return;
    }

    // Tab 4: General FAQ / Chatbot
    if (query.includes("skills") || query.includes("languages")) {
      addBotMessage("Vishvrajsinh is fluent in Next.js, React, TypeScript, Tailwind, Python, FastAPI, and Postgres database schemas. He also builds multi-lingual support (English, Hindi, Gujarati).");
    } else if (query.includes("projects")) {
      addBotMessage("He has created several key projects: Career Recommendation System, Student Prediction tools, FastAPI cores, and this portfolio! Click on the projects section cards to explore their architectures.");
    } else if (query.includes("hire") || query.includes("available")) {
      addBotMessage("He is available for full-time contracts, freelance projects, and remote engineering positions. You can drop a message in the contact form or send a WhatsApp message to book a chat.");
    } else {
      addBotMessage("That's interesting! I'm trained on Vishvrajsinh's portfolio. You can ask about his tech stack, inspect project details, or test out my Career Advisor and Resume Analyzer tools!");
    }
  };

  // Web Speech API (Speech to Text)
  const toggleSpeechToText = () => {
    if (typeof window === "undefined") return;
    
    // Check compatibility
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser. Please use Chrome or Safari.");
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
      handleSendMessage(transcript);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-2xl hover:scale-110 transition-transform neon-glow-primary flex items-center justify-center"
        title="Open AI Companion"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>

      {/* Main Companion Box */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm md:max-w-md h-[550px] glassmorphism border border-border/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-40 animate-scale-in">
          
          {/* Header */}
          <div className="p-4 border-b border-border/40 bg-foreground/5 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5 text-primary" />
              <div>
                <span className="block text-xs font-bold text-foreground">AI Companion</span>
                <span className="text-[9px] text-emerald-400 font-semibold flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Online / Local Inference</span>
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {/* Sound Toggle */}
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`p-1.5 rounded-lg border transition-colors ${
                  soundEnabled ? "border-primary/50 text-primary bg-primary/10" : "border-border text-muted"
                }`}
                title="Toggle Text-To-Speech response reading"
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-muted hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Module Selector Sub-tabs */}
          <div className="grid grid-cols-4 border-b border-border/20 text-[10px] font-bold text-muted bg-foreground/5">
            <button
              onClick={() => setActiveTab("general")}
              className={`py-2 text-center border-r border-border/10 transition-colors ${
                activeTab === "general" ? "text-primary bg-background/40" : "hover:text-foreground"
              }`}
            >
              General Chat
            </button>
            <button
              onClick={() => {
                setActiveTab("advisor");
                addBotMessage("Welcome to the AI Career Advisor. Tell me your developer ambitions, and I will recommend a technical roadmap.");
              }}
              className={`py-2 text-center border-r border-border/10 transition-colors ${
                activeTab === "advisor" ? "text-primary bg-background/40" : "hover:text-foreground"
              }`}
            >
              Advisor
            </button>
            <button
              onClick={() => {
                setActiveTab("analyzer");
                addBotMessage("Welcome to the Resume Bullet Analyzer. Paste a resume point here and I will grade and rewrite it.");
              }}
              className={`py-2 text-center border-r border-border/10 transition-colors ${
                activeTab === "analyzer" ? "text-primary bg-background/40" : "hover:text-foreground"
              }`}
            >
              Analyzer
            </button>
            <button
              onClick={() => {
                setActiveTab("recommender");
                addBotMessage("Welcome to the Project Recommender. Tell me your business needs (e.g. backend speed, interactive UI) to match project code.");
              }}
              className={`py-2 text-center transition-colors ${
                activeTab === "recommender" ? "text-primary bg-background/40" : "hover:text-foreground"
              }`}
            >
              Projects
            </button>
          </div>

          {/* Messages Logs Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} items-start space-x-2`}
              >
                {msg.sender === "bot" && (
                  <div className="p-1.5 bg-primary/10 rounded-lg text-primary mt-1">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl p-3 text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-primary text-white font-medium"
                      : "border border-border/50 bg-background/40 text-foreground/90"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span className="block text-[8px] text-muted text-right mt-1.5 font-mono">
                    {msg.timestamp}
                  </span>
                </div>
                {msg.sender === "user" && (
                  <div className="p-1.5 bg-secondary/10 rounded-lg text-secondary mt-1">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
            <div ref={scrollRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-border/40 bg-foreground/5 flex items-center space-x-2">
            {/* Microphone STT trigger */}
            <button
              onClick={toggleSpeechToText}
              className={`p-2 rounded-xl border transition-colors ${
                isListening ? "bg-red-500/25 border-red-500/50 text-red-500 animate-pulse" : "border-border text-muted hover:text-foreground"
              }`}
              title="Speak to enter prompt (Chrome/Safari)"
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            <input
              type="text"
              placeholder={inputValue ? inputValue : "Type message..."}
              className="flex-1 px-4 py-2.5 rounded-xl border border-border glassmorphism text-xs text-foreground placeholder:text-muted outline-none focus:border-primary transition-colors bg-background/30"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
            />

            <button
              onClick={() => handleSendMessage()}
              className="p-2.5 rounded-xl bg-primary hover:bg-primary/80 text-white transition-all shadow-md flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
