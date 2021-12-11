import { Flex, Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

type LogoProps = {
  width?: string;
};

export function Logo({ width = '12rem' }: LogoProps) {
  return (
    <Flex shrink="0" width={width}>
      <motion.div layoutId="logo-main-devshop">
        <Link as={NextLink} href="/home">
          <Image src="/assets/devshop-logo.svg" alt="Logo DevShop" />
        </Link>
      </motion.div>
    </Flex>
  );
}
