import * as React from "react";

import Styles from "./service-card.module.css";

import Image from "next/image";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import { styled, SxProps } from "@mui/material/styles";
import Link from "@mui/material/Link";

import EastSharp from "@mui/icons-material/East";

import { IService } from "../../interfaces";

export interface ServiceCardProps {
  sx?: SxProps;
  details: IService;
  className?: string;
}

const MyCard = styled(Card)({
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
  const { details, ...otherProps } = props;

  return (
    <MyCard {...otherProps}>
      <Link href={details.actionLink} underline="none">
        <CardActionArea className={Styles.card_action_area}>
          <Box className={Styles.img_wrap}>
            <Image
              src={details.illustration}
              alt="Octalogic Tech Remote Resources"
              className={Styles.img}
            />
          </Box>
          <CardContent>
            <Typography
              gutterBottom
              component="h3"
              sx={{
                color: "info.main",
              }}
              className={Styles.title}
            >
              {details.title}
            </Typography>
            <Typography color="text.primary" className={Styles.desc}>
              {details.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton color="primary" className={Styles.icon_btn} aria-label={details.title}>
            <EastSharp />
          </IconButton>
        </CardActions>
      </Link>
    </MyCard>
  );
}

export default ServiceCard;
