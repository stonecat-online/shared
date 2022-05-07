import * as React from 'react';
import StyledSVG from './Search22.styles';

const Search22 = (props: any) => {
  const { color = 'grey5' } = props;
  return (
    // @ts-ignore
    <StyledSVG width="22px" height="22px" color={color}>
      <title>icon/search/22px/black</title>
      <desc>Created with Sketch.</desc>
      <g id="icon/search/22px/black" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Group-2">
          <rect id="Rectangle" x="0" y="0" width="22" height="22"></rect>
        </g>
        <path
          d="M9.5,3 C13.0898509,3 16,5.91014913 16,9.5 C16,11.1148687 15.4111063,12.592194 14.4363556,13.7289391 L18.3535534,17.6464466 C18.5488155,17.8417088 18.5488155,18.1582912 18.3535534,18.3535534 C18.1582912,18.5488155 17.8417088,18.5488155 17.6464466,18.3535534 L17.6464466,18.3535534 L13.7289391,14.4363556 C12.592194,15.4111063 11.1148687,16 9.5,16 C5.91014913,16 3,13.0898509 3,9.5 C3,5.91014913 5.91014913,3 9.5,3 Z M9.5,4 C6.46243388,4 4,6.46243388 4,9.5 C4,12.5375661 6.46243388,15 9.5,15 C12.5375661,15 15,12.5375661 15,9.5 C15,6.46243388 12.5375661,4 9.5,4 Z"
          id="search"
          fill="#191919"
        ></path>
      </g>
    </StyledSVG>
  );
};

export default Search22;
