import { useState } from "react";
import { ProductCard, ProductImage, ProductTitle, ProductButtonsCounter } from "../components";
import { products } from "../data/products";
import { Product } from "../interfaces/productInterfaces";
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
        <ProductCard
          key={ product.id }
          product={ product }
          className="bg-dark text-white"
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {
            ({ reset, increaseBy, count }) => (
              <>
                <ProductCard.Image className="custom-image" />
                <ProductCard.Title className="text-white text-bold" />
                <ProductCard.Buttons className="custom-buttons" />
                <button onClick={reset}>Reset</button>
                <button onClick={ ()=> increaseBy( -2 )}> -2 </button>
                <button onClick={ ()=> increaseBy( +2 )}> +2 </button>
                <span>{ count }</span>
              </>
            )
          }
        </ProductCard>
    </div>
  );
};
