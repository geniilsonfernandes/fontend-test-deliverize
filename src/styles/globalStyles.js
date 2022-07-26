import { createGlobalStyle } from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Roboto:wght@300;400;500;700;900&display=swap');

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  body{
    font-family: Roboto, Helvetica, sans-serif;
    font-size: 1.6rem;
  }
  input{
    font-size: 1.6rem;
    font-family: Roboto, Helvetica, sans-serif;
  }
  button{
    font-family: Roboto, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
