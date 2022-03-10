import { ProductCard, ProductImage, ProductTitle, ProductButtonsCounter } from "../components";
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffe Mug',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard 
          product={ product }
          className="bg-dark text-white"
        >
          <ProductCard.Image className="custom-image"/>
          <ProductCard.Title className="text-white text-bold"/>
          <ProductCard.Buttons className="custom-buttons"/>
        </ProductCard>
        
        <ProductCard 
          product={ product }
          className="bg-dark text-white"
        >
          <ProductImage className="custom-image"/>
          <ProductTitle className="text-white text-bold"/>
          <ProductButtonsCounter className="custom-buttons"/>
        </ProductCard>
        <ProductCard 
          product={ product }
          className="bg-dark text-white"
          style={{
            backgroundColor: '#70D1F8'
          }}
        >
          <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
          <ProductTitle className="text-white text-bold" style={{ color: 'purple'}}/>
          <ProductButtonsCounter className="custom-buttons" style={{ display: 'flex', justifyContent: 'end'}}/>
        </ProductCard>
      </div>
    </div>
  );
};
