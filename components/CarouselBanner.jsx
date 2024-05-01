"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const CarouselBanner = () => {
  const carouselRef = useRef(null);

  const goToNext = () => {
    carouselRef.current.next();
  };

  const goToPrev = () => {
    carouselRef.current.prev();
  };
  return (
    <div className="relative w-full">
      <Carousel ref={carouselRef} className="overflow-hidden relative w-full">
        <div className="flex-full h-[70vh] md:h-[90vh] relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-screen object-cover"
          >
            <source src="/Banner1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="lg:inline absolute mt-0 top-52 md:top-0 left-0 pt-30 xl:pt-22 lg:mt-1 bg-transparent z-20 h-full w-full space-y-2 p-3 md:p-28 text-white">
            <p className="px-2 md:px-0 text-[54px] md:text-[100px] font-bold z-50 mb-4 md:mb-0">
              Decentraland
            </p>
            <p className="px-3 md:px-0 w-[300px] md:w-[550px] text-sm md:text-xl space-y-2 font-medium mb-12">
              Make new friends, explore diverse events, and spark your
              creativity in a virtual world built and owned by its community.
            </p>
            <div className="pt-10">
              <div className="flex space-x-2 text-white">
                <div className="hidden md:flex flex-col bg-[#ff2d55] border-[#ff2d55] min-w-[300px] pl-20 py-4 text-start rounded-[10px] transition duration-150 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                  <p className="text[16px] font-[900] uppercase">
                    Jump in via browser
                  </p>
                  <p>Limited Experience</p>
                </div>
                <div className="hidden md:flex flex-row bg-transparent border border-white min-w-[300px] min-h-[20px] pl-10 py-4 space-x-4 text-start rounded-[10px] transition duration-150 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                    >
                      <defs>
                        <linearGradient
                          id="prefix__a"
                          x1="85.355%"
                          x2="14.645%"
                          y1="14.645%"
                          y2="85.355%"
                        >
                          <stop offset="0%" stop-color="#FF2D55" />
                          <stop offset="100%" stop-color="#FFBC5B" />
                        </linearGradient>
                        <linearGradient
                          id="prefix__b"
                          x1="49.966%"
                          x2="49.966%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stop-color="#A524B3" />
                          <stop offset="100%" stop-color="#FF2D55" />
                        </linearGradient>
                        <linearGradient
                          id="prefix__c"
                          x1="49.966%"
                          x2="49.966%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stop-color="#A524B3" />
                          <stop offset="100%" stop-color="#FF2D55" />
                        </linearGradient>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <circle cx="18" cy="18" r="18" fill="url(#prefix__a)" />
                        <g transform="translate(1.44 11.7)">
                          <polygon
                            fill="url(#prefix__b)"
                            points="11.313 0 11.313 13.5 22.563 13.5"
                          />
                          <polygon
                            fill="#FFF"
                            points=".063 13.5 11.313 13.5 11.313 0"
                          />
                        </g>
                        <path
                          fill="#FF2D55"
                          d="M7.2 32.4A17.925 17.925 0 0 0 18 36c4.05 0 7.794-1.341 10.8-3.6H7.2Z"
                        />
                        <path
                          fill="#FC9965"
                          d="M3.6 28.8a18.435 18.435 0 0 0 3.6 3.6h21.6a18.435 18.435 0 0 0 3.6-3.6H3.6Z"
                        />
                        <path
                          fill="#FFBC5B"
                          d="M24.147 25.2H1.503A17.923 17.923 0 0 0 3.6 28.8h20.556v-3.6h-.009Z"
                        />
                        <g transform="translate(15.84 18.9)">
                          <polygon
                            fill="url(#prefix__c)"
                            points="8.307 0 8.307 9.9 16.56 9.9"
                          />
                          <polygon
                            fill="#FFF"
                            points=".063 9.9 8.307 9.9 8.307 0"
                          />
                        </g>
                        <circle cx="24.147" cy="11.7" r="4.5" fill="#FFC95B" />
                        <circle cx="12.753" cy="6.75" r="2.25" fill="#FFC95B" />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p className="text[16px] font-[900] uppercase">Download</p>
                    <p>Best Performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-full h-full relative">
          <Image
            src="/Banner2.png"
            alt="Banner"
            width={1920}
            height={1000}
            className="w-full h-[70vh] md:h-[90vh] object-cover"
          />
          <div className="lg:inline absolute mt-0 top-0 left-0 pt-30 xl:pt-22 lg:mt-1 bg-transparent z-20 h-full w-full space-y-2 p-4 md:p-28 text-white">
            <p className="text-5xl pt-8 md:pt-0 md:text-[100px] font-bold z-50 w-[200px] md:w-full">
              2024 Manifesto
            </p>
            <p className="w-full md:w-[550px] text-sm md:text-xl space-y-2 font-medium pt-4 md:pt-8 pb-2 md:pb-6 leading-7 md:leading-normal">
              Driven by the central theme 'Forging Foundations for the Future,
              Decentraland's primary focus in 2024 will be the release of a new,
              powerful Desktop Client capable of supporting the platform's
              growth and future expansion into VR & mobile.
            </p>
            <div className="bg-[#ff2d55] border-[#ff2d55] w-full md:w-[200px] py-4 text-center rounded-[10px] transition duration-150 ease-in-out transform hover:-translate-y-1 cursor-pointer">
              <p className="text[16px] font-semibold uppercase">
                Read the Manifesto
              </p>
            </div>
          </div>
        </div>
        <div className="flex-full h-[70vh] md:h-[90vh] relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-screen object-cover"
          >
            <source src="/Banner3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="lg:inline absolute mt-0 top-0 left-0 pt-24 md:pt-28 lg:mt-1 bg-transparent z-20 h-full w-full space-y-2 p-5 md:p-28 text-white">
            <p className="text-5xl md:text-[100px] font-bold z-50">SDK7</p>
            <p className=" w-full md:w-[550px] text-sm md:text-xl space-y-2 font-medium pt-4 md:pt-8 pb-2 md:pb-6 leading-7 md:leading-normal">
              The latest version of Decentraland's SDK improves usability,
              performance, and perfromance, and portability. Harness its power
              to create on a platform where control over your games and any
              revenue they generate is fully yours.
            </p>
            <div className="bg-[#ff2d55] border-[#ff2d55] w-full md:w-[200px] py-4 text-center rounded-[10px] transition duration-150 ease-in-out transform hover:-translate-y-1 cursor-pointer">
              <p className="text[16px] font-semibold uppercase">Learn More</p>
            </div>
          </div>
        </div>
        <div className="flex-full h-[70vh] md:h-[90vh] relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-screen object-cover"
          >
            <source src="/Banner4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="lg:inline absolute mt-0 top-0 left-0 pt-24 xl:pt-22 lg:mt-1 bg-transparent z-20 h-full w-full space-y-2 p-5 md:p-28 text-white">
            <p className="text-5xl md:text-[100px] font-bold z-50 ">
              Smart Wearables
            </p>
            <p className="w-full md:w-[550px] text-sm md:text-xl space-y-2 font-medium pt-4 md:pt-8 pb-2 md:pb-6 leading-7 md:leading-normal">
              Turbo charge your creativity with Smart Wearables, enabling unique
              experiences that travel with your avatar as they explore
              Decentraland
            </p>
            <div className="bg-[#ff2d55] border-[#ff2d55] w-full md:w-[200px] py-4 text-center rounded-[10px] transition duration-150 ease-in-out transform hover:-translate-y-1 cursor-pointer">
              <p className="text[16px] font-semibold uppercase">Learn More</p>
            </div>
          </div>
        </div>
      </Carousel>
      <button
        onClick={goToPrev}
        className="hidden absolute top-0 left-0 z-30 h-full cursor-pointer md:flex items-center justify-center p-4"
      >
        <LeftOutlined
          style={{
            fontSize: "24px",
            color: "#fff",
            border: "1px solid #fff",
            padding: "10px",
            borderRadius: "50%",
          }}
          className="hover:invert hover:bg-black transition-all ease-in"
        />
      </button>
      <button
        onClick={goToNext}
        className="hidden absolute top-0 right-0 z-30 h-full cursor-pointer md:flex items-center justify-center p-4 "
      >
        <RightOutlined
          style={{
            fontSize: "24px",
            color: "#fff",
            border: "1px solid #fff",
            padding: "10px",
            borderRadius: "50%",
          }}
          className="hover:invert hover:bg-black transition-all ease-in"
        />
      </button>
    </div>
  );
};
export default CarouselBanner;
