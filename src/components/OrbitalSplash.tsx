"use client";

import React from 'react';
import { Code, PenTool, Smartphone, Monitor, Layers } from 'lucide-react';

export default function OrbitalSplash({ greeting = "WELCOME TO MY WORLD" }: { greeting?: string }) {
  const icons = [
    { Icon: Code, label: "Web Developer", color: "#f44849" },
    { Icon: PenTool, label: "Designing", color: "#a8b9cc" },
    { Icon: Smartphone, label: "App Developer", color: "#3776ab" },
    { Icon: Monitor, label: "Website Creator", color: "#f7df1e" },
    { Icon: Layers, label: "UI/UX", color: "#ffffff" }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#050508] overflow-hidden perspective-[1000px]">
      
      {/* 3D Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'rotateX(60deg) translateY(-100px) scale(2.5)',
          transformOrigin: 'top center',
          maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
        }}
      ></div>

      {/* Center Greeting — no button, purely visual */}
      <div className="absolute z-20 flex flex-col items-center justify-center text-center p-8 bg-black/80 backdrop-blur-xl rounded-full border border-white/10 w-72 h-72 sm:w-96 sm:h-96 shadow-[0_0_80px_rgba(244,72,73,0.2)] pointer-events-none">
        <h3 className="font-['Archivo_Black'] text-white text-3xl sm:text-4xl leading-tight tracking-wider uppercase m-0">{greeting}</h3>
        <div className="mt-5 w-16 h-[3px] bg-[#f44849]"></div>
      </div>

      {/* Orbiting Icons (Massive Ring) */}
      <div className="absolute z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] animate-[spin_30s_linear_infinite] rounded-full border border-white/10 border-dashed pointer-events-none">
        {icons.map((item, i) => {
          const angle = (i / icons.length) * 360;
          return (
            <div 
              key={i}
              className="absolute w-full h-full"
              style={{
                transform: `rotate(${angle}deg)`,
              }}
            >
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-[#15151A] rounded-full border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                style={{
                  transform: `translateX(-50%) translateY(-50%) rotate(-${angle}deg)`,
                }}
              >
                <div className="animate-[spin_30s_linear_infinite_reverse] flex flex-col items-center group cursor-default w-full h-full justify-center">
                  <item.Icon size={30} color={item.color} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute top-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[13px] font-mono whitespace-nowrap bg-black/90 px-3 py-1.5 rounded text-white border border-white/20 pointer-events-none">
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Outer Orbit Rings for extra depth */}
      <div className="absolute z-0 w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] md:w-[1100px] md:h-[1100px] rounded-full border border-white/5 animate-[spin_45s_linear_infinite_reverse] pointer-events-none"></div>
      <div className="absolute z-0 w-[800px] h-[800px] sm:w-[1100px] sm:h-[1100px] md:w-[1400px] md:h-[1400px] rounded-full border border-white/[0.02] animate-[spin_60s_linear_infinite] pointer-events-none"></div>
      
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(244,72,73,0.08)_0%,transparent_70%)] pointer-events-none"></div>
    </div>
  );
}
