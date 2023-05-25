import { SxProps } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

interface HeadingProps {
  sx?: SxProps;
  size: string;
  children: any;
  className?: string;
}

const CommonHeadingStyles = {
  color: "info.main",
  fontWeight: "600",
};

const LargeHeadingStyles = {
  ...CommonHeadingStyles,
  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem", lg: "3rem" },
  lineHeight: { xs: "2rem", sm: "2.2rem", md: "2.5rem", lg: "3.5rem" },
};

const MediumHeadingStyles = {
  ...CommonHeadingStyles,
  fontSize: { xs: "1.8rem", sm: "1.7rem", md: "2rem", lg: "2.5rem" },
  lineHeight: { xs: "2rem", sm: "1.7rem", md: "2rem", lg: "2.5rem" },
  textAlign: "center",
};

export function Heading(props: HeadingProps) {
  const { sx = {}, children, size, ...otherProps } = props;
  let headingStyles = {};
  let typographyComponent: "h1" | "h2" = "h1";

  switch (size) {
    case "large": {
      headingStyles = LargeHeadingStyles;
      typographyComponent = "h1";
      break;
    }
    case "medium": {
      headingStyles = MediumHeadingStyles;
      typographyComponent = "h2";
      break;
    }
    default:
      headingStyles = LargeHeadingStyles;
      typographyComponent = "h1";
  }

  return (
    <Typography
      component={typographyComponent}
      sx={{
        ...headingStyles,
        ...sx,
      }}
      {...otherProps}
    >
      {children}
    </Typography>
  );
}

export default Heading;
