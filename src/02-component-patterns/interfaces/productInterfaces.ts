import React, { ReactElement, CSSProperties } from "react";

export interface ProductCardProps {
    children?: ReactElement | ReactElement[];
    className?: string;
    product: Product;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
};

export interface Product {
    id: string;
    title: string;
    img?: string;
};

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
};

export interface onChangeArgs {
    product: Product;
    count: number;
}