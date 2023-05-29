// import { SxProps } from "@mui/material/styles";
// import Typography from "@mui/material/Typography";

// interface HeadingProps {
//   sx?: SxProps;
//   size: string;
//   children: any;
//   className?: string;
// }

// const CommonHeadingStyles = {
//   color: "info.main",
//   fontWeight: "600",
// };

// const LargeHeadingStyles = {
//   ...CommonHeadingStyles,
//   fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem", lg: "3rem" },
//   lineHeight: { xs: "2rem", sm: "2.2rem", md: "2.5rem", lg: "3.5rem" },
// };

// const MediumHeadingStyles = {
//   ...CommonHeadingStyles,
//   fontSize: { xs: "1.8rem", sm: "1.7rem", md: "2rem", lg: "2.5rem" },
//   lineHeight: { xs: "2rem", sm: "1.7rem", md: "2rem", lg: "2.5rem" },
//   textAlign: "center",
// };

// export function Heading(props: HeadingProps) {
//   const { sx = {}, children, size, ...otherProps } = props;
//   let headingStyles = {};
//   let typographyComponent: "h1" | "h2" = "h1";

//   switch (size) {
//     case "large": {
//       headingStyles = LargeHeadingStyles;
//       typographyComponent = "h1";
//       break;
//     }
//     case "medium": {
//       headingStyles = MediumHeadingStyles;
//       typographyComponent = "h2";
//       break;
//     }
//     default:
//       headingStyles = LargeHeadingStyles;
//       typographyComponent = "h1";
//   }

//   return (
//     <Typography
//       component={typographyComponent}
//       sx={{
//         ...headingStyles,
//         ...sx,
//       }}
//       {...otherProps}
//     >
//       {children}
//     </Typography>
//   );
// }

// export default Heading;

import React from "react";

interface HeadingProps {
  size: "large";
  children: React.ReactNode;
  className?: string;
}

// const CommonHeadingStyles = {
//   color: "#1E40AF",
//   fontWeight: "600",
// };

// const LargeHeadingStyles = {
// ...CommonHeadingStyles,
// fontSize: { sm: "1.8rem", md: "2.2rem", lg: "2.5rem", xl: "3rem" },
// lineHeight: { sm: "2rem", md: "2.2rem", lg: "2.5rem", xl: "3.5rem" },
// fontSize: "2.3rem",
// lineHeight: "3.5rem",
// };

// const MediumHeadingStyles = {
// ...CommonHeadingStyles,
// fontSize: { xs: "1.8rem", sm: "1.7rem", md: "2rem", lg: "2.5rem" },
// lineHeight: { xs: "2rem", sm: "1.7rem", md: "2rem", lg: "2.5rem" },
// fontSize: "2rem",
// lineHeight: "1rem",
// textAlign: "center",
// };

// const SmallHeadingStyles = {
// ...CommonHeadingStyles,
// fontSize: { xs: "1.8rem", sm: "1.7rem", md: "2rem", lg: "2.5rem" },
// lineHeight: { xs: "2rem", sm: "1.7rem", md: "2rem", lg: "2.5rem" },
// fontSize: "1.8rem",
// lineHeight: "2rem",
// textAlign: "center",
// };

const Heading = (props: HeadingProps) => {
  const { children, size, className } = props;

  let headingStyles = {};
  let HeadingComponent: keyof JSX.IntrinsicElements = "h1";

  // switch (size) {
  //   case "large": {
  //     headingStyles = LargeHeadingStyles;
  //     HeadingComponent = "h1";
  //     break;
  //   }
  //   case "medium": {
  //     headingStyles = MediumHeadingStyles;
  //     HeadingComponent = "h2";
  //     break;
  //   }
  //   case "small": {
  //     headingStyles = SmallHeadingStyles;
  //     HeadingComponent = "h3";
  //     break;
  //   }
  //   default:
  //     headingStyles = LargeHeadingStyles;
  //     HeadingComponent = "h1";
  // }

  return (
    <HeadingComponent
      className={`font-semibold sm:text-[1.8rem] md:text-[2rem] lg:text-[2.3rem] ${className}`}
      style={headingStyles}
    >
      {children}
    </HeadingComponent>
  );
};

export default Heading;
