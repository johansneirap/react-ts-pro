import { useState } from "react";
import { Product } from "../interfaces/productInterfaces";

interface ProductInCart extends Product {
count: number;
}

export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: {count:number, product: Product})=> {

    setShoppingCart( prevState => {

      const productInCart: ProductInCart = prevState[product.id] || { ...product, count: 0 }

      if ( Math.max( productInCart.count + count, 0 ) > 0 ) {
        productInCart.count += count;
        return {
          ...prevState,
          [product.id]: productInCart,
        };
      };

       const newState = { 
         ...prevState,
         [product.id]: { ...product, count },
       };
       delete newState[product.id];
       return newState;
    });
  };
  return {
    shoppingCart,
    setShoppingCart,
    onProductCountChange
  }
};

export default useShoppingCart;
