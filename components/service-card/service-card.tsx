import * as React from "react";

import Image from "next/image";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, SxProps } from "@mui/material";
// import Box from "@mui/system/Box";

import MobileDevCard from "../../public/images/mobile_dev_card.svg";

/* eslint-disable-next-line */
export interface ServiceCardProps {
  sx: SxProps;
}

export function ServiceCard(props: ServiceCardProps) {
  return (
    <Card {...props}>
      <CardActionArea>
        {/* <Box sx={{ width: '100%', height: '100%', position: 'relative' }}> */}
        <Image src={MobileDevCard} alt="Octalogic Tech Remote Resources" />
        {/* </Box> */}
        <CardContent>
          <Typography gutterBottom component="h4">
            Mobile Apps
          </Typography>
          <Typography color="text.primary">
            We craft apps for Android and iOS designed with the latest UI trends, while delivering
            the best in class UX for your end users
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Arrow icon
        </Button>
      </CardActions>
    </Card>
  );
}

export default ServiceCard;
