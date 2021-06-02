import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import Navigation from "sections/Navigation";
import BannerThree from 'sections/BannerThree'
import Service from "sections/Service";
import CoinFund from "sections/CoinFund";
import About from "sections/About";
import Awards from "sections/Awards";
import UserMap from "sections/UserMap";
import Wallet from "sections/Wallet";
import Statistics from "sections/Statistics";
import Stack from "sections/Stack"; 
import Faq from "sections/Faq";
import Footer from "sections/Footer";
import Demo from "sections/Demo";

import FavIcon from "assets/images/fav-icon.png";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const Home = () => {
  return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Hyperfabric | Cross chain interoperability</title>
          <meta name="Description" content="Hyperfabric | Cross chain interoperability" />
          <meta name="theme-color" content="#280D57" />
          <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
        </Head>

        <GlobalStyle />
        <Navigation />
        <BannerThree />
        <Demo />
      </ThemeProvider>
  );
};

export default Home;