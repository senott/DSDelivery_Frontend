import styled from 'styled-components';

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const SummaryContent = styled.div`
  width: calc(70% - 40px);
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: var(--primary-color);
  color: #fff;
  padding: 20px;
`;

export const SummarySelectedItems = styled.span`
  font-weight: normal;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: -0.015em;
  display: block;
  margin-bottom: 10px;
`;

export const SummaryStrong = styled.strong`
  font-weight: bold;
  font-size: 16px;
  line-height: 15px;
  letter-spacing: -0.015em;
  margin-right: 5px;
`;

export const SummaryTotalItems = styled.span`
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: -0.015em;
  color: #fff;
  display: block;
`;

export const OrderButton = styled.button`
  width: 220px;
  height: 45px;
  background: #fff;
  border-radius: 10px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.015em;
  color: var(--primary-color);
  border: 0;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    background-color: #fcf2f2;
    transform: scale(1.01);
  }
`;
