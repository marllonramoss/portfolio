import React from "react";
import PinnedProjectsList from "./PinnedProjectsList";
import { projectService } from "@/services/projectService";
import AnimatedTitle from "./AnimatedTitle";

const Second_section = async () => {
  const initialProjects = await projectService.getPinnedProjects();

  return (
    <div className="h-full max-w-7xl mx-auto px-4 w-full flex flex-col justify-start items-start py-12">
      <AnimatedTitle>Projetos em Destaque</AnimatedTitle>
      <PinnedProjectsList initialProjects={initialProjects} />
    </div>
  );
};

export default Second_section;
