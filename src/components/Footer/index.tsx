import React from 'react';

import { Container, IconsContainer } from './styles';

import instagram from '../../assets/images/instagram.svg';
import linkedin from '../../assets/images/linkedin.svg';
import youtube from '../../assets/images/youtube.svg';

const Footer: React.FC = () => {
  return (
    <Container>
      App desenvolvido durante a 2ª edição da Semana DevSuperior
      <IconsContainer>
        <a href="https://www.youtube.com/c/DevSuperior" target="_new">
          <img src={youtube} alt="YouTube" />
        </a>
        <a href="https://www.linkedin.com/school/devsuperior" target="_new">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/devsuperior.ig" target="_new">
          <img src={instagram} alt="Instagram" />
        </a>
      </IconsContainer>
    </Container>
  );
};

export default Footer;
