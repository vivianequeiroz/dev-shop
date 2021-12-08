/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  Avatar,
  Box,
  HStack,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLoginBoxLine } from 'react-icons/ri';
import Link from 'next/link';

export function User() {
  const isDesktopScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { status, data } = useSession();
  const isUserAuthenticated = status === 'authenticated';
  const isUserUnauthenticated = status === 'unauthenticated';

  const defaultSrc =
    'https://avatars1.githubusercontent.com/u/5695589?s=460&u=f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f&v=4';
  const avatarSource = data?.user?.image || defaultSrc;

  return (
    <HStack alignItems="center" justifyContent="center" spacing={5}>
      {isUserUnauthenticated && (
        <>
          <Icon
            as={AiOutlineUser}
            role="img"
            width={30}
            height={30}
            fill="white"
          />
          <Link href="/">
            <IconButton
              colorScheme="blue"
              icon={<RiLoginBoxLine size={20} />}
              aria-label="Log out"
            />
          </Link>
        </>
      )}
      {isUserAuthenticated && (
        <>
          {isDesktopScreen && (
            <Box textAlign="right">
              <Text color="white">{data?.user?.name}</Text>
              <Text color="gray.300" fontSize="small">
                {data?.user?.email}
              </Text>
            </Box>
          )}
          <Avatar name="João Bispo" src={avatarSource} />
        </>
      )}
    </HStack>
  );
}
