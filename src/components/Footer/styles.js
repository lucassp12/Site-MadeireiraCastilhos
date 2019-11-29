import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.div`
  background: ${colors.red};
  padding-top: 40px;
`;

export const ContainerTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  background: #fff;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    strong {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
    }

    span {
      font-weight: 600;
      font-size: 15px;
    }

    a {
      margin-top: 10px;
      font-weight: 600;
    }

    p {
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

export const ContainerMiddle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${colors.red};
  padding: 40px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    strong {
      color: #fff;
      font-size: 24px;
      margin-bottom: 5px;
    }

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: bold;
    }

    span {
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const ContainerBottom = styled.div`
  background: #000;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 15px;
    color: #fff;
  }
`;
