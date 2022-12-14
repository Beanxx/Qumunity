import styled from "styled-components"

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`

export const Container = styled.div`
  background: var(--side-bgc);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  width: 330px;
  height: 210px;
  position: fixed;
  top: 25vh;
  left: 40%;
  z-index: 100;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  header {
    text-align: center;
    h2 {
      font-size: 20px;
      color: var(--text-color);
    }
  }

  main {
    p {
      text-align: center;
      font-size: 12px;
      color: gray;
    }
  }

  footer {
    display: flex;
    gap: 10px;
  }
`
