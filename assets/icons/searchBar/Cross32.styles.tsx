import { ComponentProps } from 'react';
import styled, { StyledFunction } from 'styled-components';

const svg: StyledFunction<ComponentProps<any> & React.HTMLProps<HTMLInputElement>> = styled.svg;

const StyledSVG = svg`
  position: inline-block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  viewBox:0 0 32 32;
  version:1.1;

  & path {
    fill:  ${({ theme, color }) => {
      if (color === 'disabled') {
        return theme.colours.grey3;
      } else if (color === 'secondary') {
        return theme.colours.secondaryColour;
      } else {
        return theme.colours[color];
      }
    }};
  }

`;

export default StyledSVG;
