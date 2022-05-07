import * as React from 'react';
import StyledSVG from './ChevronDown22.styles';

interface Props {
  color?: string;
}

const Search22: React.FC<Props> = ({ color = 'grey5' }) => {
  return (
    // @ts-ignore
    <StyledSVG width="22px" height="22px" color={color}>
      <title>chevron-down</title>
      <desc>Created with Sketch.</desc>
      <g
        id="icon/chevron/down/22px/grey5"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Group-2">
          <rect id="Rectangle" x="0" y="0" width="22" height="22"></rect>
        </g>
        <path
          d="M15.1678234,9.1263007 C15.3742148,8.94284169 15.690251,8.96143205 15.87371,9.16782344 C16.0367847,9.35128244 16.0402154,9.62137438 15.8940093,9.80797901 L15.8321873,9.87371002 L11.3321873,13.87371 C11.1664246,14.0210546 10.9271354,14.0394726 10.7429911,13.9289642 L10.6678234,13.87371 L6.16782344,9.87371002 C5.96143205,9.69025101 5.94284169,9.37421482 6.1263007,9.16782344 C6.28937537,8.98436443 6.55720238,8.94929141 6.75966149,9.07261146 L6.83218728,9.1263007 L11,12.8300054 L15.1678234,9.1263007 Z"
          id="down-chevron"
          fill="#72747F"
          transform="translate(11.000005, 11.500003) rotate(-360.000000) translate(-11.000005, -11.500003) "
        ></path>
      </g>
    </StyledSVG>
  );
};

export default Search22;
