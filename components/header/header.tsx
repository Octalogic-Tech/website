import * as React from "react";

import Styles from "./header.module.css";

import Image from "next/image";
import { useRouter } from "next/router";
import NextLink from "next/link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

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
  const router = useRouter();

  const navLinks = (navigationItems: NavItems[]) => {
    return navigationItems.map((item: NavItems) => {
      return item.linkName === "Let's Talk" ? (
        <Box key={item.linkName} className={Styles.btn_wrap}>
          <PillButton title={item.linkName} className={Styles.btn} href={"/contact"} />
        </Box>
      ) : (
        <Box key={item.linkName} className={Styles.nav_wrap}>
          <Link
            href={item.linkHref}
            underline="none"
            color={router.pathname === item.linkHref ? "primary.main" : "info.main"}
            sx={{
              ":hover": {
                color: "primary.main",
              },
            }}
            className={Styles.link}
          >
            {item.linkName}
          </Link>
        </Box>
      );
    });
  };

  return (
    <Box className={Styles.container}>
      <AppBar position="relative" component="nav" className={Styles.app_bar}>
        <Toolbar>
          {/* <IconButton
            color="info"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box component="div" className={Styles.logo_wrap}>
            <NextLink href={"/"} className={Styles.logo_link}>
              <Image
                src="/images/logos/octalogic.svg"
                alt="Octalogic logo"
                width={60}
                height={60}
              />
            </NextLink>
          </Box>
          <Box className={Styles.links_wrap}>{navLinks(navItems)}</Box>
        </Toolbar>
      </AppBar>
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
    </Box>
  );
}

export default Header;
