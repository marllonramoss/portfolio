"use client";

import React from "react";

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

  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-3xl font-medium mb-12">
          Stack Tecnológica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stacks.map((stack, index) => (
            <div
              key={index}
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
