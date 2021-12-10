import type { GetServerSideProps, NextPage } from 'next';

import { Carousel } from 'react-responsive-carousel';
import {
  Badge,
  Box,
  Flex,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

import { Header } from '../../components/Header';
import { getProductById, Product } from '../../services/productsServices';
import { generateLorem } from '../../utils/generateLorem';

type ProductPageProps = {
  product: Product;
};

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  const renderCustomThumbs = () => {
    const images = product.images;
    const thumbList = images.map((image, index) => (
      <picture key={index}>
        <source data-srcSet={image} type="image/jpg" />
        <img key={image} src={image} alt={image} height="70" />
      </picture>
    ));

    return thumbList;
  };

  return (
    <Flex
      direction="column"
      height="100%"
      width="100%"
      flex={1}
      maxWidth="2560px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={4}
    >
      <Header />
      <Flex width="100%" px={4} direction="column">
        <Box>
          <Flex
            align="flex-start"
            justify="space-between"
            mt={6}
            wrap={['wrap-reverse', 'wrap']}
          >
            <Box
              border="1px"
              borderRadius="4px"
              borderColor="gray.400"
              width={['100%', '49%']}
            >
              <Carousel
                showThumbs
                autoPlay
                infiniteLoop
                emulateTouch
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                transitionTime={500}
                swipeable={false}
                renderThumbs={renderCustomThumbs}
              >
                {product.images.map((image, index) => (
                  <Image
                    boxSize="sm"
                    objectFit="contain"
                    src={image}
                    alt={`${product.title} ${index}`}
                    key={image}
                    onChange={(args) => {
                      console.log(args);
                    }}
                  />
                ))}
              </Carousel>
            </Box>
            <Box bgColor="pink" width={['100%', '49%']}>
              <Stack spacing={[2, 4]} direction="row">
                {product.badges.map((badge) => (
                  <Badge key={badge} variant="subtle" colorScheme="purple">
                    {badge}
                  </Badge>
                ))}
              </Stack>
              <Text as="h1" color="gray.500" fontSize="4xl" noOfLines={8}>
                {product.title}
              </Text>
              <Text mt={6} as="h2" color="gray.500" fontSize="2xl">
                Por:{' '}
                <Text as="b" color="gray.600" fontWeight="bold" fontSize="2xl">
                  {product.price}
                </Text>
              </Text>
              <Box>...</Box>
            </Box>
          </Flex>
        </Box>
        <Flex mt={[3, 8]} px={10} align="center" justify="center">
          <Tabs>
            <TabList>
              <Tab>Detalhes</Tab>
              <Tab>Garantia</Tab>
              <Tab>Pedido personalizado</Tab>
              <Tab>Ajustes</Tab>
              <Tab>Como cuidar</Tab>
              <Tab>Notas</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Text as="h2" color="gray.600" fontWeight="bold" fontSize="2xl">
                  Descrição
                </Text>
                <Text as="p" color="gray.600" fontSize="xl">
                  {generateLorem('large')}
                </Text>
              </TabPanel>
              <TabPanel>
                <Text as="h2" color="gray.600" fontWeight="bold" fontSize="2xl">
                  Material
                </Text>
                <Text as="p" color="gray.600" fontSize="xl">
                  {generateLorem('medium')}
                </Text>
              </TabPanel>
              <TabPanel>
                <Text as="h2" color="gray.600" fontWeight="bold" fontSize="2xl">
                  Caso
                </Text>
                <Text as="p" color="gray.600" fontSize="xl">
                  {generateLorem('large')}
                </Text>
              </TabPanel>
              <TabPanel>
                <Text as="h2" color="gray.600" fontWeight="bold" fontSize="2xl">
                  Usabilidade
                </Text>
                <Text as="p" color="gray.600" fontSize="xl">
                  {generateLorem('medium')}
                </Text>
              </TabPanel>
              <TabPanel>
                <Text as="h2" color="gray.600" fontWeight="bold" fontSize="2xl">
                  Em mãos
                </Text>
                <Text as="p" color="gray.600" fontSize="xl">
                  {generateLorem('large')}
                </Text>
              </TabPanel>
              <TabPanel>
                <Text as="h2" color="gray.600" fontWeight="bold" fontSize="2xl">
                  Notas importantes
                </Text>
                <Text as="p" color="gray.600" fontSize="xl">
                  {generateLorem('small')}
                </Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Flex>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [{ params: { id: '100' } }],
//     fallback: true,
//   };
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = String(context.params?.id);
  console.info(id);
  const product = await getProductById(id);
  console.info(product);

  if (!product) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
