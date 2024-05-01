import React from "react";
import Image from "next/image";

const Trending = () => {
  const items = [
    {
      id: 1,
      src: "/megajump.png",
      title: "Mega Jump Shoes",
      description: "polygon",
      stock: "54",
      total: "100",
      score: "10",
      tag: "legendary",
    },
    {
      id: 2,
      src: "/wellness.png",
      title: "Wellness at Dhingia",
      description: "polygon",
      stock: "651",
      total: "1000",
      score: "5",
      tag: "epic",
    },
    {
      id: 3,
      src: "/unmonday.png",
      title: "UnMonday Pants",
      description: "polygon",
      stock: "49",
      total: "1000",
      score: "30",
      tag: "epic",
    },
    {
      id: 4,
      src: "/slimpants.png",
      title: "Slim Pants",
      description: "polygon",
      stock: "25",
      total: "100",
      score: "13",
      tag: "legendary",
    },
    {
      id: 5,
      src: "/boxinglegend.png",
      title: "Boxing legendary",
      description: "polygon",
      stock: "54",
      total: "100",
      score: "20",
      tag: "legendary",
    },
    {
      id: 6,
      src: "/clingycat.png",
      title: "Cliny cats",
      description: "polygon",
      stock: "24",
      total: "100",
      score: "10",
      tag: "epic",
    },
    {
      id: 7,
      src: "/dualarena.png",
      title: "Dual Arena",
      description: "polygon",
      stock: "46",
      total: "1000",
      score: "16",
      tag: "legendary",
    },
    {
      id: 8,
      src: "/dhingia.png",
      title: "Dhingia",
      description: "polygon",
      stock: "14",
      total: "100",
      score: "10",
      tag: "legendary",
    },
    {
      id: 9,
      src: "/GMshirt.png",
      title: "GM Shirt",
      description: "polygon",
      stock: "31",
      total: "100",
      score: "6",
      tag: "epic",
    },
    {
      id: 10,
      src: "/Hiroto.png",
      title: "Hiroto",
      description: "polygon",
      stock: "34",
      total: "100",
      score: "9",
      tag: "epic",
    },
    {
      id: 11,
      src: "/shades.png",
      title: "Shades",
      description: "polygon",
      stock: "451",
      total: "1000",
      score: "13",
      tag: "epic",
    },
  ];
  return (
    <>
      <div className="text-white md:py-16 py-8 md:pt-28 md:p-28 px-4">
        <div className="flex flex-col md:flex-row space-y-3 md:space-x-20 relative">
          <h2 className="text-2xl md:text-[70px] font-bold">Trending Items</h2>
          <button className="md:absolute border border-white bg-transparent uppercase px-8 py-2 right-64 mt-8 rounded-[4px] transition duration-150 ease-in-out transform hover:-translate-y-1">
            Go to marketplace
          </button>
        </div>
        <div className="z-50 mt-10">
          <div className="flex space-x-4 overflow-scroll scrollbar-hide">
            {items.map((item) => (
              <div className="relative flex-shrink-0 cursor-pointer ">
                <div className="absolute inset-0 z-10" />
                <div className="flex">
                  <div className="max-w-2xl text-white">
                    <p className="absolute z-20 bottom-32 left-5 font-bold text-white uppercase text-xl">
                      {item.title}
                    </p>
                    <div className="flex">
                      <p className="absolute z-20 bottom-[106px] left-5 text-sm text-gray-400">
                        {item.description}
                      </p>
                      <span className="absolute flex bottom-[106px] right-7 text-sm text-gray-400">
                        Stock: {item.stock} /{" "}
                        <span className="text-white">{item.total}</span>
                      </span>
                    </div>
                    <div className="flex space-x-3 absolute bottom-[66px] left-5 ">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="invert"
                        >
                          <path
                            fill="#16141A"
                            fillRule="evenodd"
                            d="m12 0 12 12-12 12L0 12 12 0Zm0 3.36L20.64 12 12 20.64 3.36 12 12 3.36Zm0 12.96a4.32 4.32 0 1 0 .001-8.64 4.32 4.32 0 0 0 0 8.64Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>{item.score}</span>
                    </div>
                    <div
                      className={`${
                        item.tag === "legendary"
                          ? "bg-purple-500"
                          : item.tag === ""
                          ? "bg-purple-500"
                          : "bg-blue-500"
                      } text-white uppercase absolute left-5 bottom-[25px] px-4 py-1 text-[13px] rounded-[4px]`}
                    >
                      {item.tag}
                    </div>
                  </div>
                </div>
                <Image
                  className="w-[300px] lg:w-[320px] h-96 rounded-xl bg-[#242129]"
                  src={item.src}
                  alt={item.title}
                  width={1920}
                  height={1080}
                />
              </div>
            ))}
          </div>
        </div>
        <Listings />
      </div>
      <hr className="border-t border-t-gray-700" />
    </>
  );
};

export default Trending;

const Listings = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-y-0 space-y-3 md:space-x-4 pt-16 pb-16">
      <div className="relative">
        <Image
          src="/listings-map-background.webp"
          alt="Main Image 1"
          width={600}
          height={500}
          className="object-cover w-fit lg:w-[600px] h-[400px] md:h-[480px] rounded-[13px] cursor-pointer"
        />
        <div className="absolute top-14 md:top-[100px] left-20 md:left-36">
          <Image
            src="/listings-map.webp"
            alt="Inner Image 1"
            width={250}
            height={60}
            className="object-cover cursor-pointer w-[200px] md:w-[150px]"
          />
        </div>
        <div className="pl-12">
          <p className="text-2xl md:text-4xl absolute bottom-32 font-bold md:max-w-[550px] ">
            Browse LAND Available for Rent & Sale
          </p>
          <button className="border border-white px-6 py-3 bg-transparent text-white absolute bottom-12 rounded-[5px] uppercase text-sm font-semibold transition duration-150 ease-in-out transform hover:-translate-y-1">
            Show Listings
          </button>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/listings-brand-background.webp"
          alt="Main Image 2"
          width={600}
          height={500}
          className="object-cover w-fit lg:w-[600px] h-[400px] md:h-[480px] rounded-[13px] cursor-pointer"
        />
        <div className="absolute top-14 md:top-[36px] left-20 md:left-36">
          <Image
            src="/listings-brand.webp"
            alt="Inner Image 2"
            width={250}
            height={60}
            className="object-cover cursor-pointer md:w-[200px] w-[150px]"
          />
        </div>
        <div className="pl-12">
          <p className="text-2xl md:text-4xl absolute bottom-32 font-bold max-w-[550px] ">
            Make your ideas a reality in the metaverse. Find a team to build
            with.
          </p>
          <button className="border border-white px-6 py-3 bg-transparent text-white absolute bottom-12 rounded-[5px] uppercase text-sm font-semibold transition duration-150 ease-in-out transform hover:-translate-y-1">
            Browse vetted studios
          </button>
        </div>
      </div>
    </div>
  );
};
