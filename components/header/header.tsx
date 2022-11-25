import * as React from "react";

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
        <Box key={item.linkName} sx={{ padding: { sm: "0 0.5rem", md: "0 1rem" } }}>
          <PillButton title={item.linkName} sx={{ padding: ".375rem .75rem" }} href={"/contact"} />
        </Box>
      ) : (
        <Box key={item.linkName} sx={{ padding: { sm: "0 0.5rem", md: "0 1rem" } }}>
          <Link
            href={item.linkHref}
            underline="none"
            color={router.pathname === item.linkHref ? "primary.main" : "info.main"}
            sx={{
              textTransform: "unset",
              fontSize: "1rem",
              fontWeight: "400",
              ":hover": {
                color: "primary.main",
              },
            }}
          >
            {item.linkName}
          </Link>
        </Box>
      );
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="relative"
        component="nav"
        sx={{
          backgroundColor: "transparent",
          height: { xs: "3.25rem", sm: "7.25rem" },
          justifyContent: "center",
          padding: { sm: "0 2.4rem" },
          boxShadow: "none",
        }}
      >
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
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
            }}
          >
            <NextLink href={"/"} style={{ display: "flex" }}>
              <Image
                src="/images/logos/octalogic.svg"
                alt="Octalogic logo"
                width={60}
                height={60}
              />
            </NextLink>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {navLinks(navItems)}
          </Box>
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
