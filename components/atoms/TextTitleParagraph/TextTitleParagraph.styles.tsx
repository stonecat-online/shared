import { ComponentProps, HTMLProps } from 'react'
import styled, { StyledFunction } from 'styled-components';

const div: StyledFunction<ComponentProps<any> & HTMLProps<HTMLInputElement>> = styled.div;

const Wrapper = div`
    & > h2 {
        ${({ theme }) => theme.text.h1RegQuadraat};
        color: ${({ theme }) => theme.colours.offBlack};
        text-align: left;
        font-weight: 400;
        max-width: 200px;
    }
    & > p {
        ${({ theme }) => theme.text.BodyMRegularManrope};
        color: ${({ theme }) => theme.colours.offBlack};
        text-align: left;
        max-width: 300px;

    }
    & > a {
        ${({ theme }) => theme.text.BodyMRegularManrope};
        color: ${({ theme }) => theme.colours.offBlack};
        text-align: left;
        text-decoration: underline;
        display: inherit;
        max-width: 200px;

    }
    
    `;

export default Wrapper;