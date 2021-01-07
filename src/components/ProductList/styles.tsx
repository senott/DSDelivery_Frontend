import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListItems = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 235px);
  grid-gap: 20px 15px;
  justify-content: space-between;
`;
