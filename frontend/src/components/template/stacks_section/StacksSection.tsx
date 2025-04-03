"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StackCategory {
  title: string;
  technologies: string[];
}

const StacksSection = () => {
  const stacks: StackCategory[] = [
    {
      title: "Frontend",
      technologies: ["Nest.js", "React", "TypeScript", "GSAP", "Tailwind"],
    },
    {
      title: "Backend",
      technologies: [
        "Nest.js",
        "Node.js",
        "TypeScript",
        "Class-Validator",
        "Swagger",
      ],
    },
    {
      title: "Banco de Dados",
      technologies: ["SQL", "NoSQL"],
    },
    {
      title: "Cloud/DevOps",
      technologies: ["AWS (EC2, RDS)", "Vercel", "Docker"],
    },
    {
      title: "Autenticação/Pagamentos",
      technologies: ["Clerk", "Kinde"],
    },
    {
      title: "CMS",
      technologies: ["Hygraph", "Prismic"],
    },
    {
      title: "Arquitetura & Práticas",
      technologies: ["Clean Architecture", "DDD", "SOLID"],
    },
    {
      title: "Metodologias",
      technologies: ["Scrum", "Kanban", "Git"],
    },
    {
      title: "Design",
      technologies: ["Figma"],
    },
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animação do título
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom-=100",
            end: "bottom top",
            toggleActions: "play none none reverse",
            once: true,
          },
        }
      );
    }

    // Animação dos cards
    cardRefs.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              end: "bottom top",
              toggleActions: "play none none reverse",
              once: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 ref={titleRef} className="text-white text-3xl font-medium mb-12">
          Stack Tecnológica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stacks.map((stack, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group border border-white/5 hover:border-white/10 transition-colors duration-300"
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-white/90 mb-3">
                  {stack.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StacksSection;
