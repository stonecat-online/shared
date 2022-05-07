import * as React from 'react';
import StyledSVG from './ChevronPrimaryRight.styles';

const ChevronPrimaryRight = (props: any) => {
  const { color } = props;
  return (
    // @ts-ignore
    <StyledSVG width="32px" height="32px" color={color}>
      <title>chevron right</title>
      <g
        id="icon/right-chevron/32px/blue"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group-2">
          <rect id="Rectangle" x="0" y="0" width="32" height="32"></rect>
        </g>
        <path
          id="iconPath"
          d="M18.7141279,15.9999998 L11.2990901,23.2867502 C10.9051731,23.6738521 10.8996483,24.306993 11.2867502,24.7009099 C11.6738521,25.0948269 12.306993,25.1003517 12.7009099,24.7132498 L20.332951,17.2132498 C21.2305153,16.3283949 21.2305153,15.6842607 20.3391479,14.7928932 L12.7009099,7.28675021 C12.306993,6.89964834 11.6738521,6.90517308 11.2867502,7.29909006 C10.8996483,7.69300705 10.9051731,8.32614792 11.2990901,8.71324979 L18.7141279,15.9999998 Z"
          fill-rule="nonzero"
        ></path>
      </g>
    </StyledSVG>
  );
};

export default ChevronPrimaryRight;
