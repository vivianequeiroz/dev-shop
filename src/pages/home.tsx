import type { NextPage } from 'next';

import { useSession } from 'next-auth/react';

import { Shell } from '../templates/Shell';
import { ProductsExhibition } from '../components/Home/ProductsExhibition';

const Home: NextPage = () => {
  return (
    <Shell>
      <ProductsExhibition />
    </Shell>
  );
};

export default Home;
