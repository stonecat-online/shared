import * as React from 'react';
import StyledSVG from './NoResultsBook.styles';

interface Props {}

const NoResultsBook: React.FC<Props> = () => {
  return (
    // @ts-ignore
    <StyledSVG width="64px" height="118px" viewBox="0 0 64 118">
      <title>38C30522-5764-4ED3-969B-B442E2987DA7</title>
      <defs>
        <filter
          x="-18.0%"
          y="-180.0%"
          width="136.0%"
          height="460.0%"
          filterUnits="objectBoundingBox"
          id="filter-1"
        >
          <feGaussianBlur stdDeviation="3" in="SourceGraphic"></feGaussianBlur>
        </filter>
      </defs>
      <g id="Component" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="00-no-results-v01-(desktop)" transform="translate(-608.000000, -584.000000)">
          <g id="Group-3" transform="translate(609.000000, 585.000000)">
            <ellipse
              id="Oval"
              fill="#0060FF"
              opacity="0.082781"
              filter="url(#filter-1)"
              cx="30.5"
              cy="107.5"
              rx="25"
              ry="2.5"
            ></ellipse>
            <g id="Group-2">
              <path
                d="M6.5,10 L57.5,10 C59.709139,10 61.5,11.790861 61.5,14 L61.5,86 C61.5,88.209139 59.709139,90 57.5,90 L6.5,90 L6.5,90 L6.5,10 Z"
                id="Rectangle"
                stroke="#0060FF"
                strokeWidth="2"
              ></path>
              <path
                d="M5.5,0 C2.73857625,0 0.5,2.23857625 0.5,5 C0.5,7.76142375 2.73857625,10 5.5,10"
                id="Path"
                stroke="#0060FF"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5,85 C0.5,87.7614237 2.73857625,90 5.5,90"
                id="Path"
                stroke="#0060FF"
                strokeWidth="2"
              ></path>
              <line
                x1="0.5"
                y1="85"
                x2="0.5"
                y2="5"
                id="Path-8"
                stroke="#0060FF"
                strokeWidth="2"
              ></line>
              <path
                d="M5.5,0 L50.378946,0 C52.588085,-4.33003142e-15 54.378946,1.790861 54.378946,4 L54.378946,10 L54.378946,10"
                id="Path-9"
                stroke="#0060FF"
                strokeWidth="2"
              ></path>
              <path
                d="M42.5,10 L42.5,20.7928932 C42.5,21.0690356 42.7238576,21.2928932 43,21.2928932 C43.1326082,21.2928932 43.2597852,21.2402148 43.3535534,21.1464466 L46.1464466,18.3535534 C46.3417088,18.1582912 46.6582912,18.1582912 46.8535534,18.3535534 L49.6464466,21.1464466 C49.8417088,21.3417088 50.1582912,21.3417088 50.3535534,21.1464466 C50.4473216,21.0526784 50.5,20.9255015 50.5,20.7928932 L50.5,10 L50.5,10 L42.5,10 Z"
                id="Path-10"
                stroke="#0060FF"
                strokeWidth="2"
              ></path>
              <circle id="Oval" fill="#0060FF" cx="28" cy="31.5" r="1.5"></circle>
              <circle id="Oval-Copy" fill="#0060FF" cx="39" cy="31.5" r="1.5"></circle>
              <path
                d="M43.5,45 C41.2151829,42.512096 37.6441461,41 34,41 C30.3594791,41 26.7845214,42.5164171 24.5,45"
                id="Path"
                stroke="#0060FF"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </StyledSVG>
  );
};

export default NoResultsBook;
