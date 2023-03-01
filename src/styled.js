import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    background-color: #FBFBFE;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    /* max-width: 700px; */
    margin: 0 auto;
  }
`;

export default GlobalStyle;
