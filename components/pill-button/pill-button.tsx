import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const MyButton = styled(Button)(({ theme }: { theme: any }) => ({
  fontSize: "1rem",
  borderRadius: "1.562rem",
  color: "info.contrastText",
  textTransform: "unset",
  padding: "0.375rem 0.875rem",
  ":hover": {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "2px 4px 10px rgb(255 98 167 / 40%)",
  },
}));

export function PillButton(props: ButtonProps) {
  const { title, ...otherProps } = props;

  return (
    <MyButton variant="contained" {...otherProps}>
      {title}
    </MyButton>
  );
}

export default PillButton;
