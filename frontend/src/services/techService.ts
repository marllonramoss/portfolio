import { API_CONFIG } from "@/config/api";

export interface Tech {
  nome: string;
}

export const techService = {
  async getTechnologies() {
    try {
      const baseUrl = API_CONFIG.baseUrl?.trim().replace(/\/$/, "");
      const endpoint = API_CONFIG.endpoints.technologies
        .trim()
        .replace(/^\//, "");
      const url = `${baseUrl}/${endpoint}`;

      const response = await fetch(url, {
        next: { revalidate: 86400 }, // 24 horas
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar tecnologias");
      }

      return response.json();
    } catch (error) {
      console.error("Erro ao buscar tecnologias:", error);
      return [];
    }
  },
};
