import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 80%;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #d6d9dc;
  padding: 10px;
  margin-top: 5px;

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

export default Container
