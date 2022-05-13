import { css } from "styled-components";

export const standardMediaQueries = {
  atTablet: 768,
  atDesktop: 1024,
  atWidescreen: 1440,
};

const customMediaQueries = {
  c1200: 1200,
  c992: 992,
};

const mediaQueryBreakPoints = {
  ...standardMediaQueries,
  ...customMediaQueries,
};

const mediaQueries = Object.keys(mediaQueryBreakPoints).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    const emSize = mediaQueryBreakPoints[label] / 16;
    return {
      ...accumulator,
      [label]: (...args) => {
        const [arg0, ...rest] = args;
        return css`
          @media (min-width: ${emSize}em) {
            ${css(arg0, ...rest)};
          }
        `;
      },
    };
  },
  {}
);

export default mediaQueries;
