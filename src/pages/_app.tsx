import { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { useRouter } from 'next/router';
import 'swiper/css';
import 'swiper/css/pagination';
import 'src/styles/global.css';

import { theme } from 'src/styles/theme';
import { createEmotionCache } from 'src/styles/createEmotionCache';
import { Navbar } from 'src/common/components/navbar/Navbar';
import { Footer } from 'src/common/components/Footer';
import { GsapTransitionContextController } from 'src/lib/gsap/context/GsapTransitionController';
import { scrollToElement } from 'src/common/utils/scroll';
import { scrollToElementsId } from 'src/common/components/navbar/Navbar.types';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes('#')) {
      const sectionId = router.asPath.split('#')?.[1];
      const id = `scrollto-${sectionId}`; // look Navbar.types.ts for more details

      scrollToElement(id);
    } else {
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  }, [router.asPath]);

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
          <div id={scrollToElementsId.top} />

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
