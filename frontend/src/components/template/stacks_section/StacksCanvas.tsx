"use client";

import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

interface StackCategory {
  title: string;
  technologies: string[];
}

const StackCard = ({
  stack,
  position,
  rotation,
}: {
  stack: StackCategory;
  position: [number, number, number];
  rotation: [number, number, number];
}) => {
  const meshRef = React.useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <boxGeometry args={[2, 1.5, 0.1]} />
        <meshStandardMaterial color="#ffffff" opacity={0.1} transparent />
      </mesh>
      <Center position={[position[0], position[1], position[2] + 0.1]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.1}
          height={0.02}
        >
          {stack.title}
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
      {stack.technologies.map((tech, index) => (
        <Center
          key={index}
          position={[
            position[0],
            position[1] - 0.2 - index * 0.1,
            position[2] + 0.1,
          ]}
        >
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.05}
            height={0.01}
          >
            {tech}
            <meshStandardMaterial color="white" opacity={0.7} transparent />
          </Text3D>
        </Center>
      ))}
    </Float>
  );
};

const StacksCanvas = () => {
  const stacks: StackCategory[] = [
    {
      title: "Frontend",
      technologies: ["Nest.js", "React", "TypeScript", "GSAP", "Tailwind"],
    },
    {
      title: "Backend",
      technologies: [
        "Nest.js",
        "Node.js",
        "TypeScript",
        "Class-Validator",
        "Swagger",
      ],
    },
    {
      title: "Banco de Dados",
      technologies: ["SQL", "NoSQL"],
    },
    {
      title: "Cloud/DevOps",
      technologies: ["AWS (EC2, RDS)", "Vercel", "Docker"],
    },
    {
      title: "Autenticação/Pagamentos",
      technologies: ["Clerk", "Kinde"],
    },
    {
      title: "CMS",
      technologies: ["Hygraph", "Prismic"],
    },
    {
      title: "Arquitetura & Práticas",
      technologies: ["Clean Architecture", "DDD", "SOLID"],
    },
    {
      title: "Metodologias",
      technologies: ["Scrum", "Kanban", "Git"],
    },
    {
      title: "Design",
      technologies: ["Figma"],
    },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />
        {stacks.map((stack, index) => (
          <StackCard
            key={index}
            stack={stack}
            position={[
              Math.cos((index / stacks.length) * Math.PI * 2) * 5,
              Math.sin((index / stacks.length) * Math.PI * 2) * 5,
              0,
            ]}
            rotation={[0, (index / stacks.length) * Math.PI * 2, 0]}
          />
        ))}
      </Suspense>
    </Canvas>
  );
};

export default StacksCanvas;
