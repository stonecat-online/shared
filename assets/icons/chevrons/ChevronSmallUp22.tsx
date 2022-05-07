import * as React from 'react';
import StyledSVG from './ChevronSmallUp22.styles';

const ChevronSmallUp22 = (props: any) => {
  const { color } = props;
  return (
    // @ts-ignore
    <StyledSVG width="22px" height="22px" color={color}>
      <title>chevron up</title>
      <g
        id="icon/chevron-small/up/22px/blue"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group-2">
          <rect id="Rectangle" x="0" y="0" width="22" height="22"></rect>
        </g>
        <path
          d="M10.1237584,14.3312993 L12.3354436,11.8312993 L12.5134153,11.5966699 C12.7091091,11.3296506 12.7483541,11.2232314 12.7506481,11.0052619 C12.7535346,10.7309933 12.6940067,10.6311675 12.3718592,10.2005054 L10.1229767,7.66781913 C9.93951822,7.46142723 9.62348209,7.44283598 9.41709019,7.6262944 C9.21069829,7.80975283 9.19210703,8.12578897 9.37556546,8.33218087 L11.5977751,10.8321809 L11.7076137,10.9815076 C11.7392398,11.0216352 11.7503696,11.026463 11.7507035,10.9947381 C11.7512688,10.9410262 11.7154087,10.9991117 11.5646149,11.1951828 L9.37478368,13.6687007 C9.19181215,13.8755244 9.21114812,14.1915158 9.41797178,14.3744874 C9.62479545,14.5574589 9.94078689,14.5381229 10.1237584,14.3312993 Z"
          id="up-chevron-small"
          fill="#0060FF"
          transform="translate(11.000006, 11.000000) rotate(-90.000000) translate(-11.000006, -11.000000) "
        ></path>
      </g>
    </StyledSVG>
  );
};

export default ChevronSmallUp22;
