"use client";

const Questions = () => {
  const items = [
    {
      id: 1,
      title: "What is Decentraland?",
      description: (
        <p className="p-[25px] md:p-0 md:pl-[37px] pt-5 pb-16 md:pb-16 max-w-[950px] text-[15px] font-semibold">
          Launched in 2020, Decentraland is a virtual social world, the first
          decentralized metaverse, and the only one that is open source. Within
          the Decentraland platform, which can run on a browser or desktop
          client, users can create, experience, and monetize content and
          applications as well as socialize and attend a wide range of daily,
          community-driven events. Decentraland is unique in that it is owned,
          created, and governed by the people who use it everyday. Through
          Decentraland&apos;s decentralized autonomous organization (DAO) users
          can submit and vote on{" "}
          <span className="underline text-red-500">proposals</span> and even
          apply for <span className="underline text-red-500">grants</span> for
          the community to vote on
        </p>
      ),
    },
    {
      id: 2,
      title: "How do i enter Decentraland?",
      description: (
        <p className="p-[25px] md:p-0 md:pl-[37px] pt-5 pb-16 md:pb-16 max-w-[950px] text-[15px] font-semibold">
          Step 1: Choose where to enter Decentraland You can enter Decentraland
          via the default starting location, Genesis Plaza, by going to
          https://play.decentraland.org/ (If it&apos;s your first time trying
          out Decentraland, you&apos;ll first complete a short tutorial
          experience). Alternatively, you can enter Decentraland directly in
          your area of interest via an Event page link (just click &apos;Jump
          In&apos; at the bottom of the event listing you&apos;re interested in)
          or via the Places page. <br /> <br />
          Step 2: Play Using Your Wallet or Play as a Guest When you enter
          Decentraland, you&apos;ll have to decide whether to do so with or
          without a crypto wallet. This essentially means deciding whether to
          create a Decentraland account (which requires connecting a crypto
          wallet—it doesn&apos;t have to have money in it) or to visit
          Decentraland as a guest. If you make an account you can permanently
          save your avatar for return visits, make Event listings, claim free
          Wearables at events, try out different Wearables & Emotes in the
          Marketplace, and buy your favorites. If you do&apos;t already have a
          crypto wallet to connect to your account, you can get one quickly and
          at no cost, it&apos;s as easy as signing up for a new email. Learn
          more here. <br /> <br />
          Step 3: Customize Your Avatar Once you enter Decentraland you&apos;ll
          first be asked to customize your avatar to represent the metaverse
          version of yourself (be whoever you want to be!). If you can’t find
          what you&apos;re looking for in the free starter options, take a look
          in the Marketplace and browse community creations for the perfect
          outfit. <br /> <br />
          Step 4: Familiarize Yourself with the Basics & Explore After
          completing a quick tutorial on how to control your avatar,
          Decentraland is yours to explore! To change your outfit, adjust
          settings, see the Decentraland map, or browse through events and
          places of interest in-world, just click on the profile bubble showing
          your avatar in the top right corner. Here are some commands
          you&apos;ll find useful: Keyboard W-A-S-D/Arrows: Move Spacebar: Jump
          X: Pull up event interface M: Open map V: Third person view B: Emote
          options U: Remove user interface Enter: Open the chat box Chat box
          (Commands you type into the chat box and hit &apos;Enter&apos;) /goto
          xx,xx (e.g. /goto 47,-110): Teleports you to specific coordinates
          /goto crowd: Teleports you to a random busy area /help: Lists all
          other available commands Step 5: Have fun! You're all set. Walk
          around, talk to others via the chat box on the bottom left, and pop
          into some events!
        </p>
      ),
    },
    {
      id: 3,
      title:
        "Do i need cryptocurrency or a digital wallet to use Decentraland?",
      description: (
        <p className="p-[25px] md:p-0 md:pl-[37px] pt-5 pb-16 md:pb-16 max-w-[950px] text-[15px] font-semibold">
          You do not need to own cryptocurrency to enjoy Decentraland as it is
          free to use. If you decide to purchase a community-made creation from
          the Marketplace, there are multiple payment options available, such as
          credit/debit card and bank transfer in addition to various
          cryptocurrencies. As for owning a digital wallet, if you don&apos;t
          already have one, you don&apos;t need to get one yourself if you
          don&apos;t want to. When you sign-in to Decentraland for the first
          time—creating your account—a digital wallet will be created for you
          behind the scenes, it&apos;s as simple as that! This digital wallet is
          part of your Decentraland account and is used to store any digital
          assets you acquire, such as free Wearables you might claim in-world or
          a fun Emote you purchase in the Marketplace.
        </p>
      ),
    },
    {
      id: 4,
      title: "How do i become a Decentraland Creator?",
      description: (
        <p className="p-[25px] md:p-0 md:pl-[37px] pt-5 pb-16 md:pb-16 max-w-[950px] text-[15px] font-semibold">
          Decentraland is a world created by its users, meaning you can be a
          creator of everything from Wearables (this can include whole skins,
          articles of clothing, hair styles, accessories, etc), Emotes, entire
          scenes with buildings and/or landscapes, interactive experiences, and
          games. <br /> <br /> Most Wearable and Emote designers use Blender to
          design their creations. Once complete, items are submitted for
          publishing in the Marketplace for a fee of $100 per item (regardless
          of the quantity you choose to make available), a process that involves
          approval by the Curation Committee. Once listed in the Marketplace,
          creators keep 97.5% of the proceeds from every sale of their item and
          earn 2.5% royalties on all secondary sales. Learn more details about
          creating <span className="underline text-red-500">Wearables</span> &{" "}
          <span className="underline text-red-500">Emotes</span>. <br /> <br />{" "}
          To create scenes, experiences, or games in Decentraland it is
          currently necessary to have some degree of coding knowledge. However,
          efforts are underway to make creation in Decentraland more accessible
          for all with updated tools and ready templates that anyone can drag
          and drop into place. Just about everything you might need to know
          about scene, experience, or game creation in Decentraland can be found
          on the <span className="underline text-red-500">Docs</span> page.
          There you&apos;ll find step-by-step guides,{" "}
          <span className="underline text-red-500">video tutorials</span>, and
          the <span className="underline text-red-500">Awesome Repository</span>{" "}
          which has tons of templates, mechanics, animations, and much more to
          help you get started.
        </p>
      ),
    },
    {
      id: 5,
      title: "What is a NAME?",
      description: (
        <p className="p-[25px] md:p-0 md:pl-[37px] pt-5 pb-16 md:pb-16 max-w-[950px] text-[15px] font-semibold">
          Costing just 100 MANA, the currency of Decentraland, a Decentraland{" "}
          <span className="underline text-red-500">NAME</span> is essentially a
          unique and personalized username for your avatar that represents your
          virtual identity within the Decentraland ecosystem. <br /> Getting a
          Decentraland NAME comes with the added bonus of granting the owner
          their own <span className="underline text-red-500">World</span>, your
          own personal space in the metaverse, separate from the open world of
          Decentraland. In your World you can build, experiment, host events
          with up to 100 concurrent users—whatever you want, as long as your
          build is limited to 100 MB.
        </p>
      ),
    },
    {
      id: 6,
      title: "What is the difference between LANDs and Worlds?",
      description: (
        <p className="p-[25px] md:p-0 md:pl-[37px] pt-5 pb-16 md:pb-16 max-w-[950px] text-[15px] font-semibold">
          Currently, <span className="underline text-red-500">Worlds</span> can
          only admit up to 100 visitors at a time and scenes are limited to
          100MB whereas LAND parcels have no such limitations. If you would like
          to build large scenes or host big events, buying or{" "}
          <span className="uppercase text-red-500">renting</span> renting LAND
          will be a better option. <br /> <br /> Scenes and experiences deployed
          on LANDs in Genesis City are also more easily discovered by users as
          they don&apos;t need to know specific information like your NAME to
          visit—they can just stumble upon your scene while exploring. On the
          other hand, if privacy is what you&apos;re looking for, then a World
          might be just the thing for you. <br /> <br /> Additionally, Worlds do
          not grant you the same amount of{" "}
          <span className="uppercase text-red-500">DAO Voting Power</span> as
          LAND parcels. The NAME attached to your World grants you 100 Voting
          Power whereas 1 LAND parcel grants 2000 Voting Power.
        </p>
      ),
    },
    {
      id: 7,
      title: "How can i get help and contact the Support Team?",
      description: (
        <p className="p-[25px] md:p-0 md:pl-[37px] pt-5 pb-16 md:pb-16 max-w-[950px] text-[15px] font-semibold">
          You can contact the Decentraland Support Team via{" "}
          <span className="uppercase text-red-500">live chat</span> or you can
          join the official Decentraland{" "}
          <span className="uppercase text-red-500">Discord server</span>. Please
          remember that Decentraland staff will never ask you for the private
          key (seed phrase) to your crypto wallet. NEVER share it or your
          personal information on social channels.
        </p>
      ),
    },
  ];
  return (
    <section className="p-4 md:p-20">
      <div className="items-center">
        <h2 className="text-center uppercase text-gray-400 text-[14px] md:text-[16px] font-semibold">
          Learn more about decentraland
        </h2>
        <h3 className="text-center text-white px-7 pt-7 text-2xl md:text-8xl font-bold">
          Frequently Asked Questions
        </h3>
        <div className="pl-2 md:pl-28 pt-4 md:pt-10 text-white">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative w-full md:w-[90%] bg-[#242129] rounded-[40px] md:rounded-[52px] space-y-6  hover:bg-purple-600 transition duration-500 ease-in-out cursor-pointer"
            >
              <input
                type="checkbox"
                id="input"
                className="absolute top-0 inset-x-0 peer opacity-0 z-10 w-full h-12"
              />
              <label
                htmlFor="input"
                className="text-gray-300 tracking-[1px] mx-[37px] h-[50px] flex items-center text-sm md:text-2xl pt-7 py-2"
              >
                {item.title}
              </label>
              <div className="absolute top-0 right-8  transition-transform duration-500 rotate-0 peer-checked:rotate-180 cursor-pointer text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                {item.description}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-14 flex justify-center">
          <button className="uppercase w-full md:w-[170px] border border-white px-4 py-4 text-white rounded-[10px] transition duration-150 ease-in-out transform hover:-translate-y-1 cursor-pointer">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Questions;
