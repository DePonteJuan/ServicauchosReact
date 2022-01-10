import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
     a {
    text-decoration:none;
    color:black;
    } 
    ul{
      list-style-type:none;
      list-style-position: inside;

    }
`;

export default GlobalStyle;
