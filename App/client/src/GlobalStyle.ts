import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}


  :root {
    --header-color: #161B22;
    --main-bgc: #0d1117;
    --font-color: #f0f6fc;
    --text-color: #c9d1d9;
    --title-color: #58a6ff;
    --content-color: #8b949e;
    --btn-color: #238636;
    --side-bgc: #161b22;
    --border-color: #21262d;
    --sub-color: #58a6ff;
  }

  body {
    padding-top: 53px;
    background-color: var(--main-bgc);
    color: var(--font-color)
  }

  * {
    box-sizing: border-box;
    line-height: 1.2;
    
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`

export default GlobalStyle
