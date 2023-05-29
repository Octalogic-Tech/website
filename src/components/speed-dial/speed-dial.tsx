import * as React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Backdrop from "@mui/material/Backdrop";

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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter();

  const handleActionClick = async (linkUrl: string) => {
    handleClose();
    await router.push(linkUrl);
  };

  return (
    <>
      <Backdrop open={open} />
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
          icon={<SpeedDialIcon icon={<MenuIcon />} openIcon={<CloseIcon />} />}
          direction={"up"}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              onClick={() => handleActionClick(action.linkUrl)}
              tooltipTitle={action.name}
              tooltipOpen
            />
          ))}
        </SpeedDial>
      </Box>
    </>
  );
}

export default MobileSpeedDial;
