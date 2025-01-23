"use client";

import { Span } from "next/dist/trace";
import Image from "next/image";
import React, { act, useEffect, useState } from "react";

interface ProjectItemProps {
  projectName: string;
  image?: string;
  techs: string[];
}

const ProjectItem = ({ projectName, techs, image }: ProjectItemProps) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    console.log("has CHANGED to: ", active);
  }, [active]);

  return (
    <div
      className=" h-96 w-full flex flex-col bg-gray-300 rounded-md overflow-hidden cursor-pointer relative"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* IMAGE */}

      {active && (
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center z-30  `}
        ></div>
      )}

      <div className="relative w-full h-full">
        <Image
          src={
            image ??
            "https://images.pexels.com/photos/2835170/pexels-photo-2835170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="project image"
          fill
        />
      </div>

      <div className="flex-1"></div>
      {/* BOTTOM BAR */}
      <div className="flex gap-4 bg-black justify-start pl-2 ">
        <span className="text-white font-semibold">{projectName}</span>
      </div>
    </div>
  );
};

export default ProjectItem;
