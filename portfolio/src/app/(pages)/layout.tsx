import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="selection:bg-black selection:text-white min-h-screen flex flex-col">
      <NavBar />
      {/* Container do conteúdo principal */}
      <div className="flex-1 ">{children}</div>
      {/* Linha de separação */}
      <hr className="border-t-[1px] border-gray-500 w-full my-4" />
      {/* Footer sempre no final */}
      <Footer />
    </div>
  );
};

export default Layout;
