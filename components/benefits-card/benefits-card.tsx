import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SxProps, styled } from "@mui/material/styles";

import Image from "next/image";

import { IBenefit } from "../../interfaces";

export interface BenefitsCardProps {
  sx?: SxProps;
  details: IBenefit;
}

const MyCard = styled(Card)((props) => ({
  display: "flex",
  backgroundColor: "transparent",
  boxShadow: "0.062rem 0.312rem 0.625rem rgb(46 61 73 / 30%)",
  transition: "box-shadow 0.2s",
  height: "100%",
  padding: "0 1.5rem",
  ":hover": {
    boxShadow: "0.062rem 1.25rem 1.562rem -0.312rem rgb(46 61 73 / 20%)",
  },
  [props.theme.breakpoints.down("sm")]: {
    padding: "0 0.5rem",
  },
  // ".MuiCardContent-root": {
  //   padding: "2rem",
  // },
}));

export function BenefitsCard(props: BenefitsCardProps) {
  const { details } = props;

  return (
    <MyCard {...props}>
      <Box
        sx={{
          flex: { xs: "0 0 30%", lg: "0 0 21.1%" },
          position: "relative",
          paddingTop: { xs: "100%", sm: "0" },
        }}
      >
        <Image src={details.illustration} alt="Octalogic Tech Remote Resources" fill />
      </Box>
      <CardContent
        sx={{
          padding: {
            xs: "1rem",
            sm: "2rem",
            md: "2rem",
          },
        }}
      >
        <Typography
          gutterBottom
          component="h3"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "info.main",
            lineHeight: "1.8rem",
            margin: "0.25rem",
          }}
        >
          {details.title}
        </Typography>
        <Typography
          color="text.primary"
          sx={{ paddingTop: "1rem", opacity: "0.8", lineHeight: "1.3rem" }}
        >
          {details.desc}
        </Typography>
      </CardContent>
    </MyCard>
  );
}

export default BenefitsCard;
