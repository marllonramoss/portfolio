// src/constants/mockProjects.ts

export interface Project {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  highlightedTechnologies?: string[]; // Adicionando atributo para tecnologias em destaque
  languages: "en-US" | "pt-BR"; // Alterado para ser uma única string
  imgSrc: string; // Novo atributo para imagem do projeto
}

export const mockProjects: Project[] = [
  {
    id: 1,
    name: "BarbaBrutal",
    shortDescription: "Agendamento de serviços",
    longDescription:
      "BarbaBrutal é um aplicativo de agendamento de compromissos para uma barbearia construído com uma estrutura monorepo usando TurboRepo. Ele apresenta login de usuário e a capacidade de reservar horários disponíveis com barbeiros. O projeto inclui 4 aplicativos: frontend (Next.js), backend (NestJS), mobile (Expo) e core (TypeScript), seguindo Domain-Driven Design (DDD).",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "GraphQL",
    ],
    highlightedTechnologies: ["React", "Next.js", "TypeScript"], // Tecnologias em destaque
    languages: "pt-BR", // Idioma do projeto
    imgSrc: "/images/barbearia.jpg", // Caminho da imagem do projeto
  },
  {
    id: 2,
    name: "Gam3rStore",
    shortDescription: "An advanced project with complex features.",
    longDescription:
      "Project Beta takes things a step further by integrating third-party APIs and providing advanced analytics tools. It's perfect for users who need deep insights.",
    technologies: [
      "React",
      "Redux",
      "GraphQL",
      "MongoDB",
      "TypeScript",
      "Jest",
      "Tailwind CSS",
    ],
    highlightedTechnologies: ["React", "Redux", "GraphQL"], // Tecnologias em destaque
    languages: "en-US", // Idioma do projeto
    imgSrc: "/images/project-beta.jpg", // Caminho da imagem do projeto
  },
  {
    id: 3,
    name: "Instasany",
    shortDescription: "A mobile-first responsive design project.",
    longDescription:
      "Project Gamma focuses on mobile responsiveness and accessibility. It ensures a seamless experience across all devices and includes various accessibility features.",
    technologies: [
      "React",
      "Next.js",
      "CSS Modules",
      "Jest",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
    ],
    highlightedTechnologies: ["React", "Next.js", "CSS Modules"], // Tecnologias em destaque
    languages: "en-US", // Idiomas do projeto
    imgSrc: "/images/project-gamma.jpg", // Caminho da imagem do projeto
  },
  {
    id: 4,
    name: "Project Delta",
    shortDescription: "A collaborative platform for teams.",
    longDescription:
      "Project Delta provides tools for team collaboration, including real-time chat, file sharing, and task management. It's built to enhance productivity in team environments.",
    technologies: [
      "React",
      "Firebase",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Socket.IO",
      "MongoDB",
    ],
    highlightedTechnologies: ["Firebase", "Tailwind CSS", "Socket.IO"], // Tecnologias em destaque
    languages: "pt-BR", // Idioma do projeto
    imgSrc: "/images/project-delta.jpg", // Caminho da imagem do projeto
  },
  {
    id: 5,
    name: "Project Epsilon",
    shortDescription: "An e-commerce solution with payment integration.",
    longDescription:
      "Project Epsilon is an e-commerce platform that supports multiple payment methods and includes features like product reviews, user accounts, and order tracking.",
    technologies: [
      "Next.js",
      "Stripe",
      "Sanity.io",
      "React Hook Form",
      "Zustand",
      "Axios",
      "Tailwind CSS",
    ],
    highlightedTechnologies: ["Next.js", "Stripe", "Sanity.io"], // Tecnologias em destaque
    languages: "en-US", // Idioma do projeto
    imgSrc: "/images/project-epsilon.jpg", // Caminho da imagem do projeto
  },
];
