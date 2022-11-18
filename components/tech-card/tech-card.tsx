import Box from "@mui/material/Box";

import Image from "next/image";

import { ITechnology } from "../../interfaces";

export const TechCard = ({ details }: { details: ITechnology }) => {
  const { name, iconUrl, link } = details;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: "0 0 10%",
        padding: "1rem",
        transition: "box-shadow .3s, border-radius .3s",
        ":hover": {
          borderRadius: ".25rem",
          boxShadow: "0.062rem 1.25rem 1.562rem -0.312rem rgb(46 61 73 / 30%)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={iconUrl}
          alt={`${name} logo`}
          width={112}
          height={0}
          style={{ height: "auto" }}
        />
      </Box>
      <a
        style={{
          color: "#212529",
          textTransform: "unset",
          fontSize: "1.25rem",
          fontWeight: "500",
          marginTop: "1.5rem",
          marginBottom: "0.5rem",
          textAlign: "center",
          textDecoration: "none",
        }}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {name.toUpperCase()}
      </a>
    </Box>
  );
};

export default TechCard;
