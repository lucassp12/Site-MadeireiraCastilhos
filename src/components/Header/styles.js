import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.div`
  flex-grow: 1;
  height: 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px 0 50px;
`;

export const ContainerSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  strong {
    font-size: 20px;
    color: #000;
    margin-right: 10px;
  }

  img {
    padding: 0 2px;

    &:hover {
      transition: 0.5s;
      transform: rotate(360deg);
    }
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: ${colors.red};

  ul {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 100%;

    &:hover {
      transition: 0.5s;
      background: #fff;
      border: 2px solid ${colors.red};
      a {
        color: red;
      }
    }

    a {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;
