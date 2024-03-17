import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { useRouter } from 'next/router';
import SimpleReactLightbox from 'simple-react-lightbox';
import { PhotoProvider } from 'react-photo-view';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'src/styles/global.css';
import 'react-photo-view/dist/react-photo-view.css';

import { theme } from 'src/styles/theme';
import { createEmotionCache } from 'src/styles/createEmotionCache';
import { Navbar } from 'src/common/components/navbar/Navbar';
import { Footer } from 'src/common/components/Footer';
import { scrollToElement } from 'src/common/utils/scroll';
import { scrollToElementsId } from 'src/common/components/navbar/Navbar.types';
import * as gtag from 'src/lib/gtag';

import { defaultSeo } from '../next-seo.config';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  useEffect(() => {
    // do not use classic import, it's won't work because of library problem in nextjs project (window object undefined)
    import('smoothscroll-polyfill').then(({ polyfill }) => polyfill());
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
      <DefaultSeo {...defaultSeo} />

      <SimpleReactLightbox>
        <PhotoProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Navbar />
            <div id={scrollToElementsId.top} />

            <main>
              <Component {...pageProps} />
            </main>

            <Footer />
          </ThemeProvider>
        </PhotoProvider>
      </SimpleReactLightbox>
    </CacheProvider>
  );
};

export default MyApp;
