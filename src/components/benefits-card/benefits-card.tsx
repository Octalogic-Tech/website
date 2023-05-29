// import * as React from "react";

// import Styles from "./benefits-card.module.css";

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import { SxProps, styled } from "@mui/material/styles";

// import Image from "next/image";

// import { IBenefit } from "../../interfaces";

// export interface BenefitsCardProps {
//   sx?: SxProps;
//   details: IBenefit;
//   className?: string;
// }

// const MyCard = styled(Card)((props) => ({
//   display: "flex",
//   backgroundColor: "transparent",
//   boxShadow: "0.062rem 0.312rem 0.625rem rgb(46 61 73 / 30%)",
//   transition: "box-shadow 0.2s",
//   height: "100%",
//   padding: "0 1.5rem",
//   ":hover": {
//     boxShadow: "0.062rem 1.25rem 1.562rem -0.312rem rgb(46 61 73 / 20%)",
//   },
//   [props.theme.breakpoints.down("sm")]: {
//     padding: "0 0.5rem",
//   },
// }));

// export function BenefitsCard(props: BenefitsCardProps) {
//   const { details, ...otherProps } = props;

//   return (
//     <MyCard {...otherProps}>
//       <Box className={Styles.img_wrap}>
//         <Image
//           src={details.illustration}
//           alt="Octalogic Tech Remote Resources"
//           fill
//           sizes="(min-width: 0px) 100vw"
//         />
//       </Box>
//       <CardContent className={Styles.card_content}>
//         <Typography
//           gutterBottom
//           component="h3"
//           sx={{
//             color: "info.main",
//           }}
//           className={Styles.title}
//         >
//           {details.title}
//         </Typography>
//         <Typography color="text.primary" className={Styles.desc}>
//           {details.desc}
//         </Typography>
//       </CardContent>
//     </MyCard>
//   );
// }

// export default BenefitsCard;

import * as React from "react";

import Styles from "./benefits-card.module.css";

import Image from "next/image";

import { IBenefit } from "../../interfaces";

export interface BenefitsCardProps {
  details: IBenefit;
  className?: string;
}

export function BenefitsCard(props: BenefitsCardProps) {
  const { details, ...otherProps } = props;

  return (
    <div
      className="h-full flex p-5 align-center sm:flex-col md:flex-row  hover:!shadow-xl hover:!shadow-slate-400"
      // {...otherProps}
      style={{
        // boxShadow: "2px 3px 3px 0px #888888",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        transition: "box-shadow 0.5s",
        alignItems: "center",
      }}
    >
      <div className="pr-5 ">
        <Image
          src={details.illustration}
          alt="Octalogic Tech Remote Resources"
          className="sm:mb-4 h-full"
          // height={100}
          // width={100}
        />
      </div>
      <div className={Styles.cardContent}>
        <h3 className={`${Styles.title} ${Styles.infoColor}`}>{details.title}</h3>
        <p className={Styles.desc}>{details.desc}</p>
      </div>
    </div>
  );
}

export default BenefitsCard;
