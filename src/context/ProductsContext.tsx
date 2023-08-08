import React, { createContext, useState, useEffect } from 'react';
import { api } from '../services/api';

export interface IProduct {
  id: string;
  beverage: string;
  price: number;
  description: string;
  category: string[];
  url_img: string;
}

interface ProductsContext {
  products: IProduct[];
}

interface ProductsContextProviderProps {
  children: React.ReactNode;
}

export const ProductContext = createContext({} as ProductsContext);

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
  const [products, setProducts] = useState<IProduct[]>([]);

  async function getProducts(): Promise<void> {
    try {
      const response = await api.get<IProduct[]>('/products');
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    void getProducts()
  }, []);



  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
