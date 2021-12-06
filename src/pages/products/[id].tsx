import type { NextPage } from 'next';

import { useRouter } from 'next/dist/client/router';

const Product: NextPage = () => {
  const router = useRouter();
  const productId = router.query.id as string;

  return (
    <div>
      <h1>Product: {productId}</h1>
    </div>
  );
};

export default Product;
