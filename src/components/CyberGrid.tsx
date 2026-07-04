"use client";

import React from "react";

export default function CyberGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 3D Perspective Grid */}
      <div 
        className="absolute top-1/2 left-1/2 w-[200vw] h-[200vh] origin-center -translate-x-1/2 -translate-y-1/2 opacity-35"
        style={{
          perspective: "600px",
          transform: "rotateX(75deg) translateY(-25%)",
        }}
      >
        <div 
          className="w-full h-full cyber-grid"
          style={{
            animation: "grid-move 20s linear infinite",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Cyber gradient fade out top */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
      
      {/* Radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,var(--background)_100%)] pointer-events-none" />

      {/* Custom Keyframes in-file style block for moving grid */}
      <style jsx global>{`
        @keyframes grid-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 1200px;
          }
        }
      `}</style>
    </div>
  );
}
