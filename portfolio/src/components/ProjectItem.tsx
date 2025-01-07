import { Span } from "next/dist/trace";
import React from "react";

interface ProjectItemProps {
  projectName: string;
  techs: string[];
}

const ProjectItem = ({ projectName, techs }: ProjectItemProps) => {
  return (
    <div className=" h-96 w-full flex flex-col bg-gray-300 rounded-md overflow-hidden">
      {/* IMAGE */}
      <div className="flex-1"></div>
      {/* BOTTOM BAR */}
      <div className="flex gap-4 bg-black justify-start pl-2 ">
        <span className="text-white font-semibold">{projectName}</span>
        <div className="text-white/70 flex gap-2 ">
          {techs.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
