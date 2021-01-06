import React from 'react';

import {
  Container,
  Content,
  Actions,
  ActionTitle,
  ActionSubTitle,
  OrderButton,
  HomeImage,
} from './styles';
import main from '../../assets/images/main.svg';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <Actions>
            <ActionTitle>
              Faça seu pedido <br />
              que entregamos <br />
              para você!!!
            </ActionTitle>
            <ActionSubTitle>
              Escolha o seu pedido e em poucos minutos <br />
              levaremos na sua porta.
            </ActionSubTitle>
            <OrderButton to="/orders">FAZER PEDIDO</OrderButton>
          </Actions>
          <HomeImage>
            <img src={main} alt="Food being delivered" />
          </HomeImage>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
