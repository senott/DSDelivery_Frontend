import styled from 'styled-components';

export const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LocationContent = styled.div`
  width: 70%;
  margin: 30px 0 120px 0;
  padding: 20px 0;
  height: 400px;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const LocationTitle = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.015em;
  color: var(--secondary-color);
`;

export const LocationSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
