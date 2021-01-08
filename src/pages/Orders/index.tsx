import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Footer from '../../components/Footer';
import Location from '../../components/Location';

import ProductList from '../../components/ProductList';
import StepsHeader from '../../components/StepsHeader';
import Summary from '../../components/Summary';
import OrderAddress from '../../dtos/OrderAddress';
import OrderPayload from '../../dtos/OrderPayload';
import Product from '../../dtos/Product';
import api from '../../services/api';
import { Container } from './styles';

const Orders: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderAddress, setOrderAddress] = useState<OrderAddress>();
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [orderAmount, setOrderAmount] = useState(0);

  const handleSelectProduct = (product: Product) => {
    if (selectedProducts.includes(product)) {
      const newSelectedProducts = selectedProducts.filter(
        item => item.id !== product.id,
      );

      setSelectedProducts(newSelectedProducts);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  };

  const handleSubmit = async () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));

    const payload: OrderPayload = {
      ...orderAddress!,
      products: productsIds,
    };

    try {
      const response = await api.post('/orders', payload);

      toast.success(`Pedido nro. ${response.data.id} enviado com sucesso!`);
      setSelectedProducts([]);
    } catch (error) {
      toast.error('Problema ao enviar o pedido! Tente novamente.');
    }
  };

  useEffect(() => {
    setTotalProducts(selectedProducts.length);
    setOrderAmount(selectedProducts.reduce((total, p) => total + p.price, 0));
  }, [selectedProducts]);

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
        toast.error(
          'Não foi possível recuperar a lista de produtos neste momento.',
        );
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <Container>
        <StepsHeader title={'Siga as \r\netapas'} steps={steps} />
        <ProductList
          products={products}
          selectedProducts={selectedProducts}
          handleSelectProduct={handleSelectProduct}
        />
        <Location onChangeLocation={location => setOrderAddress(location)} />
        <Summary
          totalProducts={totalProducts}
          orderAmount={orderAmount}
          onSubmit={handleSubmit}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Orders;
