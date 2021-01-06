import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 100px;
  height: calc(100vh - 254px);

  @media only screen and (max-width: 768px) {
    height: auto;
    margin-bottom: 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Actions = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ActionTitle = styled.h1`
  font-weight: bold;
  font-size: 55px;
  line-height: 58px;
  letter-spacing: -0.015em;
  color: var(--dark-color);
  margin-bottom: 40px !important;

  @media only screen and (max-width: 768px) {
    font-size: 35px;
  }
`;

export const ActionSubTitle = styled.h3`
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: var(--secondary-color);
  margin-bottom: 30px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const OrderButton = styled(Link)`
  background-color: var(--primary-color);
  border-radius: 10px;
  height: 70px;
  width: 235px;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: -0.015em;
  color: var(--light-color);

  :hover {
    background-color: var(--primary-hover-color);
    transform: scale(1.01);
  }
`;

export const HomeImage = styled.div`
  img {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;

    img {
      width: 80%;
    }
  }
`;
