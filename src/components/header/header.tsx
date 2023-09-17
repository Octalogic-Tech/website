"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import PillButton from "@/components/pill-button/pill-button";
import MobileMenuDrawer from "@/components/mobile-menu-drawer/mobile-menu-drawer";

interface NavItems {
  linkName: string;
  linkHref: string;
}

const navItems: NavItems[] = [
  {
    linkName: "Home",
    linkHref: "/",
  },
  {
    linkName: "Who We Are",
    linkHref: "/about",
  },
  {
    linkName: "Services",
    linkHref: "/services",
  },
  {
    linkName: "Blog",
    linkHref: "https://blog.octalogic.in",
  },
  {
    linkName: "Let's Talk",
    linkHref: "/contact",
  },
];

function Header() {
  const pathname = usePathname();
  const navLinks = (navigationItems: NavItems[]) => {
    return navigationItems.map((item: NavItems) => {
      return item.linkName === "Let's Talk" ? (
        <div key={item.linkName} className="sm:px-2 md:px-4">
          <PillButton title={item.linkName} className="py-1 px-2" href={"/contact"} />
        </div>
      ) : (
        <div key={item.linkName} className=" sm:px-2 md:px-4">
          <Link
            href={item.linkHref}
            className={`"text-normal text-base font-normal hover:text-[#26A69A] " ${
              pathname === item.linkHref ? "text-[#26A69A]" : "text-[#212529]"
            }`}
          >
            {item.linkName}
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="flex bg-transparent justify-end md:justify-between items-center shadow-none mt-8 mx-8 sm:h-13 md:h-29 md:px-10">
      <div className="items-center hidden md:block">
        <Link href={"/"}>
          <Image src="/images/logos/octalogic.svg" alt="Octalogic logo" width={60} height={60} />
        </Link>
      </div>
      <div className="flex-row items-center hidden md:flex">{navLinks(navItems)}</div>
      <MobileMenuDrawer />
    </div>
  );
}

export default Header;
