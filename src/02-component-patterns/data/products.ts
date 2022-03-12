import { Product } from "../interfaces/productInterfaces";

const product = {
    id: '1',
    title: 'Coffe Mug',
    img: './coffee-mug.png',
  };
  
  const product2 = {
    id: '2',
    title: 'Coffe Mug - Meme',
    img: './coffee-mug2.png',
  };
  
export const products: Product[] = [ product, product2 ];