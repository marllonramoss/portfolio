import { Metadata } from "next";
import { projectService } from "@/services/projectService";

interface Project {
  id: string;
  nome: string;
  descricao: string;
  imagens: string[];
  repositorio: string;
  destaque: string;
}

// Função para gerar os parâmetros estáticos durante o build
export async function generateStaticParams() {
  const projects = await projectService.getPinnedProjects();

  return projects.map((project: Project) => ({
    id: project.id,
  }));
}

// Função para gerar metadados dinâmicos para cada projeto
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = await projectService.getProjectById(params.id);

  if (!project) {
    return {
      title: "Projeto não encontrado",
      description: "O projeto solicitado não foi encontrado.",
    };
  }

  return {
    title: `${project.nome} | Marllon Ramos`,
    description: project.descricao,
    openGraph: {
      title: project.nome,
      description: project.descricao,
      images: project.imagens[0] ? [project.imagens[0]] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: project.nome,
      description: project.descricao,
      images: project.imagens[0] ? [project.imagens[0]] : [],
    },
  };
}
