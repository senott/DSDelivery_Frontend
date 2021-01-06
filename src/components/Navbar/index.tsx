import React from 'react';
import { Container, LogoLink, LogoText } from './styles';

import logo from '../../assets/images/logo.svg';

const Navbar: React.FC = () => {
  return (
    <Container>
      <LogoLink href="/">
        <img src={logo} alt="DS Delivery" />
        <LogoText>DS Delivery</LogoText>
      </LogoLink>
    </Container>
  );
};

export default Navbar;
