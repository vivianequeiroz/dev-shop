import { ReactNode } from 'react';

import {
  Box,
  Link,
  SimpleGrid,
  Stack,
  VStack,
  Text,
  useColorModeValue,
  Button,
  VisuallyHidden,
  Image,
  Divider,
  Flex,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'600'} fontSize={'lg'} marginBottom={2}>
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
      as={'a'}
      backgroundColor={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      width={20}
      height={20}
      cursor={'pointer'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease in out'}
      _hover={{
        backgroundColor: useColorModeValue('blackAlpha.300', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

export function Footer() {
  return (
    <Box bottom={'0'}>
      <Flex
        as={Stack}
        maxWidth={'100%'}
        padding={'10'}
        backgroundColor={'blue.400'}
        justifyContent="center"
        justifySelf="center"
        alignItems="center"
      >
        <SimpleGrid
          templateColumns={{ md: '1fr 1fr 1fr 1fr 1fr' }}
          spacing={40}
        >
          <VStack align={'flex-start'}>
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-logos/black-and-white/bni.svg"
              alt="Logo BNI"
            />
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-logos/black-and-white/mandiri.svg"
              alt="Logo mandiri"
            />
          </VStack>
          <VStack align={'flex-start'}>
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-logos/black-and-white/permata-bank.svg"
              alt="Logo PermataBank"
            />
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-logos/black-and-white/kredivo.svg"
              alt="Logo Kredivo"
            />
          </VStack>
          <VStack align={'flex-start'}>
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-logos/black-and-white/mastercard.svg"
              alt="Logo Mastercard"
            />
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-logos/black-and-white/uob.svg"
              alt="Logo UOB"
            />
          </VStack>
          <VStack align={'flex-start'}>
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-logos/black-and-white/danamon.svg"
              alt="Logo Danamon"
            />
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-logos/black-and-white/go-pay.svg"
              alt="Logo Go Pay"
            />
          </VStack>
          <VStack align={'flex-start'}>
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-logos/black-and-white/visa.svg"
              alt="Logo Visa"
            />
            <Image
              boxSize="100"
              objectFit="cover"
              src="/assets/payment-methods-logos/black-and-white/standard-chartered.svg"
              alt="Logo Standard Chartered"
            />
          </VStack>
        </SimpleGrid>
      </Flex>
      <Flex
        as={Stack}
        maxWidth={'100%'}
        heigth={'30%'}
        padding={'30'}
        backgroundColor={'blue.600'}
        color={'white'}
        justifyContent="center"
        justifySelf="center"
        alignItems="center"
      >
        <SimpleGrid
          templateColumns={{ md: '1fr 1fr 1fr 1fr' }}
          spacing={20}
          py={10}
          px={60}
        >
          <Stack align={'flex-start'}>
            <Box>
              <Image
                objectFit="cover"
                src="/assets/devshop-logo.svg"
                alt="Logo DevShop"
              />
            </Box>
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
            <Divider width={'20'} />
            <Text>Telefone: 022-20277564</Text>
            <Text>Service Center: 0811-233-8899</Text>
            <Text>Customer Center: 0811-235-9988</Text>
            <Stack direction={'row'} spacing={6} paddingTop={8}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter size={32} />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube size={32} />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram size={32} />
              </SocialButton>
              <SocialButton label={'Facebook'} href={'#'}>
                <FaFacebook size={32} />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Links Úteis</ListHeader>
            <Divider width={'20'} />
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
            <Divider width={'20'} />
            <Link href={'#'}>Mengenal Arti Cukup</Link>
            <Link href={'#'}>Tell Your Difference</Link>
            <Link href={'#'}>Waykambas</Link>
            <Link href={'#'}>Rebrand</Link>
            <Link href={'#'}>Gallery</Link>
            <Link href={'#'}>Singo</Link>
            <Link href={'#'}>Rakai</Link>
          </Stack>
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
