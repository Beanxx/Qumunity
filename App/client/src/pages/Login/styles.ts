import styled from "styled-components"

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  margin-top: 13px;

  div {
    color: var(--content-color);
    font-size: 13px;
  }

  .link-style {
    color: var(--sub-color);

    &:hover {
      border-bottom: 1px solid var(--sub-color);
    }
  }

  button {
    background: none;
    border: none;
    height: 20px;
    color: var(--sub-color);
    font-size: 13px;
    font-weight: 100;
    text-align: center;
    padding: 0;
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid var(--sub-color);
    }
  }
`
