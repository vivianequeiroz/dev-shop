import React from 'react';

import { Flex, Link, SimpleGrid } from '@chakra-ui/react';

export const NavBar: React.FC = () => {
  return (
    <Flex as="nav" width="100%" justify="center" padding={2} >
      <SimpleGrid
        templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
        templateRows={{ base: '1fr 1fr', md: '1fr' }}
        gap={[2, 4, 8, 10]}
      >
        <Link fontSize="1.3rem" fontWeight="bold" color="white" href="#monitors">
          Monitores
        </Link>
        <Link fontSize="1.3rem" fontWeight="bold" color="white" href="#keyboards" >
          Teclados
        </Link>
        <Link fontSize="1.3rem" fontWeight="bold" color="white" href="#mouses">
          Mouses
        </Link>
        <Link fontSize="1.3rem" fontWeight="bold" color="white" href="#chairs">
          Cadeiras
        </Link>
      </SimpleGrid>
    </Flex>
  );
};
