"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, Eye, X, CheckCircle, Network, Flame } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  liveLink: string;
  githubLink: string;
  features: string[];
  challenges: string;
  architecture: string;
}

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsList: Project[] = [
    {
      id: "career-rec",
      title: "Career Recommendation System",
      category: "AI & Machine Learning",
      description: "An AI-powered system recommending career tracks by matching skill tests, experience, and interests with global job market demand.",
      tech: ["Python", "Machine Learning", "MySQL"],
      liveLink: "#",
      githubLink: "https://github.com/Vishvrajsinh2003-Rathod",
      features: [
        "Interactive skill assessment engine",
        "Semantic matching with live corporate job data",
        "Exportable Career Action Map"
      ],
      challenges: "Analyzing complex datasets to find the right career path. Overcome by designing custom matching algorithms.",
      architecture: "Python Backend -> MySQL Database -> Data Processing Engine."
    },
    {
      id: "placeholder-1",
      title: "Next-Gen Web App",
      category: "In Progress",
      description: "A highly performant, futuristic web application being built with React, Next.js, and modern CSS frameworks.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      liveLink: "#",
      githubLink: "https://github.com/Vishvrajsinh2003-Rathod",
      features: [
        "Premium UI/UX Design",
        "Seamless Animations",
        "Optimized Performance"
      ],
      challenges: "Currently exploring advanced animation techniques and state management.",
      architecture: "React Client -> Next.js SSR -> Headless CMS."
    },
    {
      id: "placeholder-2",
      title: "Innovative AI Tool",
      category: "Coming Soon",
      description: "Exploring the integration of Large Language Models to solve complex automation tasks for businesses.",
      tech: ["Python", "OpenAI API", "React"],
      liveLink: "#",
      githubLink: "https://github.com/Vishvrajsinh2003-Rathod",
      features: [
        "Natural Language Processing",
        "Automated Task Generation",
        "Secure Data Handling"
      ],
      challenges: "Research phase: Evaluating prompt engineering techniques and token optimization.",
      architecture: "Python Backend -> LLM API -> Frontend Interface."
    }
  ];

  return (
    <section id="projects" className="py-24 relative px-6 z-10 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gradient mb-4">
            {t("projectsTitle")}
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            {t("projectsSubtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="glassmorphism rounded-3xl p-6 border border-border/40 hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2 group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md text-[10px] font-semibold bg-foreground/5 border border-border/40 text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between border-t border-border/30 pt-4 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center space-x-1.5 text-xs text-primary font-bold hover:underline"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Code & Architecture</span>
                </button>
                <div className="flex space-x-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground/80 hover:text-foreground transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground/80 hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Inspector Detail */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl glassmorphism border border-border rounded-3xl p-6 md:p-8 max-h-[90vh] overflow-y-auto animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl hover:bg-foreground/5 text-muted hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Core Features */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-foreground flex items-center space-x-2 border-b border-border/40 pb-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>{t("projFeatures")}</span>
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-muted flex items-start space-x-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture Section */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-foreground flex items-center space-x-2 border-b border-border/40 pb-1">
                  <Network className="w-4 h-4 text-primary" />
                  <span>{t("projArchitecture")}</span>
                </h4>
                <div className="p-4 bg-background/40 border border-border/50 rounded-xl font-mono text-xs text-foreground/80 leading-relaxed">
                  {selectedProject.architecture}
                </div>
              </div>

              {/* Technical Challenges */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-foreground flex items-center space-x-2 border-b border-border/40 pb-1">
                  <Flame className="w-4 h-4 text-secondary" />
                  <span>{t("projChallenges")}</span>
                </h4>
                <p className="text-xs text-muted leading-relaxed pl-2">
                  {selectedProject.challenges}
                </p>
              </div>

              {/* Bottom links */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/30 justify-between">
                <div className="flex gap-2">
                  {selectedProject.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md text-[10px] font-semibold bg-foreground/5 border border-border/40 text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 text-xs font-semibold rounded-xl bg-foreground/5 border border-border hover:bg-foreground/10 text-foreground transition-all"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    <span>{t("projGithub")}</span>
                  </a>
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 text-xs font-semibold rounded-xl bg-primary hover:bg-primary/80 text-white transition-all shadow-md shadow-primary/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t("projLiveDemo")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
