import {colours, mediaQueries, text, layers, positioning } from './index';

interface Colours {
  primaryColour: string;
}

export interface ThemeInterface {
  colours: Colours;
  mq: any;
  text: any;
  layers: any;
  positioning: any;
}

const theme: ThemeInterface = {
  colours,
  mq: mediaQueries,
  text,
  layers,
  positioning: positioning
};

export default theme;
