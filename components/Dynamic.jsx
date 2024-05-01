"use client";
import React, { useState, useEffect, useMemo } from "react";
// import { useInView } from "react-intersection-observer";
import { UseMultipleView } from "./UseMultipleView";
import Image from "next/image";

const Dynamic = () => {
  const sections = useMemo(
    () => [
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
    ],
    []
  );

  const [currentImage, setCurrentImage] = useState(sections[0].src);

  // sections.forEach((section) => {
  //   section.ref = useInView({
  //     threshold: 0.5,
  //   });
  // });

  // useEffect(() => {
  //   const inViewSection = sections.find((section) => section.ref.inView);
  //   if (inViewSection) {
  //     setCurrentImage(inViewSection.src);
  //   }
  // }, [sections]);

  const sectionRefs = UseMultipleView(sections.length, { threshold: 0.5 });

  useEffect(() => {
    const inViewSection = sectionRefs.find((ref) => ref.inView);
    if (inViewSection) {
      setCurrentImage(sections[sectionRefs.indexOf(inViewSection)].src);
    }
  }, [sectionRefs]); // Only re-run the effect if sectionRefs change

  return (
    <>
      <div className="flex flex-row md:pt-2 py-0 mb-36 md:mb-8 px-4 md:px-0">
        <div className="flex flex-col w-full md:w-1/2 space-y-20">
          {/* {sections.map((section) => ( */}
          {sections.map((section, index) => (
            <div
              key={section.id}
              // ref={section.ref.ref}
              ref={sectionRefs[index].ref}
              className="md:py-10 py-0 md:pl-24 pl-0"
            >
              <div className="flex space-x-1 md:space-x-12 mb-2 md:mb-36">
                <span className="text-white text-sm md:text-[40px]">
                  {section.id}
                </span>
                <h2 className="text-white text-5xl md:text-8xl font-bold">
                  {section.title}
                </h2>
              </div>
              <div className="md:hidden">
                <Image
                  src={section.src}
                  alt={section.title}
                  width={400}
                  height={400}
                  className="w-[330px] flex items-center justify-center"
                />
              </div>
              <p className="text-white pl-0 md:pl-16 text-[17px] md:text-[22px] max-w-full md:max-w-[750px] mb-8 md:mb-20">
                {section.description}
              </p>
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5">
                <button className="bg-white text-black ml-0 md:ml-16 py-4 px-[32px] uppercase rounded-[10px] text-sm font-semibold transition duration-150 ease-in-out transform hover:-translate-y-1">
                  {section.button1}
                </button>
                <button className="bg-transparent border border-white px-10 py-4 uppercase text-white rounded-[10px] transition duration-150 ease-in-out transform hover:-translate-y-1">
                  {section.button2}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:flex sticky top-0 h-screen w-1/2 justify-center items-center">
          <Image
            src={currentImage}
            alt="Displayed image"
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
