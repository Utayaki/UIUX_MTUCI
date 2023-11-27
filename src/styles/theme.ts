import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  backgroundColor: "#1F2023",
  textColor: "#25F5F5",
  infoIconColor: "#2D2F34",
  iconColor: "#27292D",
  accentColor1: `rgb(106,192,69)`,
  accentColor2: "#00c6ff",
  shadowColor: "rgba(0,0,0,0.2)",
  buttonTopColor: "#002415",
  imageBehindHeader:
    "https://img.freepik.com/premium-vector/cute-small-black-checkers-gingham-plaid-checkerboard-with-cute-little-white-heart-background-illustration-perfect-banner-wallpaper-backdrop-postcard-background_565280-845.jpg",
  imageBehindFilms: "https://wallpapercave.com/wp/wp6498726.jpg",

  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const lightTheme = {
  backgroundColor: "white",
  textColor: "black",
  infoIconColor: "#FAFAFA",
  iconColor: "white",
  accentColor1: `rgb(106,192,69)`,
  accentColor2: "#00c6ff",
  shadowColor: "rgba(0,0,0,0.2)",
  buttonTopColor: "#60d5ff",
  imageBehindHeader:
    "https://wallpapers.com/images/hd/pastel-cute-background-gnzi7pcq1sm9vpxk.jpg",
  imageBehindFilms:
    "https://wallpapers.com/images/hd/pastel-cute-background-gnzi7pcq1sm9vpxk.jpg",

  textSizeTitle: "25px",
  textSizeTitle100: "8px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const GlobalStyle = createGlobalStyle`
  a{
    font-family: 'Roboto';
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
  body{
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    background-image: url(${(props) => props.theme.imageBehindFilms});
    transition: 0.1s;
    background-position: center;
    color: ${(props) => props.theme.textColor};
  }
`;
