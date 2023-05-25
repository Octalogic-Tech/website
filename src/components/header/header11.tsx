"use client";
import * as React from "react";

// import Styles from "./header.module.css";

import { usePathname } from "next/navigation";

import Image from "next/image";
// import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";
import NextLink from "next/link";

// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";

import Link from "../link/link";
import PillButton from "../pill-button/pill-button";

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
    console.log(navigationItems);

    return navigationItems.map((item: NavItems) => {
      return item.linkName === "Let's Talk" ? (
        // <Box key={item.linkName} className={Styles.btn_wrap}>
        <div key={item.linkName} className="sm:px-0 sm:py-[0.5rem] md:px-0 md:py-[1rem]">
          <Link
            title={item.linkName}
            className="px-[0.375rem] py-[0.75rem] rounded-full bg-[#FF62A7] text-white  hover:shadow-hover"
            href={"/contact"}
          />
        </div>
      ) : (
        // <div key={item.linkName} className={Styles.nav_wrap}>
        <div key={item.linkName} className="sm:px-0 sm:py-[0.5rem] md:px-0 md:py-[1rem]">
          <Link
            href={item.linkHref}
            underline="none"
            color={pathname === item.linkHref ? "primary.main" : "info.main"}
            sx={{
              ":hover": {
                color: "primary.main",
              },
            }}
            // className={Styles.link}
            className="text-[1rem] font-base"
          >
            {item.linkName}
          </Link>
        </div>
      );
    });
  };

  return (
    // <div  className={Styles.container}>
    <div className="w-[90%] m-auto my-8 flex  border-2 border-red-500 ">
      {/* <AppBar position="relative" component="nav" className={Styles.app_bar}> */}
      <div className="relative flex justify-center shadow-none bg-transparent ">
        {/* <Toolbar> */}
        <div className="flex">
          {/* <IconButton
            color="info"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
            >
            <MenuIcon />
          </IconButton> */}
          {/* <div  className={Styles.logo_wrap}> */}
          <div className="flex-grow items-center sm:hidden md:block">
            {/* <NextLink href={"/"} className={Styles.logo_link}> */}
            <NextLink href={"/"} className="flex">
              <Image
                src="/images/logos/octalogic.svg"
                alt="Octalogic logo"
                width={60}
                height={60}
              />
            </NextLink>
          </div>
          {/* <div className={Styles.links_wrap}>{navLinks(navItems)}</div> */}
          <div className="flex flex-grow items-center sm:hidden md:flex">{navLinks(navItems)}</div>
        </div>
        {/* </Toolbar> */}
      </div>
      {/* <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box> */}
    </div>
  );
}

export default Header;
