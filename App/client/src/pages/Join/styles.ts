import styled from "styled-components"

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BottomContainer = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  .link-style {
    color: var(--sub-color);
    &:hover {
      color: #6aaefc;
    }
  }
`
