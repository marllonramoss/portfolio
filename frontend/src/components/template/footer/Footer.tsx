import React from "react";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm">
            © 2024 Marllon Ramos. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/marllonramoss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <IconBrandGithub size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/marllonramos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <IconBrandLinkedin size={24} />
            </Link>
            <Link
              href="https://wa.me/5521989399832"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <IconBrandWhatsapp size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
