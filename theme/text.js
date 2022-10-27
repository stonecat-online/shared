import { css } from "styled-components";
import mediaQueries from "./mediaQueries";
import { fontFamilyNames } from "./fonts";

const { ManropeVar, LibreBaskervilleVar } = fontFamilyNames;

// New Text Styling

const h2Base = {
  fontSize: "1.75rem",
  lineHeight: "2.25rem",
  letterSpacing: "0.025rem",
  mq: {
    atTablet: {
      fontSize: "2.25rem",
      lineHeight: "3rem",
      letterSpacing: "0.025rem",
    },
    atDesktop: {
      fontSize: "3rem",
      lineHeight: "4rem",
      letterSpacing: "0.03125rem",
    },
  },
};

const H2Base = {
  fontSize: "1.625rem",
  lineHeight: "2.1875rem",
  letterSpacing: "0.0125rem",
  mq: {
    atTablet: {
      fontSize: "2.125rem",
      lineHeight: "3rem",
      letterSpacing: "0.025rem",
    },
    atDesktop: {
      fontSize: "2.8125rem",
      lineHeight: "4rem",
      letterSpacing: "0.0375rem",
    },
  },
};

const BodyLBase = {
  fontSize: "1rem",
  lineHeight: "1.5625rem",
  letterSpacing: "0.00625rem",
  mq: {
    atTablet: {
      fontSize: "1rem",
      lineHeight: "1.6875rem",
      letterSpacing: "0.0125rem",
    },
    atDesktop: {
      fontSize: "1rem",
      lineHeight: "1.6875rem",
      letterSpacing: "0.0125rem",
    },
  },
};

const BodyMBase = {
  fontSize: "0.875rem",
  lineHeight: "1.4375rem",
  letterSpacing: "0.00625rem",
  mq: {
    atTablet: {
      fontSize: "1rem",
      lineHeight: "1.5625rem",
      letterSpacing: "0.00625rem",
    },
    atDesktop: {
      fontSize: "1rem",
      lineHeight: "1.5625rem",
      letterSpacing: "0.00625rem",
    },
  },
};

const standardTextStyles = {
  h2RegManrope: {
    ...h2Base,
    fontFamily: ManropeVar,
    fontWeight: "700",
  },
  h2RegManrope: {
    ...H2Base,
    fontFamily: ManropeVar,
    fontWeight: "400",
  },
  BodyLRegularManrope: {
    ...BodyLBase,
    fontFamily: ManropeVar,
    fontWeight: "400",
  },
  BodyMRegularManrope: {
    ...BodyMBase,
    fontFamily: ManropeVar,
    fontWeight: "400",
  },
  h2RegQuadraat: {
    ...h2Base,
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
const customTextStyles = {
  cus1: {
    ...BodyLBase,
    fontFamily: ManropeVar,
  },
};

const textStyles = {
  ...customTextStyles,
  ...standardTextStyles,
};

const generateTextMediaQueries = (textStyleMediaQueries) =>
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

const text = Object.keys(textStyles).reduce((accum, label) => {
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
