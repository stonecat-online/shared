import { css } from 'styled-components';

const padding  = 24;
const mobileConstraint = 270 - padding;
const tabletConstraint = 841 - padding;
const desktopConstraint = 965 - padding;
const wideConstraint = 1170 - padding;

export const constraintStyles = () =>
  css`
    padding: 0 ${padding}px;
    margin: 0 auto;
    // max-width: ${mobileConstraint}px;
    ${(props) => props.theme.mq.atTablet`
        max-width: ${tabletConstraint}px;
    `}
    ${(props) => props.theme.mq.atDesktop`
        max-width: ${desktopConstraint}px; 
    `}
    ${(props) => props.theme.mq.atWidescreen`
        max-width: ${wideConstraint}px; 
    `}
  `;



  const positioning = {
      constraint: constraintStyles
  }

export default positioning;