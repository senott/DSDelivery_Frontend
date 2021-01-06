import styled from 'styled-components';

export const Container = styled.nav`
  height: 70px;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  padding-left: 45px;
`;

export const LogoLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-self: center;
`;

export const LogoText = styled.text`
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: var(--light-color);
  margin-left: 15px;
`;
