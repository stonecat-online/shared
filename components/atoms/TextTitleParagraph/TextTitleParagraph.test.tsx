import * as React from "react";
import { create } from "react-test-renderer";
import { ThemeProvider } from 'styled-components'
import mockTheme from "../../../theme/mockTheme";

import TextTitleParagraph from "./TextTitleParagraph";

describe("TextTitleParagraph", () => {
  it("should render without crashing", () => {
    create(
    <ThemeProvider theme={mockTheme}>
      <TextTitleParagraph>
      </TextTitleParagraph>
    </ThemeProvider>
    );
  });
  it("should match the snapshot", () => {
    const component = create(
      <ThemeProvider theme={mockTheme}>
        <TextTitleParagraph>
          Test
        </TextTitleParagraph>,
      </ThemeProvider>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});