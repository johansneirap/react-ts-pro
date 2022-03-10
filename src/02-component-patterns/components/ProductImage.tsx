import { CSSProperties, useContext } from "react";
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { productContext } from "./ProductCard";

interface Props {
    img?: string | '';
    className?: string;
    style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
    const { product } = useContext( productContext );
    let imgToShow: string;

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img 
            className={`${styles.productImg} ${className}`} 
            src={ imgToShow } 
            alt="Product image" 
            style={ style }
        />
    );
};
