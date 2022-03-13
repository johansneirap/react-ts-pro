import { createContext } from 'react';
import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { ProductContextProps, ProductCardProps } from '../interfaces/productInterfaces';



export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues } :ProductCardProps) => {
    
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider 
            value={{ 
                counter,
                increaseBy, 
                product, 
                maxCount 
            }}>
            <div 
                className={`${ styles.productCard } ${ className }`}
                style={ style }
            >
                { children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset
                }) }
            </div>
        </Provider>
    )
};
