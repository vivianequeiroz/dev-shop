import { Flex, HStack, Icon, Link } from '@chakra-ui/react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

import { Logo } from '../Logo';
import { User } from '../User';

export function Header() {
  return (
    <Flex as="header">
      <Logo />
      <HStack>
        <Link>Screens</Link>
        <Link>Keyboards</Link>
        <Link>Mouses</Link>
        <Link>Chairs</Link>
      </HStack>
      <HStack>
        <Icon
          as={AiOutlineSearch}
          role="img"
          width={60}
          height={60}
          fill="white"
        />
        <User />
        <Icon
          as={AiOutlineShoppingCart}
          role="img"
          width={60}
          height={60}
          fill="white"
        />
      </HStack>
    </Flex>
  );
}
