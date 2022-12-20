import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import { store } from "./redux/store"
import App from "./App"
import GlobalStyle from "./styles/GlobalStyle"
import theme from "./styles/Theme"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
)
