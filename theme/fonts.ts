import { createGlobalStyle } from 'styled-components';
import ManropeVariable from '../assets/fonts/manrope';
import LibreBaskervilleWoff from '../assets/fonts/librebaskerville-regular-webfont.woff';
import LibreBaskervilleWoff2 from '../assets/fonts/librebaskerville-regular-webfont.woff2';

interface fontFamilyNamesInterface {
  ManropeVar: string;
  LibreBaskervilleVar: string;
};

export const fontFamilyNames: fontFamilyNamesInterface = {
  ManropeVar: '"Manrope"';
  LibreBaskervilleVar: '"Libre Baskerville"';
};

const fontFamilies: string = `
  @font-face {
    font-family: "Manrope";
    font-weight: 400;
    src: 
      url(${ManropeVariable}) format("ttf");
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: "Libre Baskerville";
    src: local('Libre Baskerville'), local('Libre Baskerville'),
    src: 
    url(${LibreBaskervilleWoff2}) format('woff2');
    url(${LibreBaskervilleWoff}) format('woff');
    font-style: normal;
    font-stretch: normal;
  }         
`;

export const GlobalFonts = createGlobalStyle`
  ${fontFamilies} 
`;



export default fontFamilies;
