import { css, FlattenInterpolation, ThemeProps } from 'styled-components';

const padding: number  = 24;
const mobileConstraint: number = 270 - padding;
const tabletConstraint: number = 841 - padding;
const desktopConstraint: number = 965 - padding;
const wideConstraint: number = 1170 - padding;

export const constraintStyles = (): FlattenInterpolation<ThemeProps<any>> =>
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

  interface positioningInterface {
    constraint: any;
    }

  const positioning: positioningInterface = {
      constraint: constraintStyles
  }

export default positioning;