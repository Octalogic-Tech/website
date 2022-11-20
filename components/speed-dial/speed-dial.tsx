import * as React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useRouter } from "next/router";

const actions = [
  { icon: <PermPhoneMsgIcon />, name: "Contact", linkUrl: "contact" },
  {
    icon: <MiscellaneousServicesIcon />,
    name: "Services",
    linkUrl: "services",
  },
  { icon: <GroupsIcon />, name: "About", linkUrl: "about" },
  { icon: <HomeIcon />, name: "Home", linkUrl: "/" },
];

export function MobileSpeedDial() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => setOpen(!open);
  const handleActionClick = async (linkUrl: string) => {
    await router.push(linkUrl);
    handleClick();
  };

  return (
    <Box
      sx={{
        transform: "translateZ(0px)",
        display: { sm: "none" },
        position: "fixed",
        bottom: "4rem",
        right: "1rem",
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial"
        // sx={{ position: 'absolute', bottom: 0, right: 16 }}
        icon={<SpeedDialIcon icon={<MenuIcon />} openIcon={<CloseIcon />} />}
        onClick={handleClick}
        open={open}
        direction={"up"}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            onClick={() => handleActionClick(action.linkUrl)}
            sx={{ backgroundColor: "primary.main", color: "white" }}
            // tooltipTitle={action.name}
            // tooltipOpen
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export default MobileSpeedDial;
