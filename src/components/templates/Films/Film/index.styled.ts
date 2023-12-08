import styled from "styled-components";
export const Card2 = styled.div`
  position: absolute;
  aspect-ratio: 1/1/5;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.7);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;
  padding: 20px;
  color: white;

  @media (max-width: 500px) {
    aspect-ratio: 1/1/2;
  }
`;

export const Rating = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const RatingIcon = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 10px;
  color: ${(props) => props.theme.ratingIconColor};
  font-size: ${(props) => props.theme.textSizeTitle};
`;
export const RatingText = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.textSizeL};
`;

export const Genres = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GenresText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: ${(props) => props.theme.textSizeL};
`;

export const Details = styled.button`
  cursor: pointer;
  border: 0;
  width: 100%;
  margin: 10px 0px;
  height: 40px;
  flex: 0 0 auto;
  background-color: ${(props) => props.theme.accentColor1};
  color: white;

  font-size: ${(props) => props.theme.textSizeL};
  font-weight: 600;
  &:hover {
    background-color: rgba(106, 192, 69, 0.9);
  }
`;

export const Film = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.iconColor};
  width: 100%;
  box-shadow: 0px 0px 5px ${(props) => props.theme.shadowColor};
  border-radius: 30px;
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 5px ${(props) => props.theme.accentColor1};
    transition: all 0.3s ease;
    & ${Card2} {
      transition: 0.3s;
      opacity: 1;
      pointer-events: all;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: right;
`;

export const Cards = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  align-items: center;
`;

export const Card1 = styled.img`
  aspect-ratio: 1/1/5;
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  object-fit: cover;
  box-sizing: border-box;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  align-items: center;

  @media (max-width: 400px) {
    aspect-ratio: 1/1/10;
  }
`;

export const Name = styled.div`
  flex: 0 0 auto;
  flex-wrap: nowrap;
  width: 100%;
  font-size: ${(props) => props.theme.textSizeTextM};
  letter-spacing: 1px;
  overflow: hidden;
  margin: 10px 0px 0px 0px;
  padding: 0px 10px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-items: center;
  @media (max-width: 992px) and (min-width: 768px) {
    font-size: ${(props) => props.theme.textSizeTextM900};
  }
  @media (max-width: 768px) and (min-width: 576px) {
    font-size: ${(props) => props.theme.textSizeTextM700};
  }
  @media (max-width: 576px) and (min-width 400px) {
    font-size: ${(props) => props.theme.textSizeTextM500};
  }

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

export const Text = styled.div`
  margin: 10px 0px 10px 0px;
  padding: 0px 10px;
  display: flex;
  flex: 0 0 auto;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
  align-items: center;
  width: 100%;
  font-weight: 600;
  font-size: ${(props) => props.theme.textSizeTextS};

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

export const Text1 = styled.div`
  text-align: center;
  align-items: center;
  margin: 0;
  padding: 7px 0px;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
  width: 33%;
  font-weight: 600;
  font-size: ${(props) => props.theme.textSizeTextL700};
  background-color: #f9e7ff;
  justify-content: flex-end;
  text-transform: uppercase;
  box-sizing: border-box;
  color: #000000;

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;
export const Text2 = styled.div`
  text-align: center;
  margin: 0;
  padding: 7px 0px;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
  width: 33%;
  font-weight: 600;
  font-size: ${(props) => props.theme.textSizeTextL700};
  background-color: #f9e7ff;
  justify-content: flex-end;
  text-transform: uppercase;
  box-sizing: border-box;
  color: #000000;

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

export const Text3 = styled.div`
  text-align: center;
  flex-wrap: nowrap;
  margin: 10;
  padding: 15px 10px;
  overflow: hidden;
  width: 100%;
  font-weight: 600;
  box-sizing: border-box;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-items: center;
  font-size: ${(props) => props.theme.textSizeTextM500};
  background-color: #f9e7ff;
  justify-content: flex-end;
  text-transform: uppercase;
  box-sizing: border-box;
  color: #000000;

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.iconColor};
`;
export const IconContrainer = styled.div`
  display: flex;
  padding: 0px 20px;
  font-size: 50px;
  background-color: #f9e7ff;
  background-color: ${(props) => props.theme.iconColor};
  box-shadow: 0px 0px 15px ${(props) => props.theme.shadowColor};
  color: ${(props) => props.theme.textColor};
  &:hover {
    background-color: ${(props) => props.theme.buttonTopColor};
    color: white;
    transition: 0.1s;
  }
  &:focus {
    outline: none;
  }
  cursor: pointer;
  transition: 0.1s;
`;
