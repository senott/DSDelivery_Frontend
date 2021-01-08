import React from 'react';
import formatPrice from '../../utils/formatPrice';
import {
  SummaryContainer,
  SummaryContent,
  SummarySelectedItems,
  SummaryTotalItems,
  SummaryStrong,
  OrderButton,
} from './styles';

interface SummaryProps {
  totalProducts: number;
  orderAmount: number;
  onSubmit: () => void;
}

const Summary: React.FC<SummaryProps> = ({
  totalProducts,
  orderAmount,
  onSubmit,
}) => {
  return (
    <SummaryContainer>
      <SummaryContent>
        <div>
          <SummarySelectedItems>
            <SummaryStrong>{totalProducts}</SummaryStrong>
            PRODUTOS SELECIONADOS
          </SummarySelectedItems>
          <SummaryTotalItems>
            <SummaryStrong>{formatPrice(orderAmount)}</SummaryStrong>
            VALOR TOTAL
          </SummaryTotalItems>
        </div>
        <OrderButton onClick={onSubmit}>FAZER PEDIDO</OrderButton>
      </SummaryContent>
    </SummaryContainer>
  );
};

export default Summary;
