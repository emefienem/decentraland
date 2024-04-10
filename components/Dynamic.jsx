"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Dynamic = () => {
  const sections = [
    {
      id: 1,
      title: "Create",
      description:
        "Decentraland is a world built by YOU where the only limit is your imagination. Create and sell Wearables & Emotes, construct captivating scenes and interactive experiences, or set up a personal space in your own World.",
      src: "/dynamic1.png",
      button1: "Discover the possibilities",
      button2: "Creator DOCS",
    },
    {
      id: 2,
      title: "Experience",
      description:
        "The dynamic, virtual social world of Decentraland is home to a vibrant community hosting diverse daily events, ranging from parties, art exhibitions, fashion shows, music festivals, and more to interactive experiences from renown brands like Netflix, Doritos, and Samsung. Make friend, play games, explore, and discover all Decentraland has to offer!",
      src: "/dynamic2.png",
      button1: "Browse Events",
      button2: "Explore Places",
    },
    {
      id: 3,
      title: "Influence",
      description:
        "As a fully decentralized metaverse, Decentraland is owned and governed by its users. Join the Decentraland DAO to submit and vote on proposals that affect how the world operates or secure funding for your ideas by applying for grants.",
      src: "/dynamic3.png",
      button1: "Learn More",
      button2: "Get Involved",
    },
  ];

  const [currentImage, setCurrentImage] = useState(sections[0].src);

  sections.forEach((section) => {
    section.ref = useInView({
      threshold: 0.5,
    });
  });

  useEffect(() => {
    const inViewSection = sections.find((section) => section.ref.inView);
    if (inViewSection) {
      setCurrentImage(inViewSection.src);
    }
  }, [sections]);

  return (
    <>
      <div className="flex flex-row py-12 mb-8">
        <div className="flex flex-col w-1/2 space-y-20">
          {sections.map((section) => (
            <div key={section.id} ref={section.ref.ref} className="py-10 pl-24">
              <div className="flex space-x-12 mb-36">
                <span className="text-white text-[30px]">{section.id}</span>
                <h2 className="text-white text-8xl font-bold">
                  {section.title}
                </h2>
              </div>
              <p className="text-white pl-16 text-[22px] max-w-[750px] mb-20">
                {section.description}
              </p>
              <div className="flex space-x-5">
                <button className="bg-white text-black ml-16 py-4 px-[32px] uppercase rounded-[10px] text-sm font-semibold">
                  {section.button1}
                </button>
                <button className="bg-transparent border border-white px-10 py-4 uppercase text-white rounded-[10px]">
                  {section.button2}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="sticky top-0 h-screen w-1/2 flex justify-center items-center">
          <Image
            src={currentImage}
            alt="Displayed Image"
            width={500}
            height={500}
          />
        </div>
      </div>
      <hr className="border-t border-gray-700" />
    </>
  );
};

export default Dynamic;
