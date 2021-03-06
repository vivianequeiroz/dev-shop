import * as React from 'react';

import {
  CloseButton,
  Flex,
  Select,
  SelectProps,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

import { useCart } from '../../hooks/useCart';

import { PriceTag } from './PriceTag';
import { CartProductMeta } from './CartProductMeta';

type CartItemProps = {
  id: string;
  isGiftWrapping?: boolean;
  name: string;
  quantity: number;
  price: number;
  currency: string;
  imageUrl: string;
  onChangeQuantity?: (quantity: number) => void;
  onClickGiftWrapping?: () => void;
  onClickDelete?: () => void;
};

const QuantitySelect = (props: SelectProps) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};

export const CartItem = (props: CartItemProps) => {
  const {
    id,
    isGiftWrapping,
    name,
    quantity,
    imageUrl,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
  } = props;
  const { updateProductAmount } = useCart();

  const onChangeProductAmount = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newQuantity = +event.currentTarget.value;

    onChangeQuantity?.(newQuantity);
    updateProductAmount({ productId: id, amount: newQuantity });
  };

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta name={name} image={imageUrl} />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: 'none', md: 'flex' }}
      >
        <QuantitySelect value={quantity} onChange={onChangeProductAmount} />
        <PriceTag price={price} currency={currency} />
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={onClickDelete}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize="sm" textDecor="underline" onClick={onClickDelete}>
          Delete
        </Link>
        <QuantitySelect value={quantity} onChange={onChangeProductAmount} />
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  );
};
