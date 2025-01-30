import React from "react";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <div>
      <span
        className={` uppercase font-semibold tracking-wide ${
          className ?? "text-black"
        }`}
      >
        marllon ramos
      </span>
    </div>
  );
};

export default Logo;
