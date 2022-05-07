import { css } from 'styled-components';
import mediaQueries from './mediaQueries';
import { fontFamilyNames } from './fonts';

const { ManropeVar, LibreBaskervilleVar } = fontFamilyNames;

// New Text Styling

interface fontTypeInterface {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  mq: {
    atTablet: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    },
    atDesktop: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    }
  }
}

const H1Base: fontTypeInterface = {
  fontSize: '1.75rem',
  lineHeight: '2.25rem',
  letterSpacing: '0.025rem',
  mq: {
    atTablet: {
      fontSize: '2.25rem',
      lineHeight: '3rem',
      letterSpacing: '0.025rem'
    },
    atDesktop: {
      fontSize: '3rem',
      lineHeight: '4rem',
      letterSpacing: '0.03125rem'
    }
  }
};

const H2Base: fontTypeInterface = {
  fontSize: '1.625rem',
  lineHeight: '2.1875rem',
  letterSpacing: '0.0125rem',
  mq: {
    atTablet: {
      fontSize: '2.125rem',
      lineHeight: '3rem',
      letterSpacing: '0.025rem'
    },
    atDesktop: {
      fontSize: '2.8125rem',
      lineHeight: '4rem',
      letterSpacing: '0.0375rem'
    }
  }
};


const BodyLBase: fontTypeInterface = {
  fontSize: '1rem',
  lineHeight: '1.5625rem',
  letterSpacing: '0.00625rem',
  mq: {
    atTablet: {
      fontSize: '1rem',
      lineHeight: '1.6875rem',
      letterSpacing: '0.0125rem'
    },
    atDesktop: {
      fontSize: '1rem',
      lineHeight: '1.6875rem',
      letterSpacing: '0.0125rem'
    }
  }
};

const BodyMBase: fontTypeInterface = {
  fontSize: '0.875rem',
  lineHeight: '1.4375rem',
  letterSpacing: '0.00625rem',
  mq: {
    atTablet: {
      fontSize: '1rem',
      lineHeight: '1.5625rem',
      letterSpacing: '0.00625rem'
    },
    atDesktop: {
      fontSize: '1rem',
      lineHeight: '1.5625rem',
      letterSpacing: '0.00625rem'
    }
  }
};

const standardTextStyles: object = {
  h1RegManrope: {
    ...H1Base,
    fontFamily: ManropeVar,
    fontWeight: '700'
  },
  h2RegManrope: {
    ...H2Base,
    fontFamily: ManropeVar,
    fontWeight: '400'
  },
  BodyLRegularManrope: {
    ...BodyLBase,
    fontFamily: ManropeVar,
    fontWeight: '400'
  },
  BodyMRegularManrope: {
    ...BodyMBase,
    fontFamily: ManropeVar,
    fontWeight: '400'
  },
  h1RegQuadraat: {
    ...H1Base,
    fontFamily: LibreBaskervilleVar,
  },
  h2RegQuadraat: {
    ...H2Base,
    fontFamily: LibreBaskervilleVar,
  },
  BodyLRegularQuadraat: {
    ...BodyLBase,
    fontFamily: LibreBaskervilleVar,
  },
  BodyMRegularQuadraat: {
    ...BodyMBase,
    fontFamily: LibreBaskervilleVar,
  },

};

//
// Custom Text Styling
//
const customTextStyles: object = {
  cus1: {
    ...BodyLBase,
    fontFamily: ManropeVar
  },

};

const textStyles: object = {
  ...customTextStyles,
  ...standardTextStyles
};

const generateTextMediaQueries = (textStyleMediaQueries: any): any =>
  css`
    ${() => mediaQueries.atTablet`
    font-size: ${textStyleMediaQueries.atTablet.fontSize};
    line-height: ${textStyleMediaQueries.atTablet.lineHeight};
    letter-spacing: ${textStyleMediaQueries.atTablet.letterSpacing};
  `}
    ${() => mediaQueries.atDesktop`
    font-size: ${textStyleMediaQueries.atDesktop.fontSize};
    line-height: ${textStyleMediaQueries.atDesktop.lineHeight};
    letter-spacing: ${textStyleMediaQueries.atDesktop.letterSpacing};
  `}
  `;

const text: object = Object.keys(textStyles).reduce((accum, label) => {
  const textCss = () => css`
    font-family: ${textStyles[label].fontFamily};
    font-size: ${textStyles[label].fontSize};
    line-height: ${textStyles[label].lineHeight};
    letter-spacing: ${textStyles[label].letterSpacing};
    font-weight: ${textStyles[label].fontWeight};
    font-style: ${textStyles[label].fontStyle};
    ${generateTextMediaQueries(textStyles[label].mq)}
  `;
  return { ...accum, [label]: textCss };
}, {});

export default text;
