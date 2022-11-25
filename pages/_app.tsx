import * as React from "react";

import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { Analytics } from "@vercel/analytics/react";
import { SnackbarProvider } from "notistack";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "../config/theme";
import * as vars from "../config/vars";
import createEmotionCache from "../config/createEmotionCache";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import MobileSpeedDial from "../components/speed-dial/speed-dial";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          preventDuplicate
          maxSnack={3}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
          {vars.isAnalyticsEnabled && <Analytics />}
          <Footer />
          <MobileSpeedDial />
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
