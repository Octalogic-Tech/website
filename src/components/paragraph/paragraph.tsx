// import { SxProps } from "@mui/material/styles";
// import Typography from "@mui/material/Typography";

// interface ParagraphProps {
//   sx?: any;
//   children: any;
//   className?: string;
// }

// export const Paragraph = (props: ParagraphProps) => {
//   const { sx, children, ...otherProps } = props;
//   console.log(props);

//   return (
//     <Typography
//       component="p"
//       sx={{
//         fontSize: {
//           xs: "1.4rem",
//           sm: "1rem",
//           md: "1.8rem",
//           lg: "1.3rem",
//         },
//         color: "text.primary",
//         lineHeight: { xs: "1.8rem", sm: "1.4rem", md: "2rem" },
//         ...sx,
//       }}
//       {...otherProps}
//     >
//       {children}
//     </Typography>

//   );
// };

// export default Paragraph;
import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = (props: ParagraphProps) => {
  const { children, className } = props;

  return (
    <p
      className={`text-[16px] lg:text-[18px] xl:text-[20px] leading-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-[#212529] ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;