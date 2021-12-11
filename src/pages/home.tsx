import type { NextPage } from 'next';

import { useSession } from 'next-auth/react';

import { Shell } from '../templates/Shell';
import { ProductsExhibition } from '../components/Home/ProductsExhibition';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.info('user is logged in:', session);
  console.info('user is status is:', status);

  return (
    <Shell>
      <ProductsExhibition />
    </Shell>
  );
};

export default Home;
