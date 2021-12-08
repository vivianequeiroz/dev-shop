import type { GetServerSideProps, NextPage } from 'next';

type ProductProps = {
  id: string;
};

const Product: NextPage<ProductProps> = ({ id }) => {
  return (
    <div>
      <h1>Product: {id}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  return {
    props: {
      id,
    },
  };
};

export default Product;
