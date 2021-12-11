import { useState, useRef } from 'react';

import {
  Center,
  Divider,
  Flex,
  IconButton,
  Stack,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Heading,
} from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RiLogoutBoxRLine } from 'react-icons/ri';

import { Logo } from '../Logo';
import { User } from '../User';
import { NavBar } from '../NavBar';
import { CartItem } from '../CartItem';
import products from '../../services/productsServices/products.json';
import { useCart } from '../../hooks/useCart';

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart } = useCart();
  const isCartEmpty = cart.length === 0;

  const finalRef = useRef();

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
      backgroundColor={'blue.200'}
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
          aria-label="Open cart"
          onClick={onOpen}
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

      <Modal finalFocusRef={finalRef.current} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minWidth={['full', '500px', '600px']}>
          <ModalHeader>
            {' '}
            <Heading fontSize="2xl" fontWeight="extrabold" color="gray.600">
              Carrinho de compras (3 items)
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={{ base: '8', md: '10' }} flex="2">
              <Stack spacing="6">
                {cart.map((product) => (
                  <CartItem
                    key={product.id}
                    id={product.id}
                    imageUrl={product.images[0]}
                    currency="BRL"
                    name={product.title}
                    quantity={Number(product.amount)}
                    price={product.price}
                  />
                ))}
                {isCartEmpty && (
                  <Heading fontSize="xl" color="gray.400">
                    Seu carrinho está vazio...
                  </Heading>
                )}
              </Stack>
            </Stack>
          </ModalBody>

          <ModalFooter
            align="center"
            justifyContent="space-between"
            px={3}
            flexWrap="wrap"
          >
            <Button variant="ghost" color="green.400" onClick={onClose}>
              Continuar comprando
            </Button>
            <Button
              colorScheme="green"
              onClick={onClose}
              disabled={isCartEmpty}
            >
              Comprar tudo
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
