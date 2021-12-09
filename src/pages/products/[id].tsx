import type { GetServerSideProps, NextPage } from 'next';

import { Flex } from '@chakra-ui/react';

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
      <h1>{product.title}</h1>
      <Footer />
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
