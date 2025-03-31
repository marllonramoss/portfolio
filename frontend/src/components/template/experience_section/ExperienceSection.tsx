"use client";

import React, { useState } from "react";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  techs: string[];
  current: boolean;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Freelancer",
    role: "Desenvolvedor Full Stack",
    period: "Fev 2025 - Presente",
    description:
      "Desenvolvimento de aplicações web sob demanda, focando em soluções personalizadas e de alta qualidade para clientes diversos.",
    techs: ["React", "Next.js", "Node.js", "TypeScript", "TailwindCSS"],
    current: true,
  },
  {
    id: 2,
    company: "Lymtech Consultoria",
    role: "Desenvolvedor Peoplesoft",
    period: "Nov 2023 - Ago 2024",
    description:
      "Desenvolvimento e documentação de APIs REST, manutenção de funcionalidades, criação de queries em SQL Server/PL/SQL, participação em metodologias ágeis (Scrum/Kanban), monitoramento de ambientes e comunicação com clientes em Espanhol.",
    techs: ["REST APIs", "SQL Server", "PL/SQL", "Scrum", "Kanban"],
    current: false,
  },
];

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(experiences[0]);

  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-3xl font-medium mb-12">Carreira</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExperience(exp)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    selectedExperience?.id === exp.id
                      ? "bg-white/10 border border-white/20 shadow-lg"
                      : "hover:bg-white/5 border border-white/5 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white font-medium text-base">
                      {exp.role}
                    </span>
                    {exp.current && (
                      <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded-full">
                        Atual
                      </span>
                    )}
                  </div>
                  <div className="text-white/70 text-sm font-medium">
                    {exp.company}
                  </div>
                  <div className="text-white/50 text-sm mt-1">{exp.period}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Detalhes da Experiência */}
          <div className="lg:col-span-2">
            {selectedExperience && (
              <div className="bg-white/5 backdrop-blur-md rounded-lg border border-white/10 p-8 h-full shadow-lg">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-white text-2xl font-medium">
                    {selectedExperience.role}
                  </h3>
                  <span className="text-white/60 text-sm bg-white/5 px-4 py-2 rounded-full">
                    {selectedExperience.period}
                  </span>
                </div>
                <div className="text-white/80 text-base mb-8 leading-relaxed">
                  {selectedExperience.description}
                </div>
                <div className="flex flex-wrap gap-3">
                  {selectedExperience.techs.map((tech, index) => (
                    <span
                      key={index}
                      className="text-white/60 text-sm bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
