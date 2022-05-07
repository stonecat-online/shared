import { ComponentProps, HTMLProps } from "react";
import styled, { StyledFunction } from "styled-components";

export const Wrapper = styled.div`
  // position: relative;
  // border: 1px solid ${({ theme }) => theme.colours.lighterGrey};
  // border-radius: 50%;

  & .circle-wrapper {
    position: relative;
    transform: rotate(270deg) scaleX(-1);
    width: 300px;
    height: 300px;
  }

  & .background-circle {
    position: relative;
    stroke: #e5e5e5;
    stroke-width: 0.5;
  }

  & .progress-circle {
    position: relative;
    stroke: #e5e5e5;
    stroke-width: 1.5;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
`;

export const Number = div`
        font-family: "Libre Baskerville";
        font-weight 100;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${({ theme }) => theme.colours.lighterGrey};
        font-size: 140px;
    `;
