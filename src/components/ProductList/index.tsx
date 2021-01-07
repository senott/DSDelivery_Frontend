import React from 'react';

import ProductCard from '../ProductCard';
import { ListContainer, ListItems } from './styles';
import Product from '../../dtos/Product';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ListContainer>
      <ListItems>
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </ListItems>
    </ListContainer>
  );
};

export default ProductList;
