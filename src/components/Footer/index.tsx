import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  VStack,
  Text,
  useColorModeValue,
  Button,
  VisuallyHidden,
  Image,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'600'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <Button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

export function Footer() {
  return (
    <Box position="fixed" bottom="0">
      <Container as={Stack} maxWidth={'100%'} py={10} bg={'blue.400'}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <VStack align={'flex-start'}>
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-icons/bni.svg"
              alt="Logo BNI"
            />
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-icons/mandiri.svg"
              alt="Logo mandiri"
            />
          </VStack>
          <VStack align={'flex-start'}>
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-icons/permata-bank.svg"
              alt="Logo PermataBank"
            />
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-icons/kredivo.svg"
              alt="Logo Kredivo"
            />
          </VStack>
          <VStack align={'flex-start'}>
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-icons/mastercard.svg"
              alt="Logo Mastercard"
            />
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-icons/uob.svg"
              alt="Logo UOB"
            />
          </VStack>
          <VStack align={'flex-start'}>
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-icons/danamon.svg"
              alt="Logo Danamon"
            />
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-icons/go-pay.svg"
              alt="Logo Go Pay"
            />
          </VStack>
          <VStack align={'flex-start'}>
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-icons/visa.svg"
              alt="Logo Visa"
            />
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-icons/standard-chartered.svg"
              alt="Logo Standard Chartered"
            />
          </VStack>
        </SimpleGrid>
      </Container>
      <Container
        as={Stack}
        maxWidth={'100%'}
        heigth={'30%'}
        py={10}
        bg={'blue.600'}
        color={'white'}
      >
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack align={'flex-start'}>
            <ListHeader>
              <Box>
                <Image
                  objectFit="cover"
                  src="/assets/dev-shop.svg"
                  alt="Logo DevShop"
                />
              </Box>
            </ListHeader>
            <ListHeader>Endereço</ListHeader>
            <Text>Loja e Escritório</Text>
            <Text as="p">
              Jl. Setrasari Kulon III, No. 10-12, Sukarasa, Sukasari, Bandung,
              Jawa Barat, Indonesia 40152
            </Text>
            <ListHeader>Horário de funcionamento</ListHeader>
            <Text>Segunda - Sábado</Text>
            <Text>10:00 - 18:00</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Entre em contato conosco</ListHeader>
            <Text>Telefone: 022-20277564</Text>
            <Text>Service Center: 0811-233-8899</Text>
            <Text>Customer Center: 0811-235-9988</Text>
            <Stack direction={'row'} spacing={6} paddingTop={8}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Facebook'} href={'#'}>
                <FaFacebook />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Links Úteis</ListHeader>
            <Link href={'#'}>Garantia</Link>
            <Link href={'#'}>Pedido & Envio</Link>
            <Link href={'#'}>Rastreamento</Link>
            <Link href={'#'}>Sobre nós</Link>
            <Link href={'#'}>Reparo</Link>
            <Link href={'#'}>Termos</Link>
            <Link href={'#'}>FAQ</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Campanhas</ListHeader>
            <Link href={'#'}>Mengenal Arti Cukup</Link>
            <Link href={'#'}>Tell Your Difference</Link>
            <Link href={'#'}>Waykambas</Link>
            <Link href={'#'}>Rebrand</Link>
            <Link href={'#'}>Gallery</Link>
            <Link href={'#'}>Singo</Link>
            <Link href={'#'}>Rakai</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
