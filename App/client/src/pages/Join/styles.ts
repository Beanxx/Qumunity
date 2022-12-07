import styled from "styled-components"

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 60px;
  background-color: #f1f2f3;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BottomContainer = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  .link-style {
    color: #0074cc;
    &:hover {
      color: #0a95df;
    }
  }
`
