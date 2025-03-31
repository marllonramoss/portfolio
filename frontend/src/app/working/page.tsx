"use client";

import React from "react";
import Link from "next/link";

const WorkingPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Em Desenvolvimento
        </h1>
        <p className="text-white/60 text-lg mb-8">
          Esta página está sendo desenvolvida. Em breve estará disponível!
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Voltar para Home
        </Link>
      </div>
    </div>
  );
};

export default WorkingPage;
