import Button from "@mui/material/Button";
import { SxProps } from "@mui/material/styles";
import { styled } from "@mui/system";

/* eslint-disable-next-line */
export interface PillButtonProps {
  text: string;
  sx: SxProps;
}

const MyButton = styled(Button)(({ theme }) => ({
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

export function PillButton(props: PillButtonProps) {
  const { text } = props;
  return (
    <MyButton variant="contained" {...props}>
      {text}
    </MyButton>
  );
}

export default PillButton;
