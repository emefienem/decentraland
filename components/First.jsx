import React from "react";

import Image from "next/image";

const First = () => {
  return (
    <section className="py-8 relative md:pt-20">
      <Image
        className="w-full h-screen object-cover"
        src="/First.webp"
        alt="Community"
        width={1920}
        height={1000}
      />
      <p className="absolute z-20 text-white top-52 left-0 md:left-[230px] text-center text-[29px] md:text-[52px] w-full md:max-w-[900px] font-bold">
        Join a community of creators & explorers in a dynamic, virtual social
        world owned and shaped by you.
      </p>
    </section>
  );
};

export default First;
