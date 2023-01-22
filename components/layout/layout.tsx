import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import layoutData from "../../content/global/index.json";
import { Theme } from "./theme";
import { getCssText } from "../../stitches.config";
import { globalStyles } from "./globalStyles";
import { Box } from "../Box";

export const Layout = ({ data = layoutData, children }) => {
  globalStyles({ fontFamily: data.theme.font })();

  return (
    <>
      <Head>
        <title>Léa Chaminadas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=abril-fatface:400"
          rel="stylesheet"
        />
        {data.theme.font === "nunito" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {data.theme.font === "lato" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <Theme data={data?.theme}>
        <Box
          css={{
            minHeight: "100vh",

            "&::after": {
              content: "",
              background:
                "url('https://images.unsplash.com/photo-1611625105602-42ee06be977e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80')",
              backgroundSize: "100%",
              backgroundAttachment: "fixed",
              $$gutter: "1rem",
              clipPath:
                "polygon(0% 0%, 0% 100%, $$gutter 100%, $$gutter $$gutter, calc(100% - $$gutter) $$gutter, calc(100% - $$gutter) calc(100% - $$gutter), $$gutter calc(100% - $$gutter), $$gutter 100%, 100% 100%, 100% 0%)",
              pointerEvents: "none",
              position: "fixed",
              inset: "0",
              zIndex: 1000,
            },
          }}
        >
          <Header data={data?.header} />
          <Box css={{ paddingBlock: "20vh" }}>{children}</Box>
          <Footer data={data?.footer} />
        </Box>
      </Theme>
    </>
  );
};
