"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="relative p-5 flex bg-[#000] justify-between">
      <div className="flex px-5">
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
          <g fill="none" fill-rule="evenodd">
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
        <Navigation />
      </div>
      <div>
        <button className="text-white bg-transparent border border-white px-4 py-3">
          Sign In
        </button>
        <button className="bg-[#ff2d55] w-[150px] py-2 text-center rounded-[10px] uppercase">
          Jump In
        </button>
      </div>
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

const Navigation = () => {
  return (
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
                    {/* <Icons.logo className="h-6 w-6" /> Place your logo here */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground text-white">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/docs"
                title="Introduction"
                className="text-white"
              >
                Re-usable components built using Radix UI and Tailwind CSS.
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
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/docs"
                title="Introduction"
                className="text-white"
              >
                Re-usable components built using Radix UI and Tailwind CSS.
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
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/docs"
                title="Introduction"
                className="text-white"
              >
                Re-usable components built using Radix UI and Tailwind CSS.
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
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/docs"
                title="Introduction"
                className="text-white"
              >
                Re-usable components built using Radix UI and Tailwind CSS.
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
  );
};

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
