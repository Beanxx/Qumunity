import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    padding-top: 53px;
  }

  * {
    box-sizing: border-box;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: black;
  }
`

export default GlobalStyle
