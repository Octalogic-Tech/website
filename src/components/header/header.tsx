"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import PillButton from "@/components/pill-button/pill-button";

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
              pathname === item.linkHref ? "text-[#26A69A]" : ""
            }`}
          >
            {item.linkName}
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="mt-8 mx-8">
      <div className=" flex bg-transparent justify-center  shadow-none sm:h-13 md:h-29 md:px-10">
        <div className="flex-grow items-center sm:hidden md:block">
          <Link href={"/"}>
            <Image src="/images/logos/octalogic.svg" alt="Octalogic logo" width={60} height={60} />
          </Link>
        </div>
        <div className="flex flex-row items-center sm:hidden md:flex">{navLinks(navItems)}</div>
      </div>
    </div>
  );
}

export default Header;
