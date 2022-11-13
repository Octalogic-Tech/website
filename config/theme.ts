import { Comfortaa } from "@next/font/google";
import { createTheme } from "@mui/material/styles";

export const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
  fallback: ["cursive", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: "#65d7cc4d",
      main: "#26A69A",
    },
    secondary: {
      main: "#ff62a7",
    },
    info: {
      light: "#000000cc",
      main: "#000000",
      dark: "#a8a8a8",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#212529",
    },
  },
  typography: {
    fontFamily: comfortaa.style.fontFamily,
    // fontFamily: "Comfortaa', cursive",
  },
});

export default theme;
