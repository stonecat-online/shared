import * as React from 'react';
import StyledSVG from './SearchClearHovered.styles';

const SearchClearHovered = (props: any) => {
  const { color = 'black' } = props;
  return (
    // @ts-ignore
    <StyledSVG width="22px" height="22px" color={color}>
      <title>icon/cross-in-circle/22px/pressed</title>
      <desc>Created with Sketch.</desc>
      <g
        id="icon/cross-in-circle/22px/pressed"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group-2">
          <rect id="Rectangle" x="0" y="0" width="22" height="22"></rect>
        </g>
        <circle id="Oval" fill="#EBF2FF" cx="11" cy="11" r="10"></circle>
        <path
          d="M7.3924142,6.69699084 L7.46165562,6.75485402 L11.001,10.294 L14.5407553,6.75485402 C14.7359956,6.55957007 15.0525781,6.55953471 15.247862,6.75477504 C15.4214478,6.92832201 15.440763,7.19774425 15.3057887,7.39262747 L15.247941,7.46188182 L11.707,11.002 L15.247941,14.5428789 C15.4431814,14.7381629 15.443146,15.0547454 15.247862,15.2499857 C15.0742763,15.4235327 14.8048498,15.4427877 14.6099967,15.3077699 L14.5407553,15.2499067 L11.001,11.709 L7.46165562,15.2499067 C7.26641529,15.4451907 6.9498328,15.445226 6.75454884,15.2499857 C6.58096311,15.0764387 6.56164787,14.8070165 6.69662215,14.6121333 L6.75446987,14.5428789 L10.294,11.002 L6.75446987,7.46188182 C6.55922953,7.26659787 6.55926489,6.95001538 6.75454884,6.75477504 C6.90643636,6.60292145 7.13170201,6.5691976 7.31618151,6.65359073 L7.3924142,6.69699084 Z"
          id="Combined-Shape"
          fill="#72747F"
          fillRule="nonzero"
        ></path>
      </g>
    </StyledSVG>
  );
};

export default SearchClearHovered;
