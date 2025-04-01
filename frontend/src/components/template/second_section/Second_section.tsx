import React from "react";
import { PinnedProjectsList } from "./PinnedProjectsList";

async function getPinnedProjects() {
  try {
    const response = await fetch("http://localhost:3000/projetos/destaques", {
      next: { revalidate: 3600 }, // Revalidar a cada 1 hora
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar projetos");
    }

    return response.json();
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
    return [];
  }
}

const Second_section = async () => {
  const initialProjects = await getPinnedProjects();

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
