import React from 'react';

import { Flex } from '@chakra-ui/react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const Shell: React.FC = ({ children }) => {
  return (
    <Flex
      flex={1}
      marginX="auto"
      justifyContent="center"
      position="relative"
      direction="column"
    >
      <Header />
      <Flex
        height="100%"
        width="100%"
        flex={1}
        maxWidth="2560px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={4}
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
