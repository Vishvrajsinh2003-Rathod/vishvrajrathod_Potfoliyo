"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Brain, LayoutTemplate, Bot, FileText, Grid3x3, Gamepad2, UtensilsCrossed, CloudSun, Smartphone } from 'lucide-react';

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState("SEND MESSAGE →");
  const [greeting, setGreeting] = useState("WELCOME");

  useEffect(() => {
  const hour = new Date().getHours();
  if (hour < 12) setGreeting("GOOD MORNING");
  else if (hour < 18) setGreeting("GOOD AFTERNOON");
  else setGreeting("GOOD EVENING");
}, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("MESSAGE SENT ✓");
    setTimeout(() => setFormStatus("SEND MESSAGE →"), 3000);
  };

  return (
    <>
     
      <nav>
        <div className="logo">VISHVRAJ<span>RATHOD.</span></div>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="/services">Services</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`} ref={dropdownRef}>
            <a href="#!" onClick={(e) => { e.preventDefault(); setIsDropdownOpen(!isDropdownOpen); }}>More ▾</a>
            <div className="dropdown-menu">
              <a href="#about" onClick={() => setIsDropdownOpen(false)}>About / Mission</a>
              <a href="#education" onClick={() => setIsDropdownOpen(false)}>Education</a>
              <a href="#skills" onClick={() => setIsDropdownOpen(false)}>Skill Toolkit</a>
              <a href="https://github.com/Vishvrajsinh2003-Rathod" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/vishvrajsinh-rathod-8588322" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <a href="mailto:rathodvishvrajsinh2003@gmail.com" className="cta-btn">Get In Touch</a>
      </nav>

      {/* HERO */}
      <section className="hero" style={{ borderTop: 'none', paddingTop: '80px' }}>
        <div>
          <div className="eyebrow"><div className="bar"></div><span>Hi, I'm Vishvraj</span></div>
          <h1>Building intelligent products from idea to deployment</h1>
          <p className="lead">MSc IT student and Full Stack AI Developer working with Phaze AI on intelligent agent platforms. I turn ideas into working software — Python, JavaScript, and the tools that connect them.</p>
          <div className="hero-btns">
            <a href="#projects" className="btn-solid">View My Work</a>
            <a href="mailto:rathodvishvrajsinh2003@gmail.com" className="btn-outline">Let's Connect →</a>
            <a href="/Vishvrajsinh_Rathod_CV.pdf" download className="btn-outline">Download CV ↓</a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo">
            <img 
              src="/profile-photo.jpg" 
              alt="Vishvraj Rathod" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>
          <div className="badge-float"><div className="dot"></div>OPEN TO WORK</div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">
        <div className="manifesto-tag">// What I Do</div>
        <div className="stack-word">Learn.</div>
        <div className="stack-word">Build.</div>
        <div className="stack-word accent">Ship.</div>
        <p className="manifesto-sub">No fluff, no filler. I pick up a problem, learn what it actually needs, and ship working software — agents, web apps, or whatever the brief calls for.</p>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-tag">// Languages & Core</div>
        <div className="section-title">Skills & Toolkit</div>
        {/* Frontend & Web Designing */}
        <h3 style={{ fontFamily: 'Archivo Black', fontSize: '32px', marginBottom: '24px', marginTop: '40px', textTransform: 'uppercase', letterSpacing: '-1px' }}>Frontend, UI/UX & Web Design</h3>
        <div className="skills-grid">
          <div className="skill-card"><div className="skill-icon" style={{background:'#F7DF1E', color:'#000'}}>JS</div><div className="skill-name">JAVASCRIPT</div></div>
          <div className="skill-card"><div className="skill-icon" style={{background:'#E34F26'}}>5</div><div className="skill-name">HTML5</div></div>
          <div className="skill-card"><div className="skill-icon" style={{background:'#1572B6'}}>3</div><div className="skill-name">CSS3</div></div>
          <div className="skill-card"><div className="skill-icon" style={{background:'#61DAFB', color:'#000'}}>RE</div><div className="skill-name">REACT / NEXT.JS</div></div>
          <div className="skill-card"><div className="skill-icon" style={{background:'#F24E1E'}}>UI</div><div className="skill-name">FIGMA / UI UX</div></div>
        </div>

        {/* Backend & Databases */}
        <h3 style={{ fontFamily: 'Archivo Black', fontSize: '32px', marginBottom: '24px', marginTop: '60px', textTransform: 'uppercase', letterSpacing: '-1px' }}>Backend & Databases</h3>
        <div className="skills-grid">
          <div className="skill-card"><div className="skill-icon" style={{background:'#3776AB'}}>PY</div><div className="skill-name">PYTHON</div></div>
          <div className="skill-card"><div className="skill-icon" style={{background:'#339933'}}>ND</div><div className="skill-name">NODE.JS</div></div>
          <div className="skill-card"><div className="skill-icon" style={{background:'#A8B9CC', color:'#000'}}>C</div><div className="skill-name">C / C++</div></div>
          <div className="skill-card"><div className="skill-icon" style={{background:'#4479A1'}}>DB</div><div className="skill-name">MYSQL</div></div>
          <div className="skill-card"><div className="skill-icon" style={{background:'#47A248'}}>MG</div><div className="skill-name">MONGODB</div></div>
        </div>

        {/* Tools & DevOps */}
        <h3 style={{ fontFamily: 'Archivo Black', fontSize: '32px', marginBottom: '24px', marginTop: '60px', textTransform: 'uppercase', letterSpacing: '-1px' }}>Tools & AI Platforms</h3>
        <div className="skills-grid">
          <div className="skill-card"><div className="skill-icon" style={{background:'#181717'}}>⌥</div><div className="skill-name">GIT / GITHUB</div></div>
          <div className="skill-card"><div className="skill-icon" style={{background:'var(--blue)'}}>AI</div><div className="skill-name">AGENT PLATFORMS</div></div>
          <div className="skill-card"><div className="skill-icon" style={{background:'#000'}}>🐧</div><div className="skill-name">LINUX</div></div>
          <div className="skill-card"><div className="skill-icon" style={{background:'#2496ED'}}>DK</div><div className="skill-name">DOCKER</div></div>
          <div className="skill-card"><div className="skill-icon" style={{background:'#444'}}>📊</div><div className="skill-name">MS OFFICE</div></div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-tag">// Selected Work</div>
        <div className="section-title">Projects</div>
        <div className="projects-grid">

          <div className="project-card">
          <div
  className="project-thumb thumb-ai"
  style={{
    background: "#000",
  }}
>
  <div className="thumb-icon"><Smartphone size={32} color="#fff" /></div>
  <div className="thumb-label">MOBILE · REACT NATIVE</div>
</div>
            <div className="project-body">
              <h3>Client &amp; Project Tracker <span style={{ fontSize: '11px', fontWeight: 700, color: '#E5484D' }}>· iOS &amp; Android</span></h3>
              <p><strong>Problem:</strong> Freelancers and small agencies lose track of client details and project status across scattered notes and chats. <strong>Solution:</strong> A cross-platform React Native app to log clients, track each project's status (Not Started → In Progress → Review → Completed), and see an at-a-glance dashboard — all with on-device data persistence. <strong>Result:</strong> A working proof-of-concept for the Mobile App Development service, built and tested on both iOS Simulator and Expo Go.</p>
              <div className="tag-row"><span className="tag">React Native</span><span className="tag">Expo</span><span className="tag">TypeScript</span></div>
            </div>
            <Link href="/projects/client-project-tracker" className="project-link">View Project →</Link>
          </div>

          <div className="project-card">
           <div className="project-thumb thumb-weather">
  <div className="thumb-icon"><Brain size={32} color="#fff" /></div>
  <div className="thumb-label">CAREER-AI</div>
</div>
            <div className="project-body">
              <h3>Career Recommender</h3>
              <p><strong>Problem:</strong> Students struggle to map their academic background and skills to a concrete career path. <strong>Solution:</strong> A Random Forest ML model trained on academic and skill inputs to recommend fitting career tracks. Built as an MSc IT capstone, covering the full pipeline — data prep, model training, and a usable interface.</p>
              <div className="tag-row"><span className="tag">Python</span><span className="tag">ML</span><span className="tag">Random Forest</span></div>
            </div>
            <Link href="/projects/career-recommender" className="project-link">View Project →</Link>
          </div>

          <div className="project-card">
          <div className="project-thumb thumb-restaurant">
  <div className="thumb-icon"><UtensilsCrossed size={32} color="#fff" /></div>
  <div className="thumb-label">WEB · RESTAURANT</div>
</div>
            <div className="project-body">
              <h3>Restaurant Booking Site</h3>
              <p><strong>Problem:</strong> Small restaurants often rely on phone calls for table bookings, losing reservations after hours. <strong>Solution:</strong> A responsive booking site with a digital menu and a table reservation form with client-side validation, so guests can book anytime from any device.</p>
              <div className="tag-row"><span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">JS</span></div>
            </div>
           <Link href="/projects/restaurant-booking" className="project-link">View Project →</Link>
          </div>

          <div className="project-card">
          <div
  className="project-thumb thumb-weather"
  style={{
    background: "#000",
  }}
>
  <div className="thumb-icon"><CloudSun size={32} color="#fff" /></div>
  <div className="thumb-label">WEB · WEATHER</div>
</div>
            <div className="project-body">
              <h3>Weather Dashboard</h3>
              <p><strong>Problem:</strong> Most weather widgets look identical regardless of conditions. <strong>Solution:</strong> A live dashboard that pulls real-time data by city search and adapts its UI dynamically to current conditions, built around a public weather API.</p>
              <div className="tag-row"><span className="tag">API</span><span className="tag">JavaScript</span><span className="tag">Dashboard</span></div>
            </div>
           <Link href="/projects/weather-dashboard" className="project-link">View Project →</Link>
          </div>

          <div className="project-card">
           <div className="project-thumb thumb-portfolio">
  <div className="thumb-icon"><LayoutTemplate size={32} color="#fff" /></div>
  <div className="thumb-label">PORTFOLIO</div>
</div>
            <div className="project-body">
              <h3>Premium Portfolio</h3>
              <p>An earlier single-file personal portfolio experiment — AI chat widget, 3D effects, scroll animations, and live GitHub integration, all in one HTML file with no build step.</p>
              <div className="tag-row"><span className="tag">HTML</span><span className="tag">JS</span><span className="tag">3D</span></div>
            </div>
            <Link href="/projects/premium-portfolio" className="project-link">View Project →</Link>
            
          </div>

          {/* Fun side projects — kept, but placed after the client-relevant work above */}
          <div className="project-card">
            <div className="project-thumb thumb-tictactoe" style={{ backgroundImage: "url('/projects/tictactoe.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="thumb-icon"><Grid3x3 size={32} color="#fff" /></div>
  <div className="thumb-label">GAME · TIC-TAC-TOE</div>
</div>
            <div className="project-body">
              <h3>Tic-Tac-Toe AI <span style={{ fontSize: '11px', fontWeight: 400, opacity: 0.6 }}>· Side Project</span></h3>
              <p>Browser game with an unbeatable opponent powered by the Minimax algorithm, plus score tracking and replay.</p>
              <div className="tag-row"><span className="tag">JavaScript</span><span className="tag">Minimax</span><span className="tag">Game</span></div>
            </div>
            <Link href="/projects/tic-tac-toe-ai" className="project-link">View Project →</Link>
          </div>

          <div className="project-card">
            <div className="project-thumb thumb-snake" style={{ backgroundImage: "url('/projects/snake.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="thumb-icon"><Gamepad2 size={32} color="#fff" /></div>
  <div className="thumb-label">GAME · SNAKE</div>
</div>
            <div className="project-body">
              <h3>Snake Game <span style={{ fontSize: '11px', fontWeight: 400, opacity: 0.6 }}>· Side Project</span></h3>
              <p>Classic Snake rebuilt with HTML5 Canvas — smooth movement, increasing difficulty, and high-score memory.</p>
              <div className="tag-row"><span className="tag">Canvas</span><span className="tag">JavaScript</span><span className="tag">Game</span></div>
            </div>
            <Link href="/projects/snake-game" className="project-link">View Project →</Link>
          </div>

        </div>
      </section>

      {/* ABOUT / MISSION + EDUCATION */}
      <section id="about">
        <div className="section-tag">// About</div>
        <div className="section-title">Mission & Background</div>
        <div className="about-grid">
          <div className="about-left">
            <div className="mini-label">Mission</div>
            <p className="mission">Enthusiastic IT graduate who enjoys solving problems and building with intelligent agent platforms. I learn fast, work well in teams, and turn rough ideas into clean, working software.</p>
            <div className="mini-label">Current Focus</div>
            <div className="focus-box">Quick-learning Full Stack AI Developer at Phaze AI, building agent-based platforms and shipping production-ready interfaces with Python, JavaScript, and MySQL.</div>
          </div>
          <div className="about-right">
            <div className="chip-group">
              <div className="mini-label">Languages</div>
              <div className="chip-row">
                <span className="chip">HINDI</span><span className="chip">ENGLISH</span><span className="chip">GUJARATI</span>
              </div>
            </div>
            <div className="chip-group">
              <div className="mini-label">Soft Skills</div>
              <div className="chip-row">
                <span className="chip">PROBLEM SOLVING</span><span className="chip">COMMUNICATION</span>
                <span className="chip">LEADERSHIP</span><span className="chip">CREATIVITY</span><span className="chip">ADAPTABILITY</span>
              </div>
            </div>
            <div className="chip-group" id="education">
              <div className="mini-label">Education</div>
              <div className="chip-row">
                <span className="chip">MSC IT · SILVER OAK UNIV · 2026–PRESENT</span>
              </div>
              <div className="chip-row">
                <span className="chip">BA ENGLISH · HNGU · 2021–2024</span>
              </div>
              <div className="chip-row">
                <span className="chip">ITI-COPA · GOVT. ITI VADALI · 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-grid">
          <div className="contact-left">
            <h2>Let's Build Something Together</h2>
            <p className="sub">Have a project in mind? Looking for a developer who cares about both code and quality? Let's talk.</p>
            <div className="contact-row"><div className="ic">✉</div>RATHODVISHVRAJSINH2003@GMAIL.COM</div>
            <div className="contact-row"><div className="ic">in</div>LINKEDIN.COM/IN/VISHVRAJSINH-RATHOD-8588322</div>
            <div className="contact-row"><div className="ic">⌥</div>GITHUB.COM/VISHVRAJSINH2003-RATHOD</div>
            <a href="/Vishvrajsinh_Rathod_CV.pdf" download style={{ display: 'inline-block', marginTop: '16px' }} className="btn-outline">Download CV ↓</a>
          </div>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label>NAME</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label>EMAIL</label>
              <input type="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label>MESSAGE</label>
              <textarea placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit" className="send-btn">{formStatus}</button>
          </form>
        </div>
      </section>

      {/* FOOTER INFO */}
      <div className="footer-info">
        <div className="footer-meta">
          <span>📍 GOTA, AHMEDABAD, INDIA</span>
          <span>🎓 MSC IT | SILVER OAK UNIVERSITY (CGPA 6.92)</span>
          <span>📞 +91 99253 06722</span>
        </div>
        <div className="icon-btns">
          <a className="icon-btn" href="mailto:rathodvishvrajsinh2003@gmail.com" title="Email">✉</a>
          <a className="icon-btn" href="https://github.com/Vishvrajsinh2003-Rathod" target="_blank" rel="noopener noreferrer" title="GitHub">⌥</a>
          <a className="icon-btn" href="https://www.linkedin.com/in/vishvrajsinh-rathod-8588322" target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>
        </div>
      </div>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker">
          <span>
            <span>PYTHON</span><span>JAVASCRIPT</span><span>HTML5</span><span>CSS3</span><span>AI AGENTS</span><span>MYSQL</span><span>GIT</span><span>PAPERCLIP</span><span>PHAZE AI</span>
            <span>PYTHON</span><span>JAVASCRIPT</span><span>HTML5</span><span>CSS3</span><span>AI AGENTS</span><span>MYSQL</span><span>GIT</span><span>PAPERCLIP</span><span>PHAZE AI</span>
          </span>
        </div>
      </div>

      <footer>© 2026 Vishvraj Rathod. Built with intent, line by line.</footer>
    </>
  );
}
