import React, { useState } from 'react';
import { Product } from "../../assets/productData"
import styles from './Card.module.scss';


interface CardProps {
    product: Product;
    onAddItem: (item: Product) => void;
  }
  
const ProductCard: React.FC<CardProps> = (
  {
  product,
  onAddItem,
}:CardProps) => { 
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const decrement = () =>
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(isNaN(newQuantity) ? 1 : Math.max(newQuantity, 1));
  };
  const addToCart = () =>
  onAddItem(product);


  return (
    <div
      className={styles.card}
    >
      <img src={product.image} alt={product.productName}
        //className={styles.cardImage}
      />
      <div
      //className={styles.cardContent}
      >
        <h3
          //className={styles.cardTitle}
        >
          {product.productName}</h3>
        <p
          //className={styles.cardDescription}
        >{product.description}</p>
        <p
          //className={styles.cardPrice}
        >${product.price.toFixed(2)}</p>
        <div
          //className={styles.quantityContainer}
        >
          <input
            type='number'
            min='1'
            value={quantity}
            onChange={handleInputChange}
            //className={styles.quantityInput}
            role='spinbutton'
          />
          <button
            //className={styles.quantityButton}
            onClick={decrement}>
            -
          </button>
          <button
            //className= {styles.quantityButton} 
            onClick={increment}>
            +
          </button>
        </div>
        <button
          //className={styles.addItemButton}
          onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
