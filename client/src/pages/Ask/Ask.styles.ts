import styled from "styled-components"

export const Container = styled.div`
  background-color: #f1f2f3;

  h1 {
    display: block;
    font-size: 27px;
    padding: 60px 0;
    background-image: url("https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368");
    background-position: right;
    background-repeat: no-repeat;
  }
`

export const Content = styled.div`
  display: flex;
  gap: 20px;
`

export const Side = styled.aside`
  width: 300px;
  border: 1px solid red;
`
