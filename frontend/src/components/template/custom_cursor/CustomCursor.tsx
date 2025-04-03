"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const updatePosition = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Função para lidar com hover em elementos clicáveis
    const handleLinkHoverEnter = () => {
      gsap.to(cursorDot, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleLinkHoverLeave = () => {
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseDown = () => {
      gsap.to(cursorDot, {
        scale: 0.75,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    // Adiciona listeners para elementos clicáveis
    const clickableElements = document.querySelectorAll(
      'a, button, [role="button"]'
    );
    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", handleLinkHoverEnter);
      element.addEventListener("mouseleave", handleLinkHoverLeave);
    });

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleLinkHoverEnter);
        element.removeEventListener("mouseleave", handleLinkHoverLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed cursor-none pointer-events-none"
      style={{
        transform: "translate(-50%, -50%)",
        left: 0,
        top: 0,
        zIndex: 9999,
      }}
    >
      <div
        ref={cursorDotRef}
        className="w-10 h-10 rounded-full backdrop-blur-sm mix-blend-difference"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          boxShadow:
            "0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.2)",
        }}
      />
    </div>
  );
};

export default CustomCursor;
