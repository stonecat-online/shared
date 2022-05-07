import * as React from 'react';
import StyledSVG from './Search32.styles';

const Search32 = (props: any) => {
  const { color = 'black' } = props;
  return (
    // @ts-ignore
    <StyledSVG width="32px" height="32px" color={color}>
      <title>icon/search/32px/grey4 </title>
      <desc>Created with Sketch.</desc>
      <g id="icon/search/32px/grey4-" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Group-2">
          <rect id="Rectangle" x="0" y="0" width="32" height="32"></rect>
        </g>
        <path
          d="M14,5 C18.9705627,5 23,9.02943725 23,14 C23,16.124779 22.2636898,18.0775836 21.0323074,19.6171757 L26.7071068,25.2928932 C27.0976311,25.6834175 27.0976311,26.3165825 26.7071068,26.7071068 C26.3165825,27.0976311 25.6834175,27.0976311 25.2928932,26.7071068 L25.2928932,26.7071068 L19.6171757,21.0323074 C18.0775836,22.2636898 16.124779,23 14,23 C9.02943725,23 5,18.9705627 5,14 C5,9.02943725 9.02943725,5 14,5 Z M14,7 C10.1340068,7 7,10.1340068 7,14 C7,17.8659932 10.1340068,21 14,21 C17.8659932,21 21,17.8659932 21,14 C21,10.1340068 17.8659932,7 14,7 Z"
          id="Combined-Shape"
          fill="#9FA1A8"
        ></path>
      </g>
    </StyledSVG>
  );
};

export default Search32;
