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

const MenuListItems = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Case studies", link: "/Case-Study" },
  { name: "Blog", link: "/blog" },
  { name: "Contact us", link: "/contact" },
  { name: "Careers", link: "/careers" },
];

export default function Navigation() {
  const languages = ["EN", "FR", "DE", "ES"];
  const [selectedLanguage, setSelectedLanguage] = React.useState(languages[0]);
  const [activeLink, setActiveLink] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // Handle both exact matches and root path
      const pathname = window.location.pathname;
      setActiveLink(pathname === "" ? "/" : pathname);
    }
  }, []);

  // To toggle the mobile menu
  const toggleNavbar = () => setIsOpen(!isOpen);

  // To set the active link styling
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
      <nav className="sticky left-0 top-0 z-50 flex h-[10vh] w-full items-center justify-between border-b border-[#E5E5E5] bg-white px-10">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/mainLogo.png" alt="Octalogic Logo" className="h-8 w-auto" />
          </a>
        </div>

        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-wrap gap-x-4 lg:gap-x-6 xl:gap-x-8">
              {MenuListItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <a
                      href={item.link}
                      onClick={() => handleLinkClick(item.link)}
                      className={cn(
                        "relative whitespace-nowrap px-2 py-6 text-sm lg:text-base",
                        isLinkActive(item.link)
                          ? "text-[#424242] after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:w-full after:bg-[#424242]"
                          : "text-[#737373]",
                      )}
                    >
                      {item.name}
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
                className="appearance-none rounded-lg border px-3 py-1 pr-8 text-sm"
              >
                {languages.map((lang, index) => (
                  <option key={index} value={lang}>
                    {lang}
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

          <Button variant="primary" asChild className="hidden rounded-lg py-5 lg:flex">
            <a href="/get-in-touch">GET IN TOUCH</a>
          </Button>
          <div className="lg:hidden">
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="top-15 fixed left-0 z-40 flex h-[calc(100vh-72px)] w-full flex-col bg-white lg:hidden">
          <div className="flex flex-1 flex-col space-y-6 overflow-y-auto p-8">
            {MenuListItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className={`text-left font-medium transition-colors hover:text-[#424242] ${
                  isLinkActive(item.link) ? "text-[#424242]" : "text-[#424242]/50"
                }`}
                onClick={() => handleLinkClick(item.link)}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex w-full justify-center border-t p-4">
            <Button
              variant="custom"
              asChild
              className="w-full max-w-[400px] rounded-full bg-teal-400"
            >
              <a href="/get-in-touch" className="block py-3 text-center">
                GET IN TOUCH
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
