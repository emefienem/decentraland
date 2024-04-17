"use client";
import React, { useState } from "react";
import Event from "./Event";
import Place from "./Place";

const BodyCarousel = () => {
  const [activeTab, setActiveTab] = useState("Events");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="w-full space-y-3 p-5 pt-20  md:p-20 text-white relative">
      <p className="text-[#a09ba8] text-sm md:text-xl">In Descentraland</p>
      <div className="flex flex-row md:flex-col">
        <div className="flex space-x-10 md:space-x-6">
          <h2
            className={`cursor-pointer ${
              activeTab === "Events" ? "text-white underline" : "text-gray-700"
            } text-4xl md:text-6xl font-bold transition duration-150 ease-in-out transform hover:-translate-y-1`}
            onClick={() => handleTabClick("Events")}
          >
            Events
          </h2>
          <h2
            className={`cursor-pointer ${
              activeTab === "Events" ? "text-gray-700" : "text-white underline"
            } text-4xl md:text-6xl font-bold transition duration-150 ease-in-out transform hover:-translate-y-1`}
            onClick={() => handleTabClick("Places")}
          >
            Place
          </h2>
        </div>
      </div>

      {activeTab === "Events" && (
        <div>
          <Event />
        </div>
      )}

      {activeTab === "Places" && (
        <div>
          <Place />
        </div>
      )}
      <button className="border border-white bg-transparent text-white w-[90%] md:w-auto absolute right-4 md:top-32 md:right-[200px] md: py-2 px-6 p mt-5 uppercase text-[13px] md:text-sm font-semibold rounded-[10px] transition duration-150 ease-in-out transform hover:-translate-y-1">
        {activeTab === "Events" ? "See all events" : "See all places"}
      </button>
    </section>
  );
};

export default BodyCarousel;
