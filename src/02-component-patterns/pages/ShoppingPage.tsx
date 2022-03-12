import { useState } from "react";
import { ProductCard, ProductImage, ProductTitle, ProductButtonsCounter } from "../components";
import { products } from "../data/products";
import useShoppingCart from "../hooks/useShoppingCart";
import { Product } from "../interfaces/productInterfaces";
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  const { shoppingCart, setShoppingCart, onProductCountChange } = useShoppingCart();
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        { products.map( product => 
          <ProductCard
            key={ product.id }
            product={ product }
            className="bg-dark text-white"
            onChange={ onProductCountChange }
            value={ shoppingCart[product.id]?.count || 0 }
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white text-bold" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        )}
        <div className="shopping-cart">
          {
            Object.values(shoppingCart).map( product => 
              <ProductCard 
                key={product.id}
                product={ product }
                className="bg-dark text-white"
                style={{
                  width: '100px'
                }}
                onChange={ onProductCountChange }
                value={ product.count }
              >
                <ProductImage className="custom-image"/>
                <ProductButtonsCounter className="custom-buttons"/>
              </ProductCard> 
              )
          }
        </div>
        {/* <ProductCard 
          product={ product2 }
          className="bg-dark text-white"
        >
          <ProductImage className="custom-image"/>
          <ProductTitle className="text-white text-bold"/>
          <ProductButtonsCounter className="custom-buttons"/>
        </ProductCard> */}
      </div>
    </div>
  );
};
