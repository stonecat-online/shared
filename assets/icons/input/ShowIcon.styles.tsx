import { ComponentProps } from 'react';
import styled, { StyledFunction } from 'styled-components';

const svg: StyledFunction<ComponentProps<any> & React.HTMLProps<HTMLInputElement>> = styled.svg;

const StyledSVG = svg`
    width: 100%;
    height: 100%;

    #hide_blue > path {
        fill: #d85040;
    }
`;

export default StyledSVG;
