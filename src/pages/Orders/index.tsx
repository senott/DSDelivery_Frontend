import React from 'react';
import StepsHeader from '../../components/StepsHeader';
import { Container } from './styles';

const Orders: React.FC = () => {
  const steps = [
    'Selecione os produtos e localização',
    'Depois clique em <strong>"ENVIAR PEDIDO"</strong>',
  ];

  return (
    <Container>
      <StepsHeader title={'Siga as \r\netapas'} steps={steps} />
    </Container>
  );
};

export default Orders;
