import { css } from 'styled-components';

interface standardMediaQueriesInterface {
  atTablet: number;
  atDesktop: number;
  atWidescreen: number;
}

export const standardMediaQueries: standardMediaQueriesInterface = {
  atTablet: 768,
  atDesktop: 1024,
  atWidescreen: 1440,
};

interface customMediaQueriesInterface {
  c1200: number;
  c992: number;
}

const customMediaQueries: customMediaQueriesInterface = {
  c1200: 1200,
  c992: 992,
};


interface mediaQueryBreakPointsInterface extends standardMediaQueriesInterface, customMediaQueriesInterface {};

const mediaQueryBreakPoints: mediaQueryBreakPointsInterface = {
  ...standardMediaQueries,
  ...customMediaQueries,
};

const mediaQueries: any = Object.keys(mediaQueryBreakPoints).reduce((accumulator: any, label: any) => {
  // use em in breakpoints to work properly cross-browser and support users
  const emSize: number = mediaQueryBreakPoints[label] / 16;
  return {
    ...accumulator,
    [label]: (...args: any[]) => {
      const [arg0, ...rest] = args
      return css`
        @media (min-width: ${emSize}em) {
          ${css(arg0, ...rest)};
        }
      `
    },
  }
}, {});

export default mediaQueries;
