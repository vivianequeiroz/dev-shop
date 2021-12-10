import 'react-responsive-carousel/lib/styles/carousel.min.css';

import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
