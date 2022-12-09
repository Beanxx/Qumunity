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
  gap: 5px;
  font-size: 14px;
  margin-top: 13px;
  .link-style {
    color: #0074cc;

    &:hover {
      color: #0a95df;
    }
  }

  button {
    background: none;
    border: none;
    color: #0074cc;
    font-size: 13px;
    font-weight: 100;
    text-align: center;
    padding: 0;
    cursor: pointer;

    &:hover {
      color: #0a95df;
    }
  }
`
