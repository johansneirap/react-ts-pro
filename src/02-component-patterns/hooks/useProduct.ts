import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/productInterfaces";

interface Props {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ( { onChange, product, value=0, initialValues }: Props ) => {
    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    const isMounted = useRef( false );
    const maxCountIsReached = useRef( false );
    
    const increaseBy = ( value: number )=>{

        let newValue = Math.max( counter + value, 0 );
        if (initialValues?.maxCount) {
            newValue = Math.min( newValue, initialValues?.maxCount );
        }
        maxCountIsReached.current = newValue === initialValues?.maxCount;

        setCounter( newValue );
        onChange && onChange({ product, count: newValue });
    };

    const reset = ()=>{
        setCounter(initialValues?.count || value);
    };

    useEffect(() => {
      if (!isMounted.current) return;
      setCounter( value );
    }, [ value ])
    
    useEffect(() => {
      isMounted.current = true
    }, [])
    

    return {
        counter,
        increaseBy,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        reset,
    }
};

export default useProduct;