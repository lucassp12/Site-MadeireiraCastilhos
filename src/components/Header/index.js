import React from 'react';
// import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { colors } from '../../styles/colors';
import logo from '../../assets/logo.jpeg';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';

import { Container, ContainerSocial, ContainerMenu } from './styles';

function Header() {
  return (
    <>
      <Container>
        <img src={logo} alt="logo" />
        <ContainerSocial>
          <strong>SIGA A MADEIREIRA CASTILHOS</strong>
          <a
            target="_blank"
            href="https://www.facebook.com/MadeireiraCastilhos/"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/MadeireiraCastilhos/"
          >
            <img src={instagram} alt="facebook" />
          </a>
        </ContainerSocial>
      </Container>

      <ContainerMenu>
        <ul>
          <li>
            <Link to="">A Empresa</Link>
          </li>
          <li>
            <Link to="">Ofertas</Link>
          </li>
          <li>
            <Link to="">Produtos</Link>
          </li>
          <li>
            <Link to="">Fale Conosco</Link>
          </li>
          <li>
            <Link to="">Home</Link>
          </li>
        </ul>
      </ContainerMenu>
    </>
  );
}

export default Header;
