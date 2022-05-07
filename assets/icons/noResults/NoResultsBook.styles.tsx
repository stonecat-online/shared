import { ComponentProps } from 'react';
import styled, { StyledFunction } from 'styled-components';

const svg: StyledFunction<ComponentProps<any> & React.HTMLProps<HTMLInputElement>> = styled.svg;

const StyledSVG = svg`
  position: inline-block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export default StyledSVG;
