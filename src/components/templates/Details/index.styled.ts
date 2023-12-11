import styled from "styled-components";

export const Details = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 0 0 auto;
  justify-content: center;
  background-color: ${(props) => props.theme.bachgroundColor};
  transition: 0.1s;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  padding: 0px 20px;
  margin: 0px 0px;
  box-sizing: border-box;
  z-index: 1;
  @media (min-width: 1200px) {
    width: 1200px;
  }
  @media (max-width: 1200px) and (min-width: 992px) {
    width: 100%;
  }
  @media (max-width: 992px) and (min-width: 768px) {
    padding: 0px 20px;
    margin: 0px 0px;
    width: 100%;
  }
  @media (max-width: 768px) and (min-width: 576px) {
    padding: 0px 20px;
    margin: 0px 0px;
    width: 100%;
  }
  @media (max-width: 576px) {
    padding: 0px 20px;
    margin: 0px 0px;
    width: 100%;
  }
`;
export const ContentTitle = styled.span`
  letter-spacing: 1px;
  font-weight: 500;
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  margin: 50px 100px;
  align-items: center;
  font-size: 50px;
  @media (max-width: 768px) and (min-width: 576px) {
    font-size: 30px;
    letter-spacing: 0px;
  }
  @media (max-width: 576px) {
    font-size: 20px;
    letter-spacing: 0px;
    margin: 50px 70px;
  }
  & a {
    font-family: Roboto;
    font-size: ${(props) => props.theme.textSizeTitle};
    font-weight: 500;
    letter-spacing: 1px;
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      color: ${(props) => props.theme.textColor};
    }
  }
`;

export const Data = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-self: center;
  grid-template-columns: 0.5fr 2fr;
  grid-gap: 20px;
  border-top: 1px solid ${(props) => props.theme.accentColor1};
  border-bottom: 1px solid ${(props) => props.theme.accentColor1};
  padding: 20px 0px;
  box-sizing: border-box;
  @media (min-width: 1200px) {
  }
  @media (max-width: 1200px) and (min-width: 992px) {
  }
  @media (max-width: 992px) and (min-width: 768px) {
  }
  @media (max-width: 768px) and (min-width: 576px) {
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 600px;
  object-fit: cover;
  opacity: 0.7;
`;

export const Image = styled.div`
  display: flex;
  width: 50%;
  height: 50%;
  align-items: center;
  align-self: center;
  margin: 50px 0px 50px 0px;
`;
export const Img = styled.img`
  aspect-ratio: 1/1/10;
  display: flex;
  width: 100%;
  object-fit: cover;
  box-sizing: border-box;
  transition: 0.5s;
  box-shadow: 0px 3px 5px ${(props) => props.theme.shadowColor};
  margin: 0px 0px 20px 0px;
`;

export const Buttons = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: 768px) and (min-width: 576px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.a`
  cursor: pointer;
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textColor};
  background-color: aqua;
  border: 0px;
  border-radius: 10px;
  font-size: ${(props) => props.theme.textSizeTextM};
  &:hover {
    opacity: 0.9;
  }
`;
export const DownloadButton = styled(Button)`
  background-color: ${(props) => props.theme.iconColor};
`;
export const WatchButton = styled(Button)`
  background-color: ${(props) => props.theme.iconColor};
`;

export const Description = styled.div`
  display: flex-grip;
  align-items: center;
  display: block;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 50px;
  height: 100px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.textSizeTitle};
  letter-spacing: 1px;
  font-weight: 500;
`;

export const Year = styled.div`
  display: flex;
  width: 96%;
  flex: 0 0 auto;
  font-weight: 600;
  margin-bottom: 50px;
  background-color: ${(props) => props.theme.iconColor};
  box-shadow: 0px 0px 5px ${(props) => props.theme.shadowColor};
  border-radius: 20px;
  padding: 8px 20px 8px 20px;
  align-items: center;
  justify-content: center;

  font-size: ${(props) => props.theme.textSizeTextL};
  color: ${(props) => props.theme.textColor};
`;
export const DescriptionFull = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${(props) => props.theme.textSizeTextM};
  line-height: 25px;
  letter-spacing: 1px;
`;
export const Genres = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.textSizeTextM};
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10%;
  }
`;

export const Statistic = styled.div`
  display: flex;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 300px;
  @media (max-width: 1008px) and (min-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 150px;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
  }
`;
export const TorrentsTitle = styled.div`
  display: flex;
  width: 100%;
  flex: 0 0 auto;
  font-weight: 600;
  margin-top: 10px;
  font-size: ${(props) => props.theme.textSizeTextL};
  color: ${(props) => props.theme.textColor};
`;

export const Torrents = styled.div`
  display: flex;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`;

export const CommentSection = styled.div`
  margin: 15px;
  margin-bottom: 24px;
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const UserNameInput = styled.input`
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-size: ${(props) => props.theme.textSizeTextL700};
`;

export const CommentTextarea = styled.textarea`
  margin-bottom: 8px;
  border-radius: 4px;
  resize: none;
`;

export const CommentSubmitButton = styled.button`
  background-color: #fae0fd;
  width: auto;
  color: #000;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: 1px;
  font-weight: 600;
  font-family: Roboto;
  font-size: ${(props) => props.theme.textSizeTextM};
  margin: 0 auto;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fae0fd;
    scale: 1.05;
  }
`;

export const CommentText = styled.ul`
  font-weight: 500;
  list-style: none;
  padding: 0;
  font-size: ${(props) => props.theme.textSizeTextL700};
`;

export const CommentItem = styled.div`
  background-color: ${(props) => props.theme.CardColor};
  padding: 8px 20px 8px 20px;
  margin-bottom: 8px;
  border-radius: 4px;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
export const TextArea = styled.textarea`
  width: 99.5%;
  border: 1px solid #ccc;
  margin-bottom: 8px;
`;

export const UserCommentsText = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.textSizeTitle};
  letter-spacing: 1px;
  font-weight: 700;
  width: 100%;
  justify-content: start;
  margin: 30px 0px 30px 0px;
  text-align: start;
`;
