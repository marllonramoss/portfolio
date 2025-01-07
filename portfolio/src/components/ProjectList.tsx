import { mockProjects } from "@/constants/mockProjects";
import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4    ">
      {mockProjects.map((p) => (
        <ProjectItem
          projectName={p.name}
          techs={p.highlightedTechnologies!}
          key={p.id}
        />
      ))}
    </div>
  );
};

export default ProjectList;
