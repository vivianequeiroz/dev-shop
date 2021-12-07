import type { NextPage } from 'next';

import { useRouter } from 'next/dist/client/router';

import { Footer } from '../../components/Footer';

const Product: NextPage = () => {
  const router = useRouter();
  const productId = router.query.id as string;

  return (
    <div>
      <h1>Product: {productId}</h1>
      <Footer />
    </div>
  );
};

export default Product;
