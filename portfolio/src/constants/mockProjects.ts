// src/constants/mockProjects.ts

export interface Project {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  highlightedTechnologies?: string[]; // Adicionando atributo para tecnologias em destaque
}

export const mockProjects: Project[] = [
  {
    id: 1,
    name: "Project Alpha",
    shortDescription: "A simple project to demonstrate features.",
    longDescription:
      "Project Alpha is designed to showcase the basic functionalities of our platform. It includes user authentication, data visualization, and an intuitive UI.",
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
  },
  {
    id: 2,
    name: "Project Beta",
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
  },
  {
    id: 3,
    name: "Project Gamma",
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
  },
  {
    id: 6,
    name: "Project Zeta",
    shortDescription: "A blogging platform with rich media support.",
    longDescription:
      "Project Zeta allows users to create and manage blogs with rich media content. It supports image uploads, video embedding, and social sharing features.",
    technologies: [
      "React",
      "Next.js",
      "Markdown",
      "AWS S3",
      "Cloudinary",
      "TypeScript",
      "Tailwind CSS",
    ],
    highlightedTechnologies: ["Markdown", "AWS S3", "Cloudinary"], // Tecnologias em destaque
  },
];
