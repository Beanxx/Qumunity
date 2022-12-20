import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}


  :root {
    --main-bgc: #0d1117;
    --font-color: #f0f6fc;
    --text-color: #c9d1d9;
    --title-color: #58a6ff;
    --content-color: #8b949e;
    --btn-color: #1f6feb;
    --btn-hover-color: #388bfd;
    --side-bgc: #161b22;
    --border-color: #21262d;
    --gray-color: rgba(240,246,252,0.1);
    --footer-color: rgb(123, 123, 123);
    --hover-bgc: #30363d;

  }

  body {
    padding-top: 53px;
    background-color: var(--main-bgc);
    color: var(--font-color);
    font-family: 'Nanum Gothic', sans-serif;
  }

  * {
    box-sizing: border-box;
    line-height: 1.2;
    color: var(--font-color);
    font-family: 'Nanum Gothic', sans-serif;
    
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`

export default GlobalStyle
