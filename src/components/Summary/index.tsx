import React from 'react';
import {
  SummaryContainer,
  SummaryContent,
  SummarySelectedItems,
  SummaryTotalItems,
  SummaryStrong,
  OrderButton,
} from './styles';

const Summary: React.FC = () => {
  return (
    <SummaryContainer>
      <SummaryContent>
        <div>
          <SummarySelectedItems>
            <SummaryStrong>2</SummaryStrong>
            PEDIDOS SELECIONADOS
          </SummarySelectedItems>
          <SummaryTotalItems>
            <SummaryStrong>R$ 100,00</SummaryStrong>
            VALOR TOTAL
          </SummaryTotalItems>
        </div>
        <OrderButton>FAZER PEDIDO</OrderButton>
      </SummaryContent>
    </SummaryContainer>
  );
};

export default Summary;
