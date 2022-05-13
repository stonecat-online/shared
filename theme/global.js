import { createGlobalStyle } from "styled-components";
import InterR from "./../assets/fonts/Inter-Regular.woff2";
import InterB from "./../assets/fonts/Inter-Bold.woff2";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  @font-face {
    font-family: "Inter";
    src: url(${InterR});
  }
  @font-face {
    font-family: "Inter-Bold";
    src: url(${InterB});
    font-weight: bold;
  }

  :root {
    --ff1: Inter;
    --ff2: Inter-Bold;
    --h1: 2.5rem;
    --h2: 1.5rem;
    --b1: 1.125rem;
    --b2: 0.875rem;
    --cprimary: #fff;
    --csecondary: #000;
    --bg-color: #fff;
    --cgrey: #D4D4D4;
    --csilver: #F6F6F6;
    --bradius: 1rem;


    box-sizing: border-box;
  }

  [data-theme="dark"] {
    --cprimary: #000;
    --csecondary: #fff;
    --bg-color:  #000;

  }

  h1 {
    font-family: var(--ff2);
    font-size: var(--h1);
    margin-left: 0;
  }

  h2 {
    font-family: var(--ff1);
    font-size: var(--h2);
  }

  p {
    font-family: var(--ff1);
    font-size: var(--b1);
  }

  small {
    font-family: var(--ff2);
    font-size: var(--b2);
  }

  h1,
  h2 {
    padding: 0px;
    margin: 0px;
  }
`;
