import styled from 'styled-components';

export const Container = styled.footer`
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: var(--dark-color);
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: var(--light-color);
`;

export const IconsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;

  > * {
    margin-right: 10px;
  }
`;
