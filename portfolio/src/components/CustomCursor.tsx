"use client";

import useCustomCursor from "@/hook/useCustomCursor";
import React from "react";

const CustomCursor = () => {
  useCustomCursor(); // Chama o hook para ativar o cursor

  return <div id="custom-cursor"></div>;
};

export default CustomCursor;
