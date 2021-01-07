import React, { useEffect, useState } from 'react';

import ProductList from '../../components/ProductList';
import StepsHeader from '../../components/StepsHeader';
import Product from '../../dtos/Product';
import api from '../../services/api';
import { Container } from './styles';

const Orders: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const steps = [
    'Selecione os produtos e localização',
    'Depois clique em <strong>"ENVIAR PEDIDO"</strong>',
  ];

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get('/products');

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  return (
    <Container>
      <StepsHeader title={'Siga as \r\netapas'} steps={steps} />
      <ProductList products={products} />
    </Container>
  );
};

export default Orders;
