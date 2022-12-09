import React from "react"
import { BrowserRouter } from "react-router-dom"
import GlobalStyle from "../src/GlobalStyle"
import "@storybook/addon-console"

export const decorators = [
  (Story) => (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Story />
      </BrowserRouter>
    </>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
