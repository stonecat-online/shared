import { ComponentProps } from 'react';
import styled, { StyledFunction } from 'styled-components';

const svg: StyledFunction<ComponentProps<any> & React.HTMLProps<HTMLInputElement>> = styled.svg;

const StyledSVG = svg`
  position: inline-block;
  width: ${({ width }): string => width};
  height: ${({ height }): string => height};
  viewBox:0 0 22 22;
  version:1.1;

  & path {
    fill:  ${({ theme, color }): string => {
      if (color === 'disabled') {
        return theme.colours.grey3;
      }
      if (color === 'secondary') {
        return theme.colours.secondaryColour;
      }
      return theme.colours[color];
    }};
  }

`;

export default StyledSVG;
