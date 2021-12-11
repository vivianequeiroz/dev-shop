import React from 'react';

import { type } from 'os';

import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Tag,
  Text,
  SpaceProps,
  WrapItem,
} from '@chakra-ui/react';

import { Product } from '../../../services/productsServices';

interface IProductsTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

type ProductCardProps = {
  product: Product;
};

export const ProductsTags: React.FC<IProductsTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop} size={['sm', 'md', 'xl']}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="blue" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({
  product: { title, price, images, badges, description },
}) => {
  return (
    <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
      <Box w="100%">
        <Box borderRadius="lg" overflow="hidden">
          <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <Image
              transform="scale(1.0)"
              src={images[0]}
              alt="some text"
              objectFit="contain"
              width="100%"
              transition="0.3s ease-in-out"
              _hover={{
                transform: 'scale(1.05)',
              }}
            />
          </Link>
        </Box>
        <ProductsTags tags={badges} marginTop="3" />
        <Heading fontSize={'xl'} marginTop="2">
          <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            {title}
          </Link>
        </Heading>
        <Text as="p" fontSize="md" marginTop="2">
          {description}
        </Text>
        <Text fontSize={'xl'} fontWeight={800}>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price)}
        </Text>
      </Box>
    </WrapItem>
  );
};

export { ProductCard };
