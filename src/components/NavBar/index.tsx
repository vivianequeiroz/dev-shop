import React from 'react';

import NextLink from 'next/link';
import { Flex, Link, SimpleGrid } from '@chakra-ui/react';

export const NavBar: React.FC = () => {
  return (
    <Flex as="nav" width="100%" justify="center" padding={2}>
      <SimpleGrid
        templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
        templateRows={{ base: '1fr 1fr', md: '1fr' }}
        gap={[2, 4, 8, 10]}
      >
        <Link
          as={NextLink}
          fontSize="1.3rem"
          fontWeight="bold"
          color="blue.700"
          href="/home#monitors"
        >
          Monitores
        </Link>
        <Link
          as={NextLink}
          fontSize="1.3rem"
          fontWeight="bold"
          color="blue.700"
          href="/home#keyboards"
        >
          Teclados
        </Link>
        <Link
          as={NextLink}
          fontSize="1.3rem"
          fontWeight="bold"
          color="blue.700"
          href="/home#mouses"
        >
          Mouses
        </Link>
        <Link
          as={NextLink}
          fontSize="1.3rem"
          fontWeight="bold"
          color="blue.700"
          href="/home#chairs"
        >
          Cadeiras
        </Link>
      </SimpleGrid>
    </Flex>
  );
};
