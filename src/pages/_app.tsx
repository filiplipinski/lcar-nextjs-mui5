import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'src/styles/global.css';

import { theme } from 'src/styles/theme';
import { createEmotionCache } from 'src/styles/createEmotionCache';
import { Navbar } from 'src/common/components/navbar/Navbar';
import { Footer } from 'src/common/components/Footer';
import { AnchorElementsIdEnum } from 'src/common/components/navbar/Navbar.types';
import { GsapTransitionContextController } from 'src/lib/gsap/context/GsapTransitionController';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>LCAR Auto Detailing - Radom</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <GsapTransitionContextController>
          <Navbar />

          <div id={AnchorElementsIdEnum.Top} />
          <main>
            <Component {...pageProps} />
          </main>

          <Footer />
        </GsapTransitionContextController>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
