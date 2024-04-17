"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import Image from "next/image";

Autoplay.globalOptions = { delay: 5000 };

function CarouselBanner() {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  const items = [
    {
      id: 1,
      type: "video",
      src: "/Banner1.mp4",
      title: "Decentraland",
      overview:
        "Make new friends, explore diverse events, and spark your creativity in a virtual world built and owned by its community.",
    },
    {
      id: 2,
      type: "image",
      src: "/Banner2.png",
      title: "2024 Manifesto",
      overview:
        "Driven by the central theme 'Forging Foundations for the Future, Decentraland's primary focus in 2024 will be the release of a new, powerful Desktop Client capable of supporting the platform's growth and future expansion into VR & mobile.",
      text: "Read the manifesto",
    },
    {
      id: 3,
      type: "video",
      src: "/Banner3.mp4",
      title: "SDK 7",
      overview:
        "The latest version of Decentraland's SDK improves usability, performance, and perfromance, and portability. Harness its power to create on a platform where control over your games and any revenue they generate is fully yours.",
      text: "Learn more",
    },
    {
      id: 4,
      type: "video",
      src: "/Banner4.mp4",
      title: "Smart Wearables",
      overview:
        "Turbo charge your creativity with Smart Wearables, enabling unique experiences that travel with your avatar as they explore Decentraland",
      text: "Learn more",
    },
  ];

  return (
    <div className="overflow-hidden relative w-full" ref={emblaRef}>
      <div className="flex">
        {items.map((item) => (
          <div key={item.id} className="flex-full min-w-full relative">
            {item.type === "video" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-screen object-cover"
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={item.src}
                alt={item.title}
                width={1920}
                height={1000}
                className="w-full h-screen object-cover"
              />
            )}

            <div className="hidden lg:inline absolute mt-0 top-0 left-0 pt-30 xl:pt-22 lg:mt-1 bg-transparent z-20 h-full w-full space-y-2 p-28 text-white">
              <p className="text-[100px] font-bold z-50">{item.title}</p>
              <p className="w-[550px] text-xl space-y-2 font-medium mb-12">
                {item.overview}
              </p>
              <div className="pt-10">
                {item.id === 1 ? (
                  <div className="flex space-x-2">
                    <div className="flex flex-col bg-[#ff2d55] border-[#ff2d55] min-w-[300px] pl-20 py-4 text-start rounded-[10px] transition duration-150 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                      <p className="text[16px] font-[900] uppercase">
                        Jump in via browser
                      </p>
                      <p>Limited Experience</p>
                    </div>
                    <div className="flex flex-col bg-transparent border border-white min-w-[300px] min-h-[20px] pl-20 py-4 text-start rounded-[10px] transition duration-150 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                      <p className="text[16px] font-[900] uppercase">
                        Download
                      </p>
                      <p>Best Performance</p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {item.text && (
                  <div className="bg-[#ff2d55] border-[#ff2d55] w-[200px] py-4 text-center rounded-[10px] transition duration-150 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                    <p className="text[16px] font-semibold uppercase">
                      {item.text}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselBanner;
