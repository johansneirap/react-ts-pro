import { useState } from "react";
import { Product } from "../interfaces/productInterfaces";

interface ProductInCart extends Product {
count: number;
}

export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: {count:number, product: Product})=> {

    console.log({ count })
    setShoppingCart( prevState => {

       const newState = { 
         ...prevState,
         [product.id]: { ...product, count },
       };
       count === 0 && delete newState[product.id];
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
