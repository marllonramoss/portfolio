export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL?.trim(),
  endpoints: {
    projects: "/projetos",
    pinnedProjects: "/projetos/destaques",
    technologies: "/tecnologias",
  },
};
