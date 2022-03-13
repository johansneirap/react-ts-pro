import React, { ReactElement, CSSProperties } from "react";

export interface ProductCardProps {
    //children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers)=> JSX.Element
    className?: string;
    initialValues?: InitialValues; 
    onChange?: ( args: onChangeArgs ) => void;
    product: Product;
    style?: CSSProperties;
    value?: number;
};

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
};

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    maxCount?: number;
    product: Product;
};

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}