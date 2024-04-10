import React from "react";
import Image from "next/image";

const World = () => {
  return (
    <div className="flex flex-row py-12 mb-8 text-white p-28 relative">
      <div className="flex flex-col w-1/2 space-y-20">
        <h2 className="font-bold text-7xl">Worlds</h2>
      </div>
      <div className="absolute top-10 right-14 h-screen w-1/2 ">
        <Image
          src="/dreamspace-mobile.webp"
          alt="Dream space"
          width={1000}
          height={500}
        />
      </div>
    </div>
  );
};

export default World;
