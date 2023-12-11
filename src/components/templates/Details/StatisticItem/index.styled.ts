import styled from "styled-components";

export const StatisticItem = styled.div`
  aspect-ratio: 1/1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.iconColor};
  box-shadow: 0px 0px 5px ${(props) => props.theme.shadowColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 20px;
  @media (max-width: 1008px) and (min-width: 576px) {
    aspect-ratio: 1/1;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const Icon = styled.div`
  color: ${(props) => props.theme.textColor};
  font-size: 50px;
  margin: 5px 0px 0px 0px;

  @media (max-width: 1008px) and (min-width: 576px) {
    font-size: 30px;
  }
  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

export const Text = styled.span`
  font-size: ${(props) => props.theme.textSizeTextM};
  @media (max-width: 768px) and (min-width: 576px) {
    font-size: ${(props) => props.theme.textSizeTextM700};
  }
  @media (max-width: 576px) {
    font-size: ${(props) => props.theme.textSizeTextM500};
  }
`;
