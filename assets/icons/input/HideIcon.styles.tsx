import { ComponentProps } from 'react';
import styled, { StyledFunction } from 'styled-components';

const svg: StyledFunction<ComponentProps<any> & React.HTMLProps<HTMLInputElement>> = styled.svg;

const StyledSVG = svg`
    width: 100%;
    height: 100%;
    fill: #DA4567;

    #theshape {
        fill: #9FA1A8;
    }

   
`;

export default StyledSVG;
