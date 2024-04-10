import React from "react";

import Image from "next/image";

const First = () => {
  return (
    <div className="py-12 relative">
      <Image
        className="w-full h-screen object-cover"
        src="/First.webp"
        width={1920}
        height={1000}
      />
      <p className="absolute z-20 text-white top-52 left-[230px] text-center text-[52px] max-w-[900px] font-bold">
        Join a community of creators & explorers in a dynamic, virtual social
        world owned and shaped by you.
      </p>
    </div>
  );
};

export default First;
