import { CSSProperties, useContext } from "react";
import { productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtonsCounter = ({ className, style }: Props) => {
    const { counter, increaseBy} = useContext( productContext )
    return (
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={ style }>
            <button
                className={styles.buttonMinus}
                onClick={()=> increaseBy( -1 )}
                > - </button>
            <div className={styles.countLabel}> { counter } </div>
            <button 
            className={styles.buttonAdd}
            onClick={()=> increaseBy( +1 )}
            > + </button>
        </div>
    );
};