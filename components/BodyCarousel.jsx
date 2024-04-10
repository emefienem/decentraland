"use client";
import Image from "next/image";
import React, { useState } from "react";

const BodyCarousel = () => {
  const [activeTab, setActiveTab] = useState("Event");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="space-y-3 p-20  text-white">
      <p className="text-[#a09ba8] text-xl">In Descentraland</p>
      <div className="flex">
        <div className="flex space-x-6">
          <h2
            className={`cursor-pointer ${
              activeTab === "Event" ? "text-white underline" : "text-gray-700"
            } text-6xl font-bold`}
            onClick={() => handleTabClick("Event")}
          >
            Event
          </h2>
          <h2
            className={`cursor-pointer ${
              activeTab === "Event" ? "text-gray-700" : "text-white underline"
            } text-6xl font-bold`}
            onClick={() => handleTabClick("Place")}
          >
            Place
          </h2>
        </div>
        <button className="border border-white bg-transparent text-white absolute right-[200px] py-2 px-6 p mt-5 uppercase text-[14px] font-semibold rounded-[10px]">
          {activeTab === "Event" ? "See all events" : "See all places"}
        </button>
      </div>

      {activeTab === "Event" && (
        <div>
          <Event />
        </div>
      )}

      {activeTab === "Place" && (
        <div>
          <Place />
        </div>
      )}
    </div>
  );
};

export default BodyCarousel;

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
      <div className="flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide">
        {items.map((item) => (
          <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-[#1A1C29]/80 z-10" />
            <div className="flex">
              <div className="max-w-2xl text-white">
                <p className="absolute z-20 bottom-16 left-5 font-bold text-white uppercase text-3xl">
                  {item.title}
                </p>
                <p className="absolute z-20 bottom-6 left-5">{item.overview}</p>
              </div>
              <button className="text-white absolute z-20 bottom-6 right-4 bg-[#ff2d55] w-[150px] py-2 text-center rounded-[10px] uppercase">
                Jump in
              </button>
            </div>
            <Image
              className="w-fit lg:min-w-[550px] h-64 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-[12px]"
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

const Place = () => {
  const items = [
    {
      id: 1,
      src: "/Place1.jpg",
      title: "Soul Magic",
      overview: "By Soul Magic",
    },
    {
      id: 2,
      src: "/Place2.jpg",
      title: "WonderMine Crafting Ga...",
      overview: "By WanderZone",
    },
    {
      id: 3,
      src: "/Place3.jpg",
      title: "Wilderness P2E",
      overview: "By Chmap",
    },
    {
      id: 4,
      src: "/Place4.jpg",
      title: "Exodus",
      overview: "By Maserphaz",
    },
    {
      id: 5,
      src: "/Place5.jpg",
      title: "Genesis Plaza",
      overview: "By Decentraland Foundation",
    },
    {
      id: 6,
      src: "/Place6.jpg",
      title: "100Avatars Garden",
      overview: "By Polygonal Mind",
    },
    {
      id: 7,
      src: "/Place7.jpg",
      title: "Antrom RPG(Dice Maters)",
      overview: "Bt DecentralandWear",
    },
    {
      id: 8,
      src: "/Place8.jpg",
      title: "WEEEED Farm Robbery",
      overview: "By OG Contra Band",
    },
    {
      id: 9,
      src: "/Place9.jpg",
      overview: "Bufalo Saloon",
    },
    {
      id: 10,
      src: "/Place10.jpg",
      title: "Crackden",
      overview: "By PennyRich",
    },
  ];

  return (
    <div className="z-50">
      <div className="flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide">
        {items.map((item) => (
          <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-[#1A1C29]/80 z-10" />
            <div className="flex">
              <div className="max-w-2xl text-white">
                <p className="absolute z-20 bottom-16 left-5 font-bold text-white text-3xl">
                  {item.title}
                </p>
                <p className="absolute z-20 bottom-6 left-5">{item.overview}</p>
              </div>
              <button className="text-white absolute z-20 bottom-6 right-4 bg-[#ff2d55] w-[150px] py-2 text-center rounded-[10px] uppercase">
                Jump in
              </button>
            </div>
            <Image
              className="w-fit lg:min-w-[550px] h-64 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-[12px]"
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
