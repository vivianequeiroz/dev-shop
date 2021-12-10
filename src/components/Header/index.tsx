import { useState } from 'react';

import {
  Center,
  Divider,
  Flex,
  IconButton,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RiLogoutBoxRLine } from 'react-icons/ri';

import { Logo } from '../Logo';
import { User } from '../User';
import { NavBar } from '../NavBar';

export function Header() {
  const [isLoading, setLoading] = useState(false);

  const { status } = useSession();
  const isUserAuthenticated = status === 'authenticated';

  const isDesktopScreen = useBreakpointValue({
    base: false,
    lg: true,
  });
  const dividerOrientation = isDesktopScreen ? 'vertical' : 'horizontal';

  const handleUserLogOut = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await signOut();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      as="header"
      direction={['column', 'row']}
      width="100%"
      align="center"
      justify="space-between"
      paddingX="1.5rem"
    >
      <Logo />
      <NavBar />
      <Stack spacing={[2, 4]} direction="row" align="center">
        <User />
        <Center height="4rem" width="1rem">
          <Divider orientation={dividerOrientation} color="black" />
        </Center>

        <IconButton
          colorScheme="green"
          icon={<AiOutlineShoppingCart size={24} />}
          aria-label="Log out"
        />

        {isUserAuthenticated && (
          <>
            <Center height="4rem" width="1rem">
              <Divider orientation={dividerOrientation} color="black" />
            </Center>
            <IconButton
              as="button"
              colorScheme="red"
              icon={<RiLogoutBoxRLine />}
              aria-label="Log out"
              isLoading={isLoading}
              onClick={handleUserLogOut}
              type="button"
            />
          </>
        )}
      </Stack>
    </Flex>
  );
}
