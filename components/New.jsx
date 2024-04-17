import React from "react";
import Image from "next/image";

const New = () => {
  return (
    <section className="p-5 pt-28 md:py-12 md:p-20">
      <h2 className="text-3xl md:text-5xl font-semibold mb-12 text-white">
        What's new?
      </h2>
      <div className="flex flex-row md:flex-row space-x-3 overflow-auto scrollbar-hide md:overflow-visible">
        <div className="min-w-[90%] md:min-w-0 shrink-0 md:shrink">
          <Image
            className="w-full md:w-fit lg:min-w-[130px] h-36 object-cover object-center rounded-[16px] mb-6"
            src="/New1.png"
            alt="whatisnew1"
            width={400}
            height={400}
          />
          <div>
            <div className="flex space-x-2 mb-6">
              <h2 className="uppercase text-white text-[14px] font-semibold">
                Announcements
              </h2>
              <p className="text-gray-500 text-[14px]">MAR 19, 2024</p>
            </div>
            <p className="text-white max-w-[320px] text-xl font-bold">
              The Ultimate Guide to <br /> Decentraland Art Week '24
            </p>
          </div>
        </div>
        <div className="min-w-full md:min-w-0 shrink-0 md:shrink">
          <Image
            className="w-full md:w-fit lg:min-w-[130px] h-36 object-cover object-center rounded-[16px] mb-6"
            src="/New2.jpg"
            alt="whatisnew2"
            width={400}
            height={400}
          />
          <div>
            <div className="flex space-x-2 mb-6">
              <h2 className="uppercase text-white text-[14px] font-semibold">
                Community Highlights
              </h2>
              <p className="text-gray-500 text-[14px]">MAR 18, 2024</p>
            </div>
            <p className="text-white max-w-[320px] text-xl font-bold">
              Meta Residence Tower: <br /> Expanding Virtual Spaces in
              Decentraland
            </p>
          </div>
        </div>
        <div className="min-w-full md:min-w-0 shrink-0 md:shrink">
          <Image
            className="w-full md:w-fit lg:min-w-[130px] h-36 object-cover object-center rounded-[16px] mb-6"
            src="/New3.png"
            alt="whatisnew3"
            width={400}
            height={400}
          />
          <div>
            <div className="flex space-x-2 mb-6">
              <h2 className="uppercase text-white text-[14px] font-semibold">
                About Decentraland
              </h2>
              <p className="text-gray-500 text-[14px]">MAR 15, 2024</p>
            </div>
            <p className="text-white max-w-[300px] text-xl font-bold">
              How to Keep Your Digital Assets Safe in the Metaverse
            </p>
          </div>
        </div>
        <div className="min-w-full md:min-w-0 shrink-0 md:shrink">
          <Image
            className="w-full md:w-fit lg:min-w-[130px] h-36 object-cover object-center rounded-[16px] mb-6"
            alt="whatisnew4"
            src="/New4.jpg"
            width={400}
            height={400}
          />
          <div>
            <div className="flex space-x-2 mb-6">
              <h2 className="uppercase text-white text-[14px] font-semibold">
                Community Highlights
              </h2>
              <p className="text-gray-500 text-[14px]">FEB 08, 2024</p>
            </div>
            <p className="text-white max-w-[320px] text-xl font-bold">
              Expanding Horizons: Building a <br /> Multi-Engine Foundation for
              Decentraland
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default New;
