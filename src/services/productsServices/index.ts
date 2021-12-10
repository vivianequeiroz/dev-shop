import products from './products.json';

export type Product = {
  id: number;
  title: string;
  price: number;
  discountPrice?: number;
  inventory: number;
  images: string[];
  badges: string[];
};

export const getProducts = async (): Promise<Product[]> => {
  return products;
};

export const getProductById = async (
  id: number | string,
): Promise<Product | undefined> => {
  const product = products.find(
    (candidate) => String(candidate.id) === String(id),
  );

  return product;
};
