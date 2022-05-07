import * as React from 'react';
import StyledSVG from './ChevronSmallDown22.styles';

const ChevronSmallDown22 = (props: any) => {
  const { color } = props;
  return (
    // @ts-ignore
    <StyledSVG width="22px" height="22px" color={color}>
      <title>chevron down</title>
      <g
        id="icon/chevron-small/down/22px/blue"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group-2">
          <rect id="Rectangle" x="0" y="0" width="22" height="22"></rect>
        </g>
        <path
          d="M10.1237584,14.0820394 L12.3354436,11.5820394 L12.5134153,11.34741 C12.7091091,11.0803907 12.7483541,10.9739715 12.7506481,10.756002 C12.7535346,10.4817334 12.6940067,10.3819075 12.3718592,9.95124552 L10.1229767,7.41855922 C9.93951822,7.21216732 9.62348209,7.19357607 9.41709019,7.37703449 C9.21069829,7.56049292 9.19210703,7.87652906 9.37556546,8.08292096 L11.5977751,10.582921 L11.7076137,10.7322477 C11.7392398,10.7723753 11.7503696,10.7772031 11.7507035,10.7454782 C11.7512688,10.6917663 11.7154087,10.7498518 11.5646149,10.9459229 L9.37478368,13.4194408 C9.19181215,13.6262645 9.21114812,13.9422559 9.41797178,14.1252275 C9.62479545,14.308199 9.94078689,14.288863 10.1237584,14.0820394 Z"
          id="down-chevron-small"
          fill="#0060FF"
          transform="translate(11.000006, 10.750740) rotate(90.000000) translate(-11.000006, -10.750740) "
        ></path>
      </g>
    </StyledSVG>
  );
};

export default ChevronSmallDown22;
