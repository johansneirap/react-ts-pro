import { useContext } from "react";
import { productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductButtonsCounter = () => {
    const { counter, increaseBy} = useContext( productContext )
    return (
        <div className={styles.buttonsContainer}>
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