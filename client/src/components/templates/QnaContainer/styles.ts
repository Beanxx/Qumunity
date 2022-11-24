import styled from "styled-components"

export const Container = styled.div`
  width: 80%;
  height: calc(100vh - 50px - 20vh);
  display: flex;
  padding: 1rem;
  margin: auto;

  > .inner_box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    > .title_style {
      font-size: 25px;
      font-weight: 500;
      margin-bottom: 5px;
    }
  }
`

export const ListBox = styled.div`
  width: 98%;
  height: 95%;
  background-color: #fff;
  border: 1px solid #d6d9dc;
  border-radius: 5px;
`