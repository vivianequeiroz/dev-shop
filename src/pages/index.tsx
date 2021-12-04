import type { NextPage } from 'next';

import { Text, Icon, VStack, Flex, Button } from '@chakra-ui/react';
import Head from 'next/head';
import { AiFillGithub, AiOutlineShoppingCart } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  const titleInitialAnimation = {
    x: 0,
    y: -200,
    scale: 1.2,
    rotate: 360,
  };

  const titleFinalAnimation = {
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      velocity: 2,
    },
  };

  const cartInitialAnimation = {
    x: -1000,
    y: -200,
  };

  const cartFinalAnimation = {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      velocity: 0.1,
    },
  };

  return (
    <Flex
      flex={1}
      backgroundColor="blue.500"
      marginX="auto"
      justifyContent="center"
    >
      <Head>
        <title>dev-shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        as="main"
        backgroundColor="blue.500"
        height="100vh"
        width="100%"
        flex={1}
        maxWidth="1440px"
        justifyContent="center"
        alignItems="center"
      >
        <VStack spacing={8} align="center">
          <motion.div
            initial={titleInitialAnimation}
            animate={titleFinalAnimation}
          >
            <Text as="h1" fontSize="5xl" color="white" fontWeight="bold">
              DevShop
            </Text>
          </motion.div>
          <motion.div
            initial={cartInitialAnimation}
            animate={cartFinalAnimation}
          >
            <Icon
              as={AiOutlineShoppingCart}
              width={60}
              height={60}
              fill="white"
            />
          </motion.div>
          <Button
            leftIcon={<Icon as={AiFillGithub} fill="black" />}
            variant="solid"
            size="lg"
          >
            Entrar com github
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Home;
