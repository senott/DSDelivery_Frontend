import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;

  .selected {
    border: 4px solid #008e5b;
    box-sizing: border-box;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  :hover {
    transform: scale(1.01);
  }
`;

export const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.015em;
  color: var(--primary-color);
  text-align: center;
`;

export const CardImage = styled.img`
  border-radius: 10px;
  margin: 15px 0;
  width: 100%;
`;

export const CardPrice = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: var(--primary-color);
  text-align: left;
`;

export const CardDescription = styled.div`
  border-top: 1px solid #e6e6e6;
  margin-top: 15px;
  padding-top: 15px;

  h3 {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.015em;
    color: var(--secondary-color);
  }

  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.015em;
    color: var(--secondary-color);
  }
`;
