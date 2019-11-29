import React from 'react';

import logo from '../../assets/logo.jpeg';

import {
  Container,
  ContainerTop,
  ContainerMiddle,
  ContainerBottom,
} from './styles';

export default function Footer() {
  return (
    <>
      <Container>
        <ContainerTop>
          <img src={logo} alt="logo" />
          <div>
            <strong>Contato</strong>
            <span>(51) 3684-2838</span>
            <span>(51) 3684-1976</span>
            <a>madeireiracastilhos@hotmail.com</a>
          </div>
          <div>
            <p>
              " A mais de 30 anos <br />
              ajudando a construir <br /> sonhos."
            </p>
          </div>
        </ContainerTop>
        <ContainerMiddle>
          <div>
            <strong>Endereço</strong>
            <p>
              Av. João de Magalhães, 1387
              <br />
              Parque dos Presidentes <br />
              Tramandaí/RS <br />
              95590-000 <br />
            </p>
          </div>
          <div>
            <strong>Nossos Horários</strong>
            <span>Segunda a Sábado</span>
            <span>07:30 às 12:00 </span>
            <span>13:30 às 18:00</span>
          </div>
        </ContainerMiddle>
        <ContainerBottom>
          <span>©2019 Madeireira Castilhos | Materias de Construção</span>
        </ContainerBottom>
      </Container>
    </>
  );
}
