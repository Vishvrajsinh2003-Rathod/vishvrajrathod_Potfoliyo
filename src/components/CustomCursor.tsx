"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const trailRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    let animationFrameId: number;

    const updateTrail = () => {
      const dx = position.x - trailRef.current.x;
      const dy = position.y - trailRef.current.y;
      
      // Interpolate for smooth lag effect
      trailRef.current.x += dx * 0.15;
      trailRef.current.y += dy * 0.15;
      
      setTrail({ x: trailRef.current.x, y: trailRef.current.y });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 mix-blend-screen ${
          isHovered ? "scale-150 bg-primary/20" : ""
        }`}
        style={{
          transform: `translate3d(${trail.x}px, ${trail.y}px, 0) scale(${isHovered ? 1.5 : 1})`,
        }}
      />
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </>
  );
}
