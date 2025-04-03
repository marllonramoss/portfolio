import React from "react";
import { techService } from "@/services/techService";
import TechCarouselAnimation from "./TechCarouselAnimation";

const TechCarousel = async () => {
  try {
    const techs = await techService.getTechnologies();

    if (techs.length === 0) {
      return (
        <div className="w-full h-12 flex items-center justify-center">
          Nenhuma tecnologia encontrada
        </div>
      );
    }

    return <TechCarouselAnimation techs={techs} />;
  } catch (error) {
    console.error("Erro ao buscar tecnologias:", error);
    return (
      <div className="w-full h-12 flex items-center justify-center text-red-500">
        Erro ao carregar tecnologias
      </div>
    );
  }
};

export default TechCarousel;
