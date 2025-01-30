"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

const useCustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    if (!cursor) return;

    // Função para mover o cursor
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    // Funções para aumentar e diminuir o cursor
    const handleMouseOver = (e: MouseEvent) => {
      gsap.to(cursor, {
        scale: 3, // Aumenta o tamanho
        duration: 0.2,
        ease: "power2.out",
      });

      // Detectar a cor de fundo do elemento e mudar a cor do texto para branco, caso seja escuro
      const targetElement = e.target as HTMLElement;
      const backgroundColor =
        window.getComputedStyle(targetElement).backgroundColor;

      // Verifica se a cor de fundo é escura (aproximação com base no RGB)
      if (isDarkColor(backgroundColor)) {
        targetElement.style.color = "white"; // Muda a cor do texto para branco
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      gsap.to(cursor, {
        scale: 1, // Retorna ao tamanho normal
        duration: 0.2,
        ease: "power2.out",
      });

      // Voltar a cor do texto para a original (seja lá qual for)
      const targetElement = e.target as HTMLElement;
      targetElement.style.color = ""; // Restaura a cor original do texto
    };

    // Função para verificar se a cor é escura
    const isDarkColor = (color: string) => {
      const rgb = color.match(/^rgb\((\d+), (\d+), (\d+)\)$/);
      if (!rgb) return false; // Se não for RGB, retorna falso

      const r = parseInt(rgb[1]);
      const g = parseInt(rgb[2]);
      const b = parseInt(rgb[3]);

      // A fórmula para detectar se uma cor é escura
      const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return brightness < 128; // Se a cor for escura, retorna true
    };

    // Aplica os ouvintes para todos os links ou elementos com a classe hover-effect
    const hoverElements = document.querySelectorAll(".hover-effect");

    hoverElements.forEach((element) => {
      // Aqui, indicamos explicitamente que o tipo de evento é MouseEvent
      element.addEventListener("mouseenter", handleMouseOver as EventListener);
      element.addEventListener("mouseleave", handleMouseOut as EventListener);
    });

    // Adiciona o ouvinte para mover o cursor
    window.addEventListener("mousemove", moveCursor);

    // Limpeza dos ouvintes ao desmontar
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((element) => {
        element.removeEventListener(
          "mouseenter",
          handleMouseOver as EventListener
        );
        element.removeEventListener(
          "mouseleave",
          handleMouseOut as EventListener
        );
      });
    };
  }, []);

  return null;
};

export default useCustomCursor;
