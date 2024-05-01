import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 pt-24 md:pt-0 md:p-24 pb-5 text-white">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[60%]">
          <h2 className="text-3xl md:text-[65px] w-full md:w-[900px] text-gray-500 leading-tight font-medium">
            Stay updated with{" "}
            <span className="text-white font-semibold">Decentraland</span>
          </h2>
        </div>
        <div className="flex w-[40%] space-x-20 md:space-x-32 pt-16 md:pt-0 ">
          <div className="text-sm md:text-2xl">
            <ul className="list-none space-y-4 cursor-pointer">
              <li className="text-[11px] md:text-[16px] md:text-white text-gray-300 uppercase">
                Resources
              </li>
              <li className="font-semibold">Marketplace</li>
              <li className="font-semibold">Builder</li>
              <li className="font-semibold">Docs</li>
              <li className="font-semibold">Places</li>
              <li className="font-semibold">Events</li>
              <li className="font-semibold">DAO</li>
              <li className="font-semibold">Blog</li>
              <li className="font-semibold">FAQ</li>
            </ul>
          </div>
          <div className="text-sm md:text-2xl">
            <ul className="list-none space-y-4 cursor-pointer">
              <li className="text-[11px] md:text-[16px] md:text-white text-gray-300 uppercase">
                Connect
              </li>
              <li className="font-semibold">Support</li>
              <li className="font-semibold">Email</li>
              <li className="font-semibold">Discord</li>
              <li className="font-semibold">Reddit</li>
              <li className="font-semibold">Twitter</li>
              <li className="font-semibold">Github</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center text-gray-300 pt-10 md:pt-24 md:space-x-24 space-x-0">
        <div className="text-[12px] md:text-2xl">
          <ul className="list-none space-y-0 space-x-4 md:space-x-0 md:space-y-4 cursor-pointer flex flex-row md:flex-col">
            <li>Home</li>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
          </ul>
        </div>
        <div className="text-[12px] md:text-2xl">
          <ul className="list-none space-y-0 space-x-4 md:space-x-0 md:space-y-4 cursor-pointer flex flex-row md:flex-col">
            <li>Content Policy</li>
            <li>Code of Ethics</li>
          </ul>
        </div>
        <div className="text-[12px] md:text-2xl">
          <ul className="list-none space-y-0 space-x-4 md:space-x-0 md:space-y-4 cursor-pointer flex flex-row md:flex-col">
            <li>Feature request</li>
          </ul>
        </div>
      </div>
      <div className="pt-16 flex justify-center items-center">
        <p className="text-gray-300 text-sm"> 2024 Decentraland</p>
      </div>
    </footer>
  );
};

export default Footer;
