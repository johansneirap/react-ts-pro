import { createContext, useContext } from 'react';
import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { ProductContextProps, Props } from '../interfaces/productInterfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtonsCounter } from './ProductButtonCounter';


export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export const ProductCard = ({ children, product} :ProductCardProps) => {
    
    const { counter, increaseBy} = useProduct();

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={styles.productCard}>
                {/* <img className={ styles.productImg } src={ noImage } alt="coffee-mug" /> */}
                { children }
                {/* <ProductImage img={ product.img }/>
                <ProductTitle title={ product.title }/>
                <ProductButtonsCounter counter={ counter } increaseBy={ increaseBy } /> */}
            </div>
        </Provider>
    )
};

ProductCard.Buttons= ProductButtonsCounter;
ProductCard.Image  = ProductImage;
ProductCard.Title  = ProductTitle;
