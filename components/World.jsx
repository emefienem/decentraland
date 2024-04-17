import React from "react";
import Image from "next/image";

const World = () => {
  return (
    <>
      <div className="flex flex-row py-12 mb-8 text-white px-4 md:p-24 relative">
        <div className="flex flex-col space-y-2 md:space-y-6">
          <h2 className="font-bold text-3xl md:text-7xl">Worlds</h2>
          <p className="text-xl md:text-4xl text-gray-500">
            Your Personal Space in the Metaverse
          </p>
          <p className="text-[16px] md:text-[25px] md:max-w-[600px] pt-36 md:pt-4">
            With just a Decentraland NAME you can claim your own corner of the
            metaverse, separate from the open world of Decentraland, where you
            can build, experiment, host events--whatever you want, it's your
            World!
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 md:pt-0 pt-4">
            <button className="font-semibold bg-white text-black py-4 px-[70px] uppercase rounded-[7px] text-[16px] transition duration-150 ease-in-out transform hover:-translate-y-1">
              Learn more
            </button>
            <button className="uppercase border border-white text-[16px] text-white bg-transparent px-[50px] font-semibold py-4 rounded-[7px] transition duration-150 ease-in-out transform hover:-translate-y-1">
              Claim your name
            </button>
          </div>
        </div>
        <div className="absolute top-32 md:top-10 right-1/4 md:right-2 h-screen ">
          <Image
            src="/dreamspace-mobile.webp"
            alt="Dream space"
            width={700}
            height={700}
            className="w-[200px] md:w-[650px]"
          />
        </div>
      </div>
      <hr className="border-t border-gray-700" />
    </>
  );
};

export default World;
