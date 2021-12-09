import type { GetServerSideProps, NextPage } from 'next';

import { Carousel } from 'react-responsive-carousel';
import { Box, Flex, Image } from '@chakra-ui/react';
import NextImage from 'next/image';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { getProductById, Product } from '../../services/productsServices';
type ProductPageProps = {
  product: Product;
};

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  return (
    <Flex direction="column">
      <Header />
      <Flex direction="column" width="100%" px={4}>
        <Box height="100vh">
          <Flex align="center" justify="space-between">
            <Box bgColor="purple">
              <Carousel
                axis="vertical"
                infiniteLoop
                autoPlay
                emulateTouch
                useKeyboardArrows
                dynamicHeight
                // renderArrowPrev={() => <div>Prev</div>}
                // renderArrowNext={() => <div>Next</div>}
                // renderIndicator={() => <div>Indicator</div>}
              >
                {product.images.map((image, index) => (
                  <Image
                    boxSize="sm"
                    objectFit="contain"
                    src={image}
                    alt={`${product.title} ${index}`}
                    key={image}
                  />
                ))}
              </Carousel>
            </Box>
            <Box bgColor="pink">
              <div>{product.title}</div>
            </Box>
          </Flex>
        </Box>
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
