import { SxProps } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

interface ParagraphProps {
  sx?: SxProps;
  children: any;
}

export const Paragraph = (props: ParagraphProps) => {
  const { sx, children } = props;
  return (
    <Typography
      component="p"
      sx={{
        fontSize: {
          xs: "1.4rem",
          sm: "1rem",
          md: "1.8rem",
          lg: "1.3rem",
        },
        color: "text.primary",
        lineHeight: { xs: "1.8rem", sm: "1.4rem", md: "2rem" },
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default Paragraph;
