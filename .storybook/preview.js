import React from "react";
import { GlobalStyle } from "styles/global.styled.js";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/themes";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
