import { DocsPage } from '@storybook/addon-docs/blocks';
import { addDecorator, addParameters } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from '../theme';

addParameters({
  options: {
    showRoots: true,
  },
  docs: { page: DocsPage, previewSource: 'open' },
});

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    {' '}
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
));
