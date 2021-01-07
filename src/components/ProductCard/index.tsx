import React from 'react';

import {
  CardContainer,
  CardDescription,
  CardImage,
  CardPrice,
  CardTitle,
} from './styles';
import Product from '../../dtos/Product';
import formatPrice from '../../utils/formatPrice';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CardContainer>
      <CardTitle>{product.name}</CardTitle>
      <CardImage src={product.imageUri} alt={product.name} />
      <CardPrice>{formatPrice(product.price)}</CardPrice>
      <CardDescription>
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </CardDescription>
    </CardContainer>
  );
};

export default ProductCard;
