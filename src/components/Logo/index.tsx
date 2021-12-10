import { Box, Image } from '@chakra-ui/react';

export function Logo() {
  return (
    <Box>
      <Image
        objectFit="cover"
        src="/assets/devshop-logo.svg"
        alt="Logo DevShop"
      />
    </Box>
  );
}
