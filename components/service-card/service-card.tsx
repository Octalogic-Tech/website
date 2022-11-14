import * as React from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, IconButton, SxProps } from "@mui/material";
import Box from "@mui/system/Box";
import { styled } from "@mui/system";

import EastSharp from "@mui/icons-material/East";

import { IService } from "../../interfaces";

export interface ServiceCardProps {
  sx?: SxProps;
  details: IService;
}

const MyCard = styled(Card)({
  // maxWidth: { xs: "83.333%", sm: "33.333%", md: "22.14%" },
  // flex: { xs: "0 0 83.333%", sm: "0 0 33.333%", md: "0 0 22.14%" },
  boxShadow: "0.062rem 1.25rem 1.562rem -0.312rem rgb(46 61 73 / 20%)",
  transition: "box-shadow 0.5s",
  marginTop: "3rem",
  overflow: "visible",
  ":hover": {
    boxShadow: "0.062rem 0.312rem 0.625rem rgb(46 61 73 / 30%)",
  },
  ".MuiCardActionArea-focusHighlight": {
    backgroundColor: "white !important",
  },
  ".MuiCardActionArea-root": {
    cursor: "default",
  },
  ".MuiCardContent-root": {
    padding: "1.25rem",
  },
  ".MuiCardActions-root": {
    justifyContent: "flex-end",
  },
});

export function ServiceCard(props: ServiceCardProps) {
  const { details } = props;
  const router = useRouter();

  const handleActionClick = async (linkUrl: string) => {
    await router.push(linkUrl);
  };

  return (
    <MyCard {...props}>
      <CardActionArea>
        <Box
          sx={{
            width: "100%",
            height: { xs: "68.6vw", sm: "25.6vw", md: "17.6vw" },
            position: "relative",
            padding: ".75rem 1.25rem",
            paddingBottom: 0,
            marginTop: "-3rem",
          }}
        >
          <Image
            src={details.illustration}
            alt="Octalogic Tech Remote Resources"
            style={{ width: "100%", height: "auto", position: "relative" }}
          />
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            component="h4"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "600",
              textAlign: "center",
              color: "info.main",
              lineHeight: "1.8rem",
              margin: "0.25rem",
            }}
          >
            {details.title}
          </Typography>
          <Typography
            color="text.primary"
            sx={{ textAlign: "center", paddingTop: "1rem", opacity: "0.8", lineHeight: "1.3rem" }}
          >
            {details.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          color="primary"
          sx={{ margin: "0 0.5rem" }}
          onClick={() => handleActionClick(details.actionLink)}
        >
          <EastSharp />
        </IconButton>
      </CardActions>
    </MyCard>
  );
}

export default ServiceCard;
