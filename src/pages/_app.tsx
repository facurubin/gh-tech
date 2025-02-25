import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NextNProgress from "nextjs-progressbar";

const queryClient = new QueryClient();

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#943ae5",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <QueryClientProvider client={queryClient}>
        <Head>...</Head>
        <ThemeProvider theme={theme}>
          <main className={roboto.variable}>
            <NextNProgress />
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </QueryClientProvider>
    </AppCacheProvider>
  );
}
