import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  background-color: #f1f2f3;
`

export const Inner = styled.div`
  max-width: 1200px;
  min-width: 1024px;
  padding: 0 30px;
  margin: 0 auto;

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
  padding-bottom: 20px;
`

export const Side = styled.aside`
  width: 300px;
  border: 1px solid red;
`
