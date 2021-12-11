import { createContext, ReactNode, useState } from 'react';

import { useToast } from '@chakra-ui/react';
import { parseCookies, setCookie } from 'nookies';

import { Product } from '../../services/productsServices';
import products from '../../services/productsServices/products.json';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

export interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData,
);

const recoverCart = (): Product[] => {
  const { '@devshop:cart': storagedCart } = parseCookies();

  if (storagedCart) {
    return JSON.parse(storagedCart);
  }

  return [];
};

const persistCart = (cart: Product[]) => {
  setCookie(null, '@devshop:cart', JSON.stringify(cart), {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: '/',
  });
};

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const toast = useToast();

  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = recoverCart();

    return storagedCart;
  });

  const addProduct = async (productId: number) => {
    try {
      const product = products.find((product) => product.id === productId);

      const isProductAlreadyInCartIndex = cart.findIndex(
        (product) => product.id === productId,
      );

      const isNewProduct = isProductAlreadyInCartIndex === -1;

      if (isNewProduct) {
        if (product?.inventory === 0) {
          throw new Error('Product out of stock');
        }

        const newProductWithInitialAmount = Object.assign(product, {
          amount: 1,
        });

        setCart((previousCart) => {
          const newCart = previousCart.concat(newProductWithInitialAmount);

          persistCart(newCart);

          return newCart;
        });
      } else {
        updateProductAmount({
          productId,
          amount: cart[isProductAlreadyInCartIndex].amount
            ? Number(cart[isProductAlreadyInCartIndex].amount) + 1
            : 1,
        });
      }
      console.log(cart);
      toast({
        title: 'Sucesso',
        description: 'Produto adicionado ao carrinho',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (error: any) {
      console.log(`deu ruim`);
      toast({
        title: 'Erro',
        description: 'Não foi possível adicionar o produto',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const removeProduct = (productId: number) => {
    try {
      console.log('trying to remove');
      const hasProductInCart = cart.find((product) => product.id === productId);

      if (hasProductInCart) {
        setCart((previousCart) => {
          const newCart = previousCart.filter(
            (product) => product.id !== productId,
          );

          persistCart(newCart);
          return newCart;
        });
      } else {
        throw new Error('Product not found');
      }

      toast({
        title: 'info',
        description: 'Produto removido do carrinho.',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (error) {
      console.log(`deu ruim`);
      console.log(error);
      toast({
        title: 'Erro',
        description: 'Erro ao remover produto do carrinho.',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      const product = cart.find((product) => product.id === productId);

      if (!product) {
        return;
      }

      setCart((previousCart) => {
        const productIndex = cart.findIndex(
          (product) => product.id === productId,
        );

        previousCart[productIndex].amount = amount;
        const newCart = [...previousCart];

        persistCart(newCart);
        return newCart;
      });
    } catch (error: any) {
      console.log(`deu ruim update`);
      console.log(error.message);
      toast({
        title: 'Erro',
        description: 'Erro ao remover produto do carrinho.',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}
