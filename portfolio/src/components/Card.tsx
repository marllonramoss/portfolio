import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Card = () => {
  const [showCover, setShowCover] = useState<boolean>(false);

  return (
    <Link
      href={"#"}
      className={`max-w-sm rounded overflow-hidden shadow-lg ring-1 ring-zinc-800 hover-effect relative `}
      onMouseEnter={() => setShowCover(true)}
      onMouseLeave={() => setShowCover(false)}
    >
      {showCover && (
        <div className="bg-black/50 absolute top-0 z-40 w-full h-full backdrop-blur-sm flex justify-center items-start p-5 ">
          <span className="text-zinc-300 text-4xl mt-12">GO</span>
        </div>
      )}
      <div className="relative w-full h-56">
        <Image
          className="object-cover"
          src="https://images.pexels.com/photos/1319458/pexels-photo-1319458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Sunset in the mountains"
          fill
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-zinc-200">
          The Coldest Sunset
        </div>
        <p className="text-zinc-400 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </Link>
  );
};

export default Card;
