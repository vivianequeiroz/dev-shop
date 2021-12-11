import React from 'react';

import NextLink from 'next/link';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  Wrap,
  useColorModeValue,
  Container,
  VStack,
  Tooltip,
  chakra,
  Icon,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

import products from '../../../services/productsServices/products.json';

import { ProductCard, ProductsTags } from './ProductCard';

export function ProductsExhibition() {
  const chairs = products.filter((product) =>
    product.badges.includes('cadeira'),
  );

  const mouses = products.filter((product) => product.badges.includes('mouse'));

  const keyboards = products.filter((product) =>
    product.badges.includes('teclado mecanico'),
  );
  const monitors = products.filter((product) =>
    product.badges.includes('monitor'),
  );
  console.log(monitors);
  return (
    <Container maxW={'7xl'} p="12">
      <Heading
        d="flex"
        as="h1"
        justifyContent="center"
        mt="1.5rem"
        fontSize="5xl"
      >
        Recomendação do mês
      </Heading>

      <Divider mt="5rem" mb="5rem" />

      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
          >
            <Link
              as={NextLink}
              href={`/products/${chairs[0].id}`}
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
            >
              <Image
                borderRadius="lg"
                src={chairs[0].images[0]}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          {/* <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  'radial(blue.600 1px, transparent 1px)',
                  'radial(blue.300 1px, transparent 1px)',
                )}
                backgroundSize="38rem 38rem"
                opacity="0.4"
                height="100%"
              />
            </Box> */}
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}
        >
          <ProductsTags tags={['cadeira', 'home office']} />
          <Heading marginTop="1">
            <Link
              as={NextLink}
              href={`/products/${chairs[0].id}`}
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
            >
              Cadeira para escritório e home office
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>

          <Tooltip
            label="Adicionar ao carrinho"
            bg="blue.200"
            borderRadius="lg"
            placement={'bottom'}
            color={'gray.800'}
            fontSize={'1em'}
            d="flex"
            mt={10}
          >
            <chakra.a href={'#'} display={'flex'}>
              <Icon
                as={FiShoppingCart}
                h={7}
                w={7}
                mt={5}
                alignSelf={'center'}
              />
            </chakra.a>
          </Tooltip>
          <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
            <Box as="span" color={'gray.600'} fontSize="lg">
              R$2.300,00
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider mt="5rem" mb="5rem" />

      <Heading
        d="flex"
        as="h1"
        justifyContent="flex-start"
        mt="2rem"
        id="monitors"
      >
        Monitores
      </Heading>
      <Wrap spacing="30px" marginTop="5">
        {monitors.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Wrap>

      <Divider mt="5rem" mb="5rem" />

      <Heading
        d="flex"
        as="h1"
        justifyContent="flex-start"
        mt="2rem"
        id="keyboards"
      >
        Teclados
      </Heading>
      <Wrap spacing="30px" marginTop="5">
        {keyboards.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Wrap>

      <Divider mt="5rem" mb="5rem" />

      <Heading
        d="flex"
        as="h1"
        justifyContent="flex-start"
        mt="2rem"
        id="mouses"
      >
        Mouses
      </Heading>
      <Wrap spacing="30px" marginTop="5">
        {mouses.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Wrap>

      <Divider mt="5rem" mb="5rem" />

      <Heading
        d="flex"
        as="h1"
        justifyContent="flex-start"
        mt="2rem"
        id="chairs"
      >
        Cadeiras
      </Heading>
      <Wrap spacing="30px" marginTop="5">
        {chairs.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Wrap>

      <Divider mt="5rem" mb="5rem" />

      <VStack paddingTop="2.5rem" spacing="2" alignItems="flex-start" mb="1rem">
        <Heading as="h2" mb="2rem">
          Por que você, dev, deveria se preocupar em usar bons equipamentos?{' '}
        </Heading>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
      </VStack>
    </Container>
  );
}
