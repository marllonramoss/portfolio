import React from "react";
import ProjectList from "./ProjectList";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col mt-32 bg-red-200">
      {/* HEADER */}
      <div className="h-5  gap-4 flex mb-2">
        <span className="text-black">All</span>
        <span>Branding</span>
        <span>Web Design</span>
      </div>
      <ProjectList />
    </div>
  );
};

export default ProjectsSection;
