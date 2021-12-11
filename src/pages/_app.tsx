import 'react-responsive-carousel/lib/styles/carousel.min.css';

import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';

import { CartProvider } from '../contexts/Cart/CartContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
