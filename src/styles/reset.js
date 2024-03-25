import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: initial;
  }

  body {
    background-color: #111;
    color: #f1f1f1;
  }

  button {
    background-color: transparent;
    border: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
