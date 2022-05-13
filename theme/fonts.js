import { createGlobalStyle } from "styled-components";

export const fontFamilyNames = {
  ManropeVar: '" "',
  LibreBaskervilleVar: '" "',
};

const fontFamilies = `
  @font-face {
    font-family: "Manrope";
    font-weight: 400;
    src: 
      url() format("ttf");
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: "Libre Baskerville";
    src: local('Libre Baskerville'), local('Libre Baskerville'),
    src: 
    url() format('woff2');
    url() format('woff');
    font-style: normal;
    font-stretch: normal;
  }         
`;

export const GlobalFonts = createGlobalStyle`
  ${fontFamilies} 
`;

export default fontFamilies;
