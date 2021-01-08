import React from 'react';

import ProductCard from '../ProductCard';
import { ListContainer, ListItems } from './styles';
import Product from '../../dtos/Product';

interface ProductListProps {
  products: Product[];
  selectedProducts: Product[];
  handleSelectProduct: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  selectedProducts,
  handleSelectProduct,
}) => {
  return (
    <ListContainer>
      <ListItems>
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              product={product}
              handleSelectProduct={() => handleSelectProduct(product)}
              selected={selectedProducts.includes(product)}
            />
          );
        })}
      </ListItems>
    </ListContainer>
  );
};

export default ProductList;
