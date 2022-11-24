import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 80%;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #d6d9dc;
  padding: 10px;
  margin: 10px 0;

  > .inner_style {
    width: 100%;

    > .num_style {
      font-size: 20px;
      margin: 5px 0;
    }

    > .title_style {
      font-size: 15px;
      color: #6a737c;
    }
  }
`

export const BottomContainer = styled.div`
  display: flex;
  gap: 10px;
  font-size: 13px;
  .link-style {
    color: #0074cc;
  }
`
