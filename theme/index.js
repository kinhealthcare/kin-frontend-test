// default theme preset
import { createGlobalStyle } from 'styled-components';
import inputs, { inputSizes } from './inputs';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto;
    font-size: 12px;
  }
`;

const theme = {
  fonts: {
    body: 'Roboto, Arial, Helvetica, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)',
  },

  inputs: {
    ...inputs,
    sizes: inputSizes,
  },

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
  },
};

export default theme;
