import React from "react";
import Card from "./Card";

const CardList = () => {
  return (
    <div className=" w-full h-full grid justify-center items-center grid-flow-col gap-4 ">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
