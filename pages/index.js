import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import Navigation from "sections/Navigation";
import BannerThree from 'sections/BannerThree'
import Demo from "sections/Demo";

import FavIcon from "assets/images/fav-icon.png";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

import { MoralisProvider } from 'react-moralis';

import { useEffect } from "react";
import { isEmpty } from "lodash";

const appId = process.env.NEXT_PUBLIC_MORALIS_APP_ID
const serverUrl = process.env.NEXT_PUBLIC_MORALIS_SERVER_PATH
console.log(appId)
console.log(serverUrl)

const Home = () => {
  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Hyperfabric | Cross chain interoperability</title>
          <meta name="Description" content="Hyperfabric | Cross chain interoperability" />
          <meta name="theme-color" content="#280D57" />
          <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        </Head>

        <GlobalStyle />
        <Navigation />
        <BannerThree />
        <Demo />
      </ThemeProvider>
    </MoralisProvider>
  );
};

export default Home;