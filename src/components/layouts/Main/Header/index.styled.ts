import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  min-height: 100px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textColor};
  box-shadow: 0px 0px 5px ${(props) => props.theme.accentColor1};
  background-color: ${(props) => props.theme.backgroundColor};
  background-image: url(${(props) => props.theme.imageBehindHeader});
  top: 0;
  position: sticky;
  overflow: hidden;
  z-index: 50;
  @media (max-width: 768px) and (min-width: 576px) {
    min-height: 60px;
  }
  @media (max-width: 576px) {
    min-height: 60px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  box-sizing: border-box;
  border-radius: 15px; /* Add this line to create curly corners */

  @media (min-width: 1200px) {
    width: 1200px;
  }
  @media (max-width: 1200px) and (min-width: 992px) {
    width: 100%;
  }
  @media (max-width: 992px) and (min-width: 768px) {
    width: 100%;
  }
  @media (max-width: 768px) and (min-width: 576px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    width: 80%;
  }
`;

export const Logo = styled.div`
  display: flex;
  width: 100%;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0px;
`;

export const Img = styled.img`
  display: flex;
  align-items: center;
  height: 230px;

  @media (max-width: 500px) {
    height: 110px;
  }
`;
export const Name = styled.span`
  display: flex;
  font-size: 50px;
  font-weight: 500;
  font-family: Roboto;
  letter-spacing: 10px;
  margin: 5px 0px 0px 0px;
  @media (max-width: 768px) and (min-width: 576px) {
    font-size: ${(props) => props.theme.textSizeTextM500};
  }
  @media (max-width: 576px) {
    font-size: 12px;

    letter-spacing: 0px;
  }
`;

export const Buttons = styled.div`
  display: flex;
`;
