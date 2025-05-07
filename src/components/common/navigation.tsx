"use client";

import { X, Menu } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Typography } from "./template";
import DatoCmsImage from "./DatoCmsImage";

interface NavLink {
  label: string;
  url: string;
}

interface LanguageOption {
  code: string;
  label: string;
  name: string;
}

interface HeaderData {
  logo?: {
    alt: string;
    url: string;
    responsiveImage?: any;
  };
  navlinks: NavLink[];
  language?: LanguageOption[];
  button?: {
    buttonLabel: string;
    buttonUrl: string;
  };
}

export default function Navigation({ headerData = { navlinks: [] } }: { headerData?: HeaderData }) {
  const languageOptions = headerData?.language;

  const [selectedLanguage, setSelectedLanguage] = React.useState(
    languageOptions?.[0]?.label || "En",
  );
  const [activeLink, setActiveLink] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      setActiveLink(pathname === "" ? "/" : pathname);
    }
  }, []);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const isLinkActive = (link: string) => {
    if (typeof window === "undefined") return false;
    if (link === "/" && activeLink === "/") return true;
    return activeLink === link;
  };

  return (
    <>
      <nav className="sticky left-0 top-0 z-50 flex min-h-[80px] w-full items-center justify-between border-b border-[#E5E5E5] bg-white px-10">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            {headerData?.logo?.responsiveImage ? (
              <div className="flex h-8 max-w-[150px] items-center">
                <DatoCmsImage
                  data={{
                    alt: headerData.logo.alt,
                    responsiveImage: headerData.logo.responsiveImage,
                  }}
                  className="h-8 w-auto"
                  objectFit="contain"
                />
              </div>
            ) : (
              <div className="flex h-8 max-w-[150px] items-center">
                <img
                  src={headerData?.logo?.url}
                  alt={headerData?.logo?.alt}
                  className="h-8 w-auto object-contain"
                />
              </div>
            )}
          </a>
        </div>

        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-wrap gap-x-4 lg:gap-x-6 xl:gap-x-8">
              {headerData?.navlinks?.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <a
                      href={item.url}
                      onClick={() => handleLinkClick(item.url)}
                      className={cn(
                        "relative whitespace-nowrap px-2 py-[26px] text-sm lg:text-base",
                        isLinkActive(item.url)
                          ? "text-[#424242] after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:w-full after:bg-[#424242]"
                          : "text-[#737373]",
                      )}
                    >
                      {item.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="flex items-center">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="appearance-none rounded-3xl border px-4 py-1 pr-8 text-sm"
              >
                {languageOptions?.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <Button variant="primary" asChild className="hidden rounded-3xl py-5 lg:flex">
            <a href={headerData?.button?.buttonUrl || "/get-in-touch"}>
              <Typography
                variant="BodyMRegular16"
                className="p-4 uppercase tracking-tighter text-[#0A3D62]"
              >
                {headerData?.button?.buttonLabel}
              </Typography>
            </a>
          </Button>
          <div className="lg:hidden">
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed left-0 top-[72px] z-40 flex h-[calc(100vh-72px)] w-full flex-col bg-white lg:hidden">
          <div className="flex flex-1 flex-col space-y-6 overflow-y-auto p-8">
            {headerData?.navlinks?.map((item) => (
              <a
                key={item.label}
                href={item.url}
                className={`text-left font-medium transition-colors hover:text-[#424242] ${
                  isLinkActive(item.url) ? "text-[#424242]" : "text-[#424242]/50"
                }`}
                onClick={() => handleLinkClick(item.url)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex w-full justify-center border-t p-4">
            <Button variant="custom" className="rounded-3xl p-6" asChild>
              <a href={headerData?.button?.buttonUrl || "/get-in-touch"}>
                <Typography
                  variant="BodyMMedium16"
                  className="uppercase tracking-tighter text-[#0A3D62]"
                >
                  {headerData?.button?.buttonLabel}
                </Typography>
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
