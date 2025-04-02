import { API_CONFIG } from "@/config/api";

export const projectService = {
  async getPinnedProjects() {
    try {
      const response = await fetch(
        `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.projects}`,
        {
          next: { revalidate: 86400 }, // 24 horas
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar projetos");
      }

      return response.json();
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
      return [];
    }
  },
};
