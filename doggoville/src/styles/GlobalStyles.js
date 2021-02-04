import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --lime: #6fffb0;
    --purple: #7d4cdb;
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }
  html {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
`;

export default GlobalStyles;
