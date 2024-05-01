"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { UserAuth } from "@/app/context/Auth";
import { notification } from "antd";

const Header = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      connsole.log(error);
    }
  };

  return (
    <header className="relative p-5 flex bg-[#000] justify-between">
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden p-2 text-white"
        onClick={() => setMenuOpen(menuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>

      <div className="flex px-5">
        {/* Link for logo  */}
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
              <polygon fill="#FFF" points=".063 13.5 11.313 13.5 11.313 0" />
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
              <polygon fill="#FFF" points=".063 9.9 8.307 9.9 8.307 0" />
            </g>
            <circle cx="24.147" cy="11.7" r="4.5" fill="#FFC95B" />
            <circle cx="12.753" cy="6.75" r="2.25" fill="#FFC95B" />
          </g>
        </svg>
        <nav className={`md:block ${menuOpen ? "block" : "hidden"}`}>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent border-none text-white text-[15px]">
                  MarketPlace
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#000] text-white">
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild className="text-white">
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground text-white">
                            Beautifully designed components that you can copy
                            and paste into your apps. Accessible. Customizable.
                            Open Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/docs"
                      title="Introduction"
                      className="text-white"
                    >
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Installation"
                      className="text-white"
                    >
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                      className="text-white"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent border-none text-white text-[15px]">
                  Create
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#000] text-white">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        className="text-white"
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent border-none text-white text-[15px]">
                  Explore
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#000] text-white">
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild className="text-white">
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          {/* <Icons.logo className="h-6 w-6" /> Place your logo here */}
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground text-white">
                            Beautifully designed components that you can copy
                            and paste into your apps. Accessible. Customizable.
                            Open Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/docs"
                      title="Introduction"
                      className="text-white"
                    >
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Installation"
                      className="text-white"
                    >
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                      className="text-white"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent border-none text-white text-[15px]">
                  Learn
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#000] text-white">
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild className="text-white">
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          {/* <Icons.logo className="h-6 w-6" /> Place your logo here */}
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight  text-white">
                            Beautifully designed components that you can copy
                            and paste into your apps. Accessible. Customizable.
                            Open Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/docs"
                      title="Introduction"
                      className="text-white"
                    >
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Installation"
                      className="text-white"
                    >
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                      className="text-white"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent border-none text-white text-[15px]">
                  Governance
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#000] className='text-white'">
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild className="text-white">
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          {/* <Icons.logo className="h-6 w-6" /> Place your logo here */}
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight  text-white">
                            Beautifully designed components that you can copy
                            and paste into your apps. Accessible. Customizable.
                            Open Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/docs"
                      title="Introduction"
                      className="text-white"
                    >
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Installation"
                      className="text-white"
                    >
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                      className="text-white"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>

      {!user ? (
        <div className="space-x-4">
          <button
            onClick={handleSignIn}
            className="text-white bg-transparent border border-white px-8 py-3 rounded-[6px] uppercase text-[14px] font-semibold"
          >
            Sign In
          </button>
          <button
            onClick={handleSignIn}
            className="bg-[#ff2d55] px-8 py-3 text-center rounded-[6px] uppercase text-white text-[14px] font-semibold hidden md:inline"
          >
            Jump In
          </button>
        </div>
      ) : (
        <div className="flex text-white flex-row space-x-4">
          <Notification />

          <div className="mt-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="var(--navbar-icons)"
              xmlns="http://www.w3.org/2000/svg"
              className="invert"
            >
              <g id="icon/otline/darkmode/activity">
                <path
                  id="Vector"
                  d="M12 4.50101C13.4834 4.50101 14.9334 4.94087 16.1668 5.76498C17.4001 6.58909 18.3614 7.76043 18.9291 9.13088C19.4967 10.5013 19.6453 12.0093 19.3559 13.4642C19.0665 14.919 18.3522 16.2554 17.3033 17.3043C16.2544 18.3532 14.918 19.0675 13.4632 19.3569C12.0083 19.6463 10.5003 19.4978 9.12987 18.9301C7.75942 18.3624 6.58809 17.4011 5.76398 16.1678C4.93987 14.9344 4.5 13.4844 4.5 12.001C4.5 11.6695 4.3683 11.3515 4.13388 11.1171C3.89946 10.8827 3.58152 10.751 3.25 10.751C2.91848 10.751 2.60054 10.8827 2.36612 11.1171C2.1317 11.3515 2 11.6695 2 12.001C2.00023 14.2448 2.75506 16.4233 4.14312 18.1862C5.53119 19.9492 7.47181 21.194 9.65293 21.7207C11.834 22.2473 14.1289 22.0251 16.1684 21.0898C18.208 20.1545 19.8737 18.5604 20.8978 16.5639C21.9218 14.5674 22.2447 12.2846 21.8144 10.0824C21.3841 7.88025 20.2258 5.88679 18.5255 4.42259C16.8253 2.9584 14.6821 2.10855 12.4405 2.00971C10.1989 1.91088 7.98914 2.5688 6.16666 3.87767V3.25101C6.16666 2.91949 6.03497 2.60155 5.80055 2.36713C5.56613 2.13271 5.24819 2.00101 4.91666 2.00101C4.58514 2.00101 4.2672 2.13271 4.03278 2.36713C3.79836 2.60155 3.66667 2.91949 3.66667 3.25101V7.41767C3.66667 8.10767 4.22667 8.66767 4.91666 8.66767H7.41666C7.74818 8.66767 8.06613 8.53598 8.30055 8.30156C8.53497 8.06713 8.66666 7.74919 8.66666 7.41767C8.66666 7.08615 8.53497 6.76821 8.30055 6.53379C8.06613 6.29937 7.74818 6.16767 7.41666 6.16767H7.285C8.61836 5.08666 10.2835 4.49808 12 4.50101ZM12.8333 8.25101C12.8333 7.91948 12.7016 7.60154 12.4672 7.36712C12.2328 7.1327 11.9148 7.00101 11.5833 7.00101C11.2518 7.00101 10.9339 7.1327 10.6994 7.36712C10.465 7.60154 10.3333 7.91948 10.3333 8.25101V12.4177C10.3333 13.1077 10.8933 13.6677 11.5833 13.6677H14.0833C14.4148 13.6677 14.7328 13.536 14.9672 13.3016C15.2016 13.0671 15.3333 12.7492 15.3333 12.4177C15.3333 12.0861 15.2016 11.7682 14.9672 11.5338C14.7328 11.2994 14.4148 11.1677 14.0833 11.1677H12.8333V8.25101Z"
                  fill="var(--navbar-icons)"
                ></path>
              </g>
            </svg>
          </div>

          <div className="flex mt-3 space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="14"
              fill="none"
              viewBox="0 0 13 14"
              className="mt-[2px]"
            >
              <path
                fill="#FF2D55"
                d="M9.864 6.952c0-1.984-1.6-3.632-3.584-3.632S2.696 4.968 2.696 6.952c0 1.968 1.6 3.568 3.584 3.568s3.584-1.6 3.584-3.568Zm-.832 0c0 1.504-1.344 2.736-2.752 2.736-1.552 0-2.752-1.2-2.752-2.736 0-1.52 1.2-2.8 2.752-2.8 1.424 0 2.752 1.28 2.752 2.8Zm3.216 3.472v-6.88L6.28.12.312 3.544v6.88l5.968 3.424 5.968-3.424Zm-1.056-.592-4.896 2.8-4.928-2.8V4.184L6.28 1.336l4.912 2.848v5.648Z"
              />
            </svg>
            <span className="text-[12px]">0</span>
          </div>

          <div className="flex mt-3 space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              className="invert mt-[2px]"
            >
              <path
                fill="#16141A"
                fillRule="evenodd"
                d="m12 0 12 12-12 12L0 12 12 0Zm0 3.36L20.64 12 12 20.64 3.36 12 12 3.36Zm0 12.96a4.32 4.32 0 1 0 .001-8.64 4.32 4.32 0 0 0 0 8.64Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-[12px]">0</span>
          </div>

          <div className="border-none rounded-[50%] rounded-b-2xl bg-gray-500 ">
            <Image src="/authlogo.png" alt="User" width={40} height={30} />
          </div>

          <button
            onClick={handleSignOut}
            className="text-white bg-transparent border border-white px-8 py-3 rounded-[6px] uppercase text-[14px] font-semibold transition duration-150 ease-in-out transform hover:-translate-y-1"
          >
            Sign out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

const Notification = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    const btn = (
      <button className="border border-white bg-transparent text-white py-1 px-2 hover:bg-white hover:text-black transition duration-300">
        Let&apos;s begin
      </button>
    );

    api.open({
      message: (
        <div style={{ color: "white" }}>
          Welcome to Decentraland Notifications
        </div>
      ),
      description: (
        <div style={{ color: "white" }}>
          Never miss a thing! Now, you&apos;ll receive a notification each time
          something relevant happens with your account
        </div>
      ),
      btn,
      style: {
        backgroundColor: "black",
        color: "white",
      },
      className: "text-center",
    });
  };
  return (
    <>
      {contextHolder}
      <Image
        width={30}
        height={10}
        src="https://img.icons8.com/material-rounded/24/bell--v1.png"
        alt="bell--v1"
        onClick={openNotification}
        className="invert max-w-20 h-6 mt-2 mr-6"
      />
    </>
  );
};
