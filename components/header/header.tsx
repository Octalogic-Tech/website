import * as React from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import NextLink from "next/link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import Link from "../link/link";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

interface NavItems {
  linkName: string;
  linkHref: string;
}

const drawerWidth = 240;
const navItems: NavItems[] = [
  {
    linkName: "Home",
    linkHref: "/",
  },
  {
    linkName: "Who We Are",
    linkHref: "about",
  },
  {
    linkName: "Services",
    linkHref: "services",
  },
  {
    linkName: "Let's Talk",
    linkHref: "contact",
  },
];

function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ display: "flex", padding: "1rem 1rem", justifyContent: "center" }}>
        <NextLink href={"/"}>
          <Image src="/images/logos/octalogic.svg" alt="Octalogic logo" width={60} height={60} />
        </NextLink>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.linkName}>
            <ListItemButton sx={{ textAlign: "center", textTransform: "unset" }}>
              <ListItemText primary={item.linkName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const navLinks = (rowNavItems: NavItems[]) => {
    return rowNavItems.map((item: NavItems) => {
      return item.linkName === "Let's Talk" ? (
        <Button
          key={item.linkName}
          sx={{
            fontSize: "1rem",
            borderRadius: "1.562rem",
            color: "info.contrastText",
            textTransform: "unset",
            backgroundColor: "secondary.main",
            padding: "0.375rem 0.875rem",
            ":hover": {
              backgroundColor: "secondary.main",
              boxShadow: "2px 4px 10px rgb(255 98 167 / 40%)",
            },
          }}
        >
          {item.linkName}
        </Button>
      ) : (
        <Link
          key={item.linkName}
          href={item.linkHref}
          underline="none"
          color={router.pathname === item.linkHref ? "primary.main" : "info.main"}
          sx={{
            textTransform: "unset",
            fontSize: "1rem",
            fontWeight: "400",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            ":hover": {
              color: "primary.main",
            },
          }}
        >
          {item.linkName}
        </Link>
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
          padding: { sm: "0 2rem" },
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="info"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
            }}
          >
            <NextLink href={"/"}>
              <Image
                src="/images/logos/octalogic.svg"
                alt="Octalogic logo"
                width={60}
                height={60}
              />
            </NextLink>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>{navLinks(navItems)}</Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
    </Box>
  );
}

export default Header;
