import type { NextPage } from 'next';

import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { Header } from '../components/Header';
import { Shell } from '../templates/Shell';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.info('user is logged in:', session);
  console.info('user is status is:', status);

  return (
    <Shell>

    </Shell>
  );
};

export default Home;
