import React from "react";
import Image from "next/image";

const Event = () => {
  const items = [
    {
      id: 1,
      src: "/Event1.jpg",
      title: "🔥 Build your map & ...",
      overview: "By Lulu",
    },
    {
      id: 2,
      src: "/Event2.jpg",
      title: "🔥New Season Laun",
      overview: "By Lulu",
    },
    {
      id: 3,
      src: "/Event3.jpg",
      title: "Magik Arena Event",
      overview: "By AnyMagik",
    },
    {
      id: 4,
      src: "/Event4.jpg",
      title: "Exodus Easter 2024",
      overview: "By JTV",
    },
    {
      id: 5,
      src: "/Event5.png",
      title: "Capture Game PvE Arena...",
      overview: "By Mazzak",
    },
    {
      id: 6,
      src: "/Event6.jpg",
      title: "C.G. Jung on Alchemy - D...",
      overview: "By CarlFravel",
    },
  ];
  return (
    <div className="z-50">
      <div className="flex space-x-10 md:space-x-4 overflow-scroll px-0 md:px-5 lg:px-10 py-5 scrollbar-hide">
        {items.map((item) => (
          <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-[#1A1C29]/80 z-10" />
            <div className="flex">
              <div className="max-w-2xl text-white">
                <p className="absolute z-20 bottom-24 md:bottom-16 left-5 font-bold text-white uppercase text-xl md:text-3xl">
                  {item.title}
                </p>
                <p className="absolute z-20 bottom-16 md:bottom-6 left-5">
                  {item.overview}
                </p>
              </div>
              <button className="text-white absolute z-20 bottom-2 md:bottom-6 right-8 md:right-4 bg-[#ff2d55] w-[240px] md:w-[150px] py-2 text-center rounded-[10px] uppercase">
                Jump in
              </button>
            </div>
            <Image
              className="w-[300px] md:min-w-[550px] h-[340px] md:h-64  object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-[12px]"
              src={item.src}
              alt={item.title}
              width={1920}
              height={1080}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
