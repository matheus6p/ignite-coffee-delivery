import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

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

  useEffect(() => {
    async function getProducts(): Promise<void> {
      try {
        const response = await Axios.get<IProduct[]>('http://localhost:5555/products');
        setProducts(response.data);
        console.log(response.data)
      } catch (err) {
        console.log(err);
      }
    }

    void getProducts()
  }, []);



  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
