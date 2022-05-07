import * as React from 'react';
import StyledSVG from './Hamburger32.styles';

const Hamburger32 = (props: any) => {
  const { color = 'black' } = props;
  return (
    // @ts-ignore
    <StyledSVG width="32px" height="32px" color={color}>
      <title>icon/hamburger-menu/32px/black</title>
      <desc>Created with Sketch.</desc>
      <g
        id="icon/hamburger-menu/32px/black"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group-2">
          <rect id="Rectangle" x="0" y="0" width="32" height="32"></rect>
        </g>
        <path
          d="M25,21 C25.5522847,21 26,21.4477153 26,22 C26,22.5522847 25.5522847,23 25,23 L25,23 L7,23 C6.44771525,23 6,22.5522847 6,22 C6,21.4477153 6.44771525,21 7,21 L7,21 Z M25,15 C25.5522847,15 26,15.4477153 26,16 C26,16.5522847 25.5522847,17 25,17 L25,17 L7,17 C6.44771525,17 6,16.5522847 6,16 C6,15.4477153 6.44771525,15 7,15 L7,15 Z M25,9 C25.5522847,9 26,9.44771525 26,10 C26,10.5522847 25.5522847,11 25,11 L25,11 L7,11 C6.44771525,11 6,10.5522847 6,10 C6,9.44771525 6.44771525,9 7,9 L7,9 Z"
          id="hamburger-menu"
          fill="#191919"
        ></path>
      </g>
    </StyledSVG>
  );
};

export default Hamburger32;
