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
        padding: "1.5rem 1rem",
        transition: "box-shadow .3s, border-radius .3s",
        ":hover": {
          borderRadius: ".25rem",
          boxShadow: "0.062rem 1.25rem 1.562rem -0.312rem rgb(46 61 73 / 30%)",
        },
        gap: "1.5rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "112px",
          maxHeight: "112px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: "0 0 60%",
        }}
      >
        <Image
          src={iconUrl}
          alt={`${name} logo`}
          width={112}
          height={0}
          style={{ height: "auto", maxHeight: "112px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: "0 1rem",
        }}
      >
        <a
          style={{
            color: "#212529",
            textTransform: "unset",
            fontSize: "1.25rem",
            fontWeight: "500",
            textDecoration: "none",
          }}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {name.toUpperCase()}
        </a>
      </Box>
    </Box>
  );
};

export default TechCard;
