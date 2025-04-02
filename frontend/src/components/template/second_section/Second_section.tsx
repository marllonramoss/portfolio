import React from "react";
import { PinnedProjectsList } from "./PinnedProjectsList";
import { projectService } from "@/services/projectService";

const Second_section = async () => {
  const initialProjects = await projectService.getPinnedProjects();

  return (
    <div className="h-full max-w-7xl mx-auto px-4 w-full flex flex-col justify-start items-start py-12">
      <h2 className="text-white text-3xl font-medium mb-8">
        Projetos em Destaque
      </h2>
      <PinnedProjectsList initialProjects={initialProjects} />
    </div>
  );
};

export default Second_section;
