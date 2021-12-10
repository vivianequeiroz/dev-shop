import { useContext } from 'react';

import { CartContext, CartContextData } from '../contexts/Cart/CartContext';

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
