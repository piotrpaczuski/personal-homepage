import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background: #FBFBFE;
    padding: 119px;
    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyle;
