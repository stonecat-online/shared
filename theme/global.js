import { createGlobalStyle } from "styled-components";
const InterR = "/fonts/Inter-Regular.woff2";
const GreyCliffB = "/fonts/greycliff-bold.woff2";

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
    font-family: "Greycliff";
    src: url(${GreyCliffB});
    font-weight: bold;
  }

  :root {
    --ff1: Inter;
    --ff2: Greycliff;
    --h1: 5rem;
    --h1m: 3.75rem;
    --h2: 3rem;
    --h2m: 2.5rem;
    --h3: 2rem;
    --h3m: 1.75rem;
    --h4: 1.5rem;
    --b1: 1.5rem;
    --b2: 1.2rem;
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
    font-size: var(--h1m);
    margin: 1.5rem 0;
    line-height: 1.1;
  }

  @media only screen and (min-width: 768px) {
     h1 {
      font-size: var(--h1);
    }
  }

  h2 {
    font-family: var(--ff2);
    font-size: var(--h2m);
    margin: 1.2rem 0;
  }

  @media only screen and (min-width: 768px) {
     h2 {
      font-size: var(--h2);
    }
  }

  h3 {
    font-family: var(--ff2);
    font-size: var(--h3m);
    margin: 1rem 0;
  }

  @media only screen and (min-width: 768px) {
     h3 {
      font-size: var(--h3);
    }
  }

  h4 {
    font-family: var(--ff1);
    font-size: var(--h3);
    margin-bottom: .5rem;
  }

  h5 {
    color: var(--grey);
    font-family: var(--ff1);
    font-size: var(--b2);
    margin-bottom: .75rem 0;
  }

  p {
    font-family: var(--ff1);
    font-size: var(--b1);
    padding: 0;
    margin-bottom: .75rem 0;
  }

  small {
    display: block;
    font-family: var(--ff1);
    font-size: var(--b2);
    padding: 0;
    margin: .5rem 0;
  }

`;
