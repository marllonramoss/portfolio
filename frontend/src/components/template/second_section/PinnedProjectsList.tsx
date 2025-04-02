"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  nome: string;
  descricao: string;
  imagens: string[];
  repositorio: string;
  destaque: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard = ({ title, description }: ProjectCardProps) => {
  return (
    <Link href="/working" className="block">
      <div className="flex flex-col bg-white/5 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300 h-[400px]">
        <div className="relative h-48 overflow-hidden bg-black">
          <Image
            src="/images/black.png"
            alt={title}
            width={400}
            height={200}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-white text-lg font-medium mb-2 line-clamp-1">
            {title}
          </h3>
          <p className="text-white/60 text-sm mb-3 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const PinnedProjectsList = ({
  initialProjects = [],
}: {
  initialProjects: Project[];
}) => {
  if (!initialProjects || initialProjects.length === 0) {
    return (
      <div className="w-full flex justify-center items-center min-h-[400px]">
        <div className="text-white">Nenhum projeto encontrado</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {initialProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.nome}
            description={project.descricao}
          />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link
          href="/working"
          className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-md border border-white/10 transition-all duration-300 flex items-center gap-2 group text-sm"
        >
          <span>Ver todos os projetos</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 group-hover:translate-x-1 transition-transform"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export { PinnedProjectsList, ProjectCard };
