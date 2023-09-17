import styled from "styled-components";
import { SCAppWidget } from "../../theme/globalStyle";

export const SCUserInfoBlock = styled.div`
  flex: 0 1 auto;
`;

export const SCUserBio = styled(SCAppWidget)`
  .AppElem {
    margin-bottom: 45px;

    .mainText {
      font-size: calc(0.4vw + 16.6px);
    }

    .AppImage {
      height: calc(1.2vw + 103.8px); //? 126 | 108
      width: calc(1.2vw + 103.8px); //? 126 | 108
    }
  }

  .userBio {
  }

  .userInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 25px;
    }

    .info {
      flex: 1 1 40%;
    }

    .value {
      flex: 1 1 60%;
      text-align: left;
    }
  }
`;

export const SCUserMonitoring = styled.div`
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SCStatistics = styled(SCAppWidget)`
  h5 {
    margin-bottom: calc(1vw + 21.5px); //? 40 | 25
  }

  .countsWrapper {
    display: flex;
    gap: 33px;
  }
`;

export const SCCountElem = styled.div`
  flex: 1 1 25%;

  border-radius: 10px;
  padding: 22px;
  background-color: ${(props) => props.theme.colors.bgc};
  text-align: center;

  .count {
    color: ${(props) => props.theme.colors.primeColor};
    font-size: calc(0.5vw + 30.2px); //? 40 | 32
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

export const SCIncomes = styled(SCAppWidget)`
  h5 {
    margin-bottom: calc(1vw + 21.5px); //? 40 | 25
  }

  .coolChart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    padding: 20px;
    border: 2px solid ${(props) => props.theme.colors.primeColor};
    border-radius: 10px;
    text-align: center;
    position: relative;
    z-index: 5;

    &::after {
      content: "Очень крутой график";
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;

      font-size: 72px;
      font-weight: 900;
      color: ${(props) => props.theme.colors.lightGray};

      opacity: 0.5;
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      font-size: 32px;
      font-weight: 600;
      text-transform: uppercase;

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`;
