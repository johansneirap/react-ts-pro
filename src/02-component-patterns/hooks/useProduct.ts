import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/productInterfaces";

interface Props {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}

export const useProduct = ( { onChange, product, value=0 }: Props ) => {
    const [counter, setCounter] = useState(value);
    
    const increaseBy = ( value: number )=>{

        const newValue = Math.max( counter + value, 0 )
        setCounter( newValue );
        onChange && onChange({ product, count: newValue });
    };

    useEffect(() => {
      setCounter( value );
    }, [ value ])
    

    return {
        counter,
        increaseBy,
    }
};

export default useProduct;