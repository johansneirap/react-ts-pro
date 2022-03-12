import { createContext } from 'react';
import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { ProductContextProps, ProductCardProps } from '../interfaces/productInterfaces';



export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export const ProductCard = ({ children, product, className, style, onChange, value } :ProductCardProps) => {
    
    const { counter, increaseBy } = useProduct({ onChange, product, value });

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div 
                className={`${ styles.productCard } ${ className }`}
                style={ style }
            >
                { children }
            </div>
        </Provider>
    )
};
