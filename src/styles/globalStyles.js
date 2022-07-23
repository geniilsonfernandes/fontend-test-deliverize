import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  body{
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }
  input{
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
  }
  button{
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
