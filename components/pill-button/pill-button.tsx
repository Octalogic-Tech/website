import Button from "@mui/material/Button";
import { SxProps, styled } from "@mui/material/styles";

import { useRouter } from "next/router";

/* eslint-disable-next-line */
export interface PillButtonProps {
  sx: SxProps;
  text: string;
  link?: string | null;
  type?: "submit" | "reset" | "button" | undefined;
  handleclick?: () => void;
}

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

export function PillButton(props: PillButtonProps) {
  const { text, link = null, type, handleclick = null, ...otherProps } = props;
  const router = useRouter();

  const handleButtonClick = async (linkUrl: string | null) => {
    if (handleclick) handleclick();
    if (linkUrl && type !== "submit") await router.push(linkUrl);
  };

  return (
    <MyButton variant="contained" {...otherProps} onClick={() => handleButtonClick(link)}>
      {text}
    </MyButton>
  );
}

export default PillButton;
