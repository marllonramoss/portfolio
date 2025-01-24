"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfiniteScrollingCards: React.FC = () => {
  useEffect(() => {
    const cards = gsap.utils.toArray(".card") as HTMLElement[];
    const spacing = 0.1; // Espaçamento entre os cartões
    const snapTime = gsap.utils.snap(spacing);
    let iteration = 0;

    // Função para animar cada cartão
    const animateCard = (element: HTMLElement) => {
      return gsap
        .timeline()
        .fromTo(
          element,
          { xPercent: 100, opacity: 0, scale: 0 },
          { xPercent: -100, opacity: 1, scale: 1, duration: 1, ease: "none" }
        );
    };

    // Cria a animação contínua em loop
    const seamlessLoop = buildSeamlessLoop(cards, spacing, animateCard);

    // Configura o ScrollTrigger para controlar a animação
    const trigger = ScrollTrigger.create({
      start: 0,
      end: "+=3000",
      pin: ".gallery", // Fixa a galeria durante a rolagem
      scrub: true,
      onUpdate(self) {
        const scroll = self.scroll();
        if (scroll > self.end - 1) wrap(1);
        else if (scroll < 1 && self.direction < 0) wrap(-1);
      },
    });

    function wrap(iterationDelta: number) {
      iteration += iterationDelta;
      trigger.scroll(trigger.start + iteration * seamlessLoop.duration());
      trigger.update();
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="gallery">
      <ul className="cards">
        {[...Array(31).keys()].map((i) => (
          <li key={i} className="card">
            Card {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

function buildSeamlessLoop(
  items: HTMLElement[],
  spacing: number,
  animateFunc: (element: HTMLElement) => GSAPTimeline
): GSAPTimeline {
  const timeline = gsap.timeline({ repeat: -1 });
  items.forEach((item, i) => {
    timeline.add(animateFunc(item), i * spacing);
  });
  return timeline;
}

export default InfiniteScrollingCards;
