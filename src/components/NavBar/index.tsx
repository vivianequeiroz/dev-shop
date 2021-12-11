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
        <NextLink href="/home#monitors">
          <Link fontSize="1.3rem" fontWeight="bold" color="white">
            Monitores
          </Link>
        </NextLink>
        <NextLink href="/home#keyboards">
          <Link fontSize="1.3rem" fontWeight="bold" color="white">
            Teclados
          </Link>
        </NextLink>
        <NextLink href="/home#mouses">
          <Link fontSize="1.3rem" fontWeight="bold" color="white">
            Mouses
          </Link>
        </NextLink>
        <NextLink href="/home#chairs">
          <Link fontSize="1.3rem" fontWeight="bold" color="white">
            Cadeiras
          </Link>
        </NextLink>
      </SimpleGrid>
    </Flex>
  );
};
