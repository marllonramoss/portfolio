import { API_CONFIG } from "@/config/api";

export const projectService = {
  async getPinnedProjects() {
    try {
      // Garantir que não há espaços extras e barras duplicadas
      const baseUrl = API_CONFIG.baseUrl?.trim().replace(/\/$/, "");
      const endpoint = API_CONFIG.endpoints.projects.trim().replace(/^\//, "");
      const url = `${baseUrl}/${endpoint}`;

      const response = await fetch(url, {
        next: { revalidate: 86400 }, // 24 horas
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar projetos");
      }

      return response.json();
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
      return [];
    }
  },

  async getProjectById(id: string) {
    try {
      const baseUrl = API_CONFIG.baseUrl?.trim().replace(/\/$/, "");
      const endpoint = API_CONFIG.endpoints.projects.trim().replace(/^\//, "");
      const url = `${baseUrl}/${endpoint}/${id}`;

      const response = await fetch(url, {
        next: { revalidate: 86400 }, // 24 horas
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar projeto");
      }

      return response.json();
    } catch (error) {
      console.error("Erro ao buscar projeto:", error);
      return null;
    }
  },
};
