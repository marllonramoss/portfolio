import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <div className=" selection:bg-black selection:text-white h-screen ">
      <NavBar />
      {children}

      <hr className="border-t-1 border-gray-500 w-full my-12" />
      <Footer />
    </div>
  );
};

export default layout;
