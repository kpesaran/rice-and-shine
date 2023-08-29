import React from 'react';
import ProductCard from './shopComponents/ProductCard';
import productList, { Product } from '../assets/productData';
import styles from '../styles/shopPage.module.scss';

interface ShopPageProps {
  products: Product[];
  onAddItem: (item: Product) => void;
  itemCount: number;
  toggleMini: boolean;
}

const ShopPage: React.FC<ShopPageProps> = ({ products, onAddItem }) => {
  return (
    <div
    className={styles.cardsContainer}
    >
      {productList.map((product: Product) => (
        <div
          key={product.id}
          className={styles.cardWrapper}
        >
          <ProductCard
                  product={product}
                  onAddItem={onAddItem}
                  key={product.id}
          />
        </div>
      ))}
    </div>
  );
};

export default ShopPage;
