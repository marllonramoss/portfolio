"use client";

import React from "react";
import PinnedProjectsAnimation from "./PinnedProjectsAnimation";

interface Project {
  id: string;
  nome: string;
  descricao: string;
  imagens: string[];
  repositorio: string;
  destaque: string;
}

interface PinnedProjectsListProps {
  initialProjects: Project[];
}

const PinnedProjectsList = ({ initialProjects }: PinnedProjectsListProps) => {
  return <PinnedProjectsAnimation projects={initialProjects} />;
};

export default PinnedProjectsList;
